import { Point, Svg } from '@svgdotjs/svg.js';
import { PolydrawConfig } from '../types';
export declare const guide: (svg: Svg, start: Point, end: Point, config: PolydrawConfig) => {
    update: (start: Point, end: Point) => void;
    remove: () => void;
};
