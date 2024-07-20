import { sql } from '@vercel/postgres';
import {
  Products,
  Images
} from './definitions';

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

export async function fetchExampleProducts() {
	try {
		const products = await sql<Product>`
			SELECT
				*
			FROM products
			where producttype = 'customExample';
		`;
		return products.rows;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch products.');
	}
}

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
		const data = await sql<Image>`
			SELECT
				images.file,
				images.alt
			FROM images
			where images.productid = ${id};
		`;
		return data;
	}
	catch (error) {
		console.log("Whoopsies database error: ", error);
		throw new Error('Failed to fetch image data.');
	}
}