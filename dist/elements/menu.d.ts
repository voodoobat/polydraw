import { MenuConfig } from '../types';
import { Point } from '@svgdotjs/svg.js';
export declare const menu: (root: HTMLElement, cords: Point, config: MenuConfig, onClick: () => void) => {
    remove: () => void;
};
