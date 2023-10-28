import { ReactNode } from 'react';

export type Props = {
    children?: ReactNode
};

export type ITheme = {
    theme: string;
    toggle: () => void;
};

export type Category = {
    _id: string;
    slug: string;
    title: string;
    image?: string;
    Post?: any
}