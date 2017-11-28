import Shape from './Shape';
import Painter from '../painters/Painter';

export default class Rectangle extends Shape{

    public constructor(
        readonly x     : number,
        readonly y     : number,
        readonly width : number,
        readonly height: number
    ){
        super();
    }

    public paint(painter :Painter): void {
        painter.drawLine(this.x, this.y, this.x + this.width, this.y);                             // Top edge
        painter.drawLine(this.x + this.width, this.y, this.x + this.width, this.y + this.height);  // Right Edge
        painter.drawLine(this.x, this.y + this.height, this.x + this.width, this.y + this.height); // Bottom Edge
        painter.drawLine(this.x, this.y, this.x, this.y + this.height)                             // Left Edge
    }

    public calculateArea(): number{
        return this.width * this.height;
    }
}
