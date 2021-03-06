import * as React from 'react';
import { MenuItem } from '../menuitem';

export interface BreadCrumbProps {
    id?: string;
    model?: MenuItem[];
    home?: MenuItem;
    style?: object;
    className?: string;
    children?: React.ReactNode;
}

export declare class BreadCrumb extends React.Component<BreadCrumbProps, any> { }
