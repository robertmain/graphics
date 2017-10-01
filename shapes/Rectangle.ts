import Shape from './Shape';
import Painter from '../painters/Painter';

export default class Rectangle extends Shape{
    protected width: number;
    protected height: number;

    public constructor(width :number, height :number) {
        super();
        this.width  = width;
        this.height = height;
    }

    public paint(p :Painter): void {
        throw new Error("Method not implemented.");
    }

    public calculateArea(): number{
        return this.width * this.height;
    }
}
