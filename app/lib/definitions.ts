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
	weight: number;
};

export type Image = {
	file: string;
	alt: string;
}

export type Tutorial = {
	id: number,
	alias: string,
	name: string,
	image: string,
	type: string,
	youtube: string,
	base: string,
	referraltext: string,
	public: boolean
}

export type TutorialStep = {
	id: number,
	tutorialid: number,
	stepenum: number,
	stepheader: string,
	steptext: string,
	image: string,
	alt: string,
	startseconds: number,
	endseconds: number
}

export type Fiber = {
	id: number,
	fiber: string,
	image: string,
	alt: string,
	description: string
}