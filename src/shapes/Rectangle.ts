import Shape from './Shape';
import Painter from '../painters/Painter';

export default class Rectangle extends Shape{
    
    private x     : number;
    private y     : number;
    private width : number;
    private height: number;
    
    public constructor(x : number, y : number, width :number, height :number) {
        super();
        this.x     = x;
        this.y     = y;
        this.width = width;
        this.height = height;
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
