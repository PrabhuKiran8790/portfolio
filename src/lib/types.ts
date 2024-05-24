export interface BasePost {
	title: string;
	slug: string;
	description: string;
	date: string;
	tags: string[];
	image?: string;
	icon?: string;
	useIconInHome?: boolean;
	// image: string | string[];
	draft: boolean;
}

export interface Series extends BasePost {
	order: number;
	coverTitle: string;
	coverDescription: string;
	totalParts: number;
}

export interface Post extends BasePost {
	subPosts?: Series[];
}

export interface SeriesPost extends BasePost {
	parts: number;
	coverFolder: string;
	subPosts: Series[];
}

export type Work = {
	_id: number;
	link: string;
	title: string;
	excerpt: string;
	note: string;
	cover: string;
	domain: string;
	tags: string[];
};

export type MetadataGetter = {
	title: string;
	description: string;
	link: string;
	techstack: string[];
	cover: string;
	order: number;
};

export interface Module {
	default: ConstructorOfATypedSvelteComponent;
	metadata: MetadataGetter;
}

export interface ModuleWithFilename extends Module {
	filename: string;
}
