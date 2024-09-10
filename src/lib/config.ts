import Sparkles from 'lucide-svelte/icons/sparkles';
import PencilLine from 'lucide-svelte/icons/pencil-line';
import MousePointer2 from 'lucide-svelte/icons/mouse-pointer-2';
import FolderKanban from 'lucide-svelte/icons/folder-kanban';
import Bookmark from 'lucide-svelte/icons/bookmark';
import Github from 'lucide-svelte/icons/github';
import Linkedin from 'lucide-svelte/icons/linkedin';
import { X } from './icons';

export const owner = {
	name: 'Prabhu Kiran Konda',
	title: 'Software Engineer'
};

export const routes = [
	{
		name: 'Home',
		path: '/',
		icon: Sparkles
	},
	{
		name: 'Writing',
		path: '/writing',
		icon: PencilLine
	},
	{
		name: 'Journey',
		path: '/journey',
		icon: MousePointer2,
		customClass: 'rotate-90'
	},
	{
		name: 'Work',
		path: '/work',
		icon: FolderKanban
	},
	{
		name: 'Bookmarks',
		path: '/bookmarks',
		icon: Bookmark
	}
];

export const socials = [
	{
		name: 'X (Twitter)',
		url: 'https://x.com/prabhukirantwt',
		icon: X
	},
	{
		name: 'Github',
		url: 'https://github.com/PrabhuKiran8790',
		icon: Github
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/prabhukirankonda',
		icon: Linkedin
	}
];

export const work = {
	company: 'Capgemini',
	role: 'Software Engineer'
};

export const githubConfig = {
	username: 'PrabhuKiran8790',
	repo: 'portfolio',
	branch: 'main'
};
