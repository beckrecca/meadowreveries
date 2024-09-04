export type Product = {
	name: string;
	id: string;
	price: number;
	description: string;
	productType: string;
	image: string;
	alt: string;
	dimensions: string;
	custom1name: string;
	custom1type: string;
	custom1value: string;
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
	productid: string,
	youtube: string,
	base: string,
	referraltext: string,
	public: boolean,
	description: string,
	video_id: string
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
	endseconds: number,
	referredalias: string,
	referraltext: string
}

export type Fiber = {
	id: number,
	fiber: string,
	image: string,
	alt: string,
	description: string
}