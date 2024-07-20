export type Product = {
	name: string;
	id: string;
	price: number;
	description: string;
	productType: string;
	image: string;
	alt: string;
	dimensions: string;
	custom1Name: string;
	custom1Type: string;
	custom1Value: string;
	available: boolean;
	unlisted: boolean;
};

export type Image = {
	file: string;
	alt: string;
}