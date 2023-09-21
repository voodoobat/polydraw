import '@svgdotjs/svg.draggable.js';
import { PolydrawConfig, PolydrawData, PolydrawDataObject } from './types';
export declare const polydraw: (target: string, img: string, config?: Partial<PolydrawConfig>) => Promise<{
    placePolygon: (polygon: PolydrawDataObject) => void;
    readonly data: PolydrawData;
} | undefined>;
