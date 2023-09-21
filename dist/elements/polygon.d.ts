import { PointArray, Svg } from '@svgdotjs/svg.js';
import { PointElement, Polydraw, PolygonConfig } from '../types';
export declare const polygon: (svg: Svg, path: PointArray, rootState: Polydraw, config: PolygonConfig) => {
    uid: string;
    points: PointElement[];
    remove: () => void;
};
