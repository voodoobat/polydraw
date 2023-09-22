/// <reference types="@svgdotjs/svg.draggable.js" />
import { Point, Svg } from '@svgdotjs/svg.js';
import { PointConfig } from '../types';
interface EventTypes {
    onDrag?: ((uid: string, cords: Point) => void) | null;
    onDragComplete?: (() => void) | null;
}
export declare const point: (svg: Svg, cords: Point, config: PointConfig, events?: EventTypes) => {
    uid: string;
    cords: Point;
    el: import("@svgdotjs/svg.js").Circle;
    update: (cords: Point) => void;
    remove: () => void;
};
export {};
