import { ReactNode } from 'react';

export type Props = {
    children?: ReactNode
};

export type ITheme = {
    theme: string;
    toggle: () => void;
};