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
		throw new Error('Failed to fetch listed products.');
	}
}

export async function fetchHandmadeProducts() {
	try {
		const products = await sql<Product>`
			SELECT
				products.*,
				productspromos.promoprice,
				promos.enabled as promoenabled
			FROM products
			LEFT JOIN productspromos ON productspromos.productid = products.id
		  LEFT JOIN promos ON promos.id = productspromos.promoid
			where producttype = 'handmade';
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch handmade products.');
	}
}

export async function fetchListedHandmadeProducts() {
	try {
		const products = await sql<Product>`
			SELECT
				products.*,
				MIN(images.file) as image2,
				productspromos.promoprice,
				promos.enabled as promoenabled
			FROM 
			products
			JOIN images ON images.productid = products.id
			LEFT JOIN productspromos ON productspromos.productid = products.id
		  LEFT JOIN promos ON promos.id = productspromos.promoid
			WHERE images.file NOT LIKE '%01.png'
			AND products.producttype = 'handmade' AND products.unlisted = false
			AND products.available = true
			GROUP BY products.name, products.id, productspromos.promoprice, promos.enabled
			ORDER BY name ASC;
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch listed handmade products.');
	}
}

export async function fetchDiyProducts() {
	try {
		const products = await sql<Product>`
			SELECT
		    products.*,
		    MIN(images.file) as image2,
				productspromos.promoprice,
				promos.enabled as promoenabled
			FROM 
			products
			JOIN images ON images.productid = products.id
			LEFT JOIN productspromos ON productspromos.productid = products.id
		  LEFT JOIN promos ON promos.id = productspromos.promoid
			WHERE images.file NOT LIKE '%01.png'
			AND products.producttype = 'diy'
			GROUP BY products.name, products.id, productspromos.promoprice, promos.enabled
			ORDER BY name ASC;
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch diy products.');
	}
}

export async function fetchSaleProducts() {
	try {
		const products = await sql<Product>`
			SELECT
				products.*,
				MIN(images.file) as image2,
				productspromos.promoprice,
				promos.enabled as promoenabled,
				promos.name as promoname
			FROM 
			products
			JOIN images ON images.productid = products.id
			LEFT JOIN productspromos ON productspromos.productid = products.id
		  LEFT JOIN promos ON promos.id = productspromos.promoid
			WHERE images.file NOT LIKE '%01.png'
			AND promos.enabled = 'TRUE'
			GROUP BY products.name, products.id, productspromos.promoprice, promos.enabled, promos.name
			ORDER BY name ASC;
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch sale products.');
	}
}

export async function fetchNewProducts() {
	try {
		const products = await sql<Product>`
			SELECT
		    products.*,
		    MIN(images.file) as image2
			FROM 
			products
			JOIN images ON images.productid = products.id
			WHERE images.file NOT LIKE '%01.png'
			AND products.id IN (
				'diy-amro',
				'diy-bcch',
				'diy-eablm',
				'witch-borb',
				'bat-borb',
				'mini-pumpkin-borb',
				'pumpkin-borb',
				'mini-wreath-fall',
				'mini-wreath-bat',
				'lil-harvest-basket'
			)
			GROUP BY products.name, products.id
			order by products.producttype
			;
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch new products.');
	}
}

/*
* Example Gallery for Commissions
*/

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
			where products.producttype = 'customExample'
			and products.id != 'sylvie-example';
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch custom example products.');
	}
}

export async function fetchSylviePortraits() {
	try {
		const products = await sql<Product>`
			SELECT
				products.name,
				products.price,
				products.dimensions,
				images.*
			FROM products
			JOIN images ON images.productid = products.id
			where products.id = 'sylvie-example';
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch Sylvie portraits.');
	}
}

/*
* Product Previews for Homepage
*/
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
		throw new Error('Failed to fetch handmade products preview.');
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
			GROUP BY products.id, images.id
			ORDER BY RANDOM()
			LIMIT 6;
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch example custom products preview.');
	}
}

export async function fetchNewProductsPreview() {
	try {
		const products = await sql<Product>`
			SELECT
		    products.*,
		    MIN(images.file) as image2
			FROM 
			products
			JOIN images ON images.productid = products.id
			WHERE images.file NOT LIKE '%01.png'
			AND products.id IN (
				'diy-bcch',
				'diy-amro',
				'diy-eablm',
				'witch-borb',
				'bat-borb',
				'mini-pumpkin-borb',
				'pumpkin-borb',
				'mini-wreath-fall',
				'mini-wreath-bat',
				'lil-harvest-basket'
			)
			GROUP BY products.name, products.id
			LIMIT 6
			;
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch new products.');
	}
}

export async function fetchSaleProductsPreview() {
	try {
		const products = await sql<Product>`
			SELECT
		    products.*,
		    MIN(images.file) as image2,
				productspromos.promoprice,
				promos.enabled as promoenabled,
				promos.name as promoname    
			FROM 
			products
			JOIN images ON images.productid = products.id
			LEFT JOIN productspromos ON productspromos.productid = products.id
		  LEFT JOIN promos ON promos.id = productspromos.promoid
			WHERE images.file NOT LIKE '%01.png'
			AND promos.enabled = 'true'
			AND products.available = 'true'
			GROUP BY products.name, products.id, productspromos.promoprice, promos.enabled, promos.name
			ORDER BY RANDOM()
			LIMIT 6
			;
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch new products.');
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
			where producttype = 'customExample'
			and products.id != 'sylvie-example'
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