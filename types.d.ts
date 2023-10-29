import { ReactNode } from "react";

export type Props = {
	children?: ReactNode;
};

export type ITheme = {
	theme: string;
	toggle: () => void;
};

export type QueryParams = {
	searchParams: {
		page?: string;
	};
};

export type Category = {
	_id: string;
	slug: string;
	title: string;
	image?: string;
	Post?: any;
};

export type Post = {
	_id: string;
	createdAt: string;
	slug: string;
	title: string;
	desc: string;
	image?: string;
	views: number;
	catSlug: string;
	userEmail: string;
};

export type User = {
	name: string;
	email: string;
	emailVerified?: any;
	image: string;
    [key]?: any;
};
