import { sql } from '@vercel/postgres';
import {
  Product,
  Image,
  Tutorial,
  TutorialStep,
  Fiber
} from './definitions';

/*
* Products for Sale
*/

export async function fetchProducts() {
	try {
		const products = await sql<Product>`
			SELECT
				*
			FROM products;
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch products.');
	}
}

export async function fetchListedProducts() {
	try {
		const products = await sql<Product>`
			SELECT
				*
			FROM products
			where unlisted = FALSE;
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch products.');
	}
}

export async function fetchHandmadeProducts() {
	try {
		const products = await sql<Product>`
			SELECT
				*
			FROM products
			where producttype = 'handmade';
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch products.');
	}
}

export async function fetchListedHandmadeProducts() {
	try {
		const products = await sql<Product>`
			SELECT
		    products.*,
		    MIN(images.file) as image2
			FROM 
			products
			JOIN images ON images.productid = products.id
			WHERE images.file NOT LIKE '%01.png'
			AND products.producttype = 'handmade' AND products.unlisted = false
			AND products.available = true
			GROUP BY products.name, products.id
			ORDER BY name ASC;
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch products.');
	}
}

export async function fetchExampleProducts() {
	try {
		const products = await sql<Product>`
			SELECT
				products.name,
				products.price,
				products.dimensions,
				images.*
			FROM products
			JOIN images ON images.productid = products.id
			where products.producttype = 'customExample';
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch products.');
	}
}

export async function fetchDiyProducts() {
	try {
		const products = await sql<Product>`
			SELECT
		    products.*,
		    MIN(images.file) as image2
			FROM 
			products
			JOIN images ON images.productid = products.id
			WHERE images.file NOT LIKE '%01.png'
			AND products.producttype = 'diy'
			GROUP BY products.name, products.id
			ORDER BY name ASC;
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch products.');
	}
}

/*
* Gallery Images
*/

export async function fetchExampleImages() {
	try {
		const images = await sql<Image>`
			SELECT
				images.file,
				images.alt
			FROM images
			JOIN products on product.id = image.productid
			where producttype = 'customExample';
		`;
		return images.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch images.');
	}
}

export async function fetchImagesByProductID(id: string) {
	try {
		const images = await sql<Image>`
			SELECT
				images.file,
				images.alt
			FROM images
			where images.productid = ${id}
			order by images.id DESC
			;
		`;
		return images.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch image data.');
	}
}

export async function fetchHandmadeProductsPreview() {
	try {
		const products = await sql<Product>`
			SELECT
		    products.*,
		    MIN(images.file) as image2
			FROM 
			products
			JOIN images ON images.productid = products.id
			WHERE images.file NOT LIKE '%01.png'
			AND products.producttype = 'handmade' AND products.unlisted = false
			AND products.available = true
			GROUP BY products.name, products.id
			ORDER BY RANDOM()
			LIMIT 6;
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch products.');
	}
}

export async function fetchExampleCustomPreview() {
	try {
		const products = await sql<Product>`
			SELECT
				products.name,
				products.price,
				products.dimensions,
				images.*
			FROM products
			JOIN images ON images.productid = products.id
			where products.producttype = 'customExample'
			and products.id != 'sylvie-example'
			ORDER BY RANDOM()
			LIMIT 6;
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch products.');
	}
}

/*
* Tutorials
*/

export async function fetchTutorials() {
	try {
		const tutorials = await sql<Tutorial>`
			SELECT
				*
			FROM tutorials
			WHERE public = 'true';
		`;
		return tutorials.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch tutorials.');
	}
}

export async function fetchBasicTutorials() {
	try {
		const tutorials = await sql<Tutorial>`
			SELECT
				*
			FROM tutorials
			WHERE public = 'true' AND type='basic';
		`;
		return tutorials.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch tutorials.');
	}
}

export async function fetchTutorialStepsByTutorialId(tutorialid: number) {
	try {
		const steps = await sql<TutorialStep>`
			SELECT
				tutorialsteps.*,
				tutorials.alias as referredalias,
				tutorials.referraltext
			FROM tutorialsteps
			LEFT JOIN tutorialstepstutorials ON tutorialstepstutorials.tutorialstepid = tutorialsteps.id
			LEFT JOIN tutorials ON tutorials.id = tutorialstepstutorials.tutorialid
			WHERE tutorialsteps.tutorialid = ${tutorialid}
			ORDER BY stepenum ASC;
		`;
		return steps.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch tutorialsteps.');
	}
}

export async function fetchKitFibersByProductId(productid: string) {
	try {
		const fibers = await sql<Fiber>`
			SELECT
				fibers.*
			FROM fibers
			JOIN fibersproducts ON fibersproducts.fiberid = fibers.id
			WHERE productid = ${productid}
			;
		`;
		return fibers.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch tutorialsteps.');
	}
}

export async function fetchNewProducts() {
	try {
		const fibers = await sql<Fiber>`
			SELECT
		    products.*,
		    MIN(images.file) as image2
			FROM 
			products
			JOIN images ON images.productid = products.id
			WHERE images.file NOT LIKE '%01.png'
			AND products.id IN (
				'diy-bcch',
				'mini-pumpkin-borb',
				'pumpkin-borb',
				'mini-wreath-fall',
				'mini-wreath-bat',
				'lil-harvest-basket'
			)
			GROUP BY products.name, products.id
			order by products.id asc
			;
		`;
		return fibers.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch tutorialsteps.');
	}
}