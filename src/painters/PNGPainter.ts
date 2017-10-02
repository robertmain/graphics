import Painter from './Painter';
import * as pureimage from 'pureimage';

export default class PNGPainter implements Painter{
    drawLine(startX: number, startY: number, endX: number, endY: number): void {
        throw new Error("Method not implemented.");
    }
}