import { PointArray, Svg } from '@svgdotjs/svg.js';
import { CircuitConfig } from '../types';
export declare const circuit: (svg: Svg, points: PointArray, config: CircuitConfig) => {
    update: (points: PointArray) => void;
    remove: () => void;
};
