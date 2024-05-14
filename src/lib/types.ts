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
