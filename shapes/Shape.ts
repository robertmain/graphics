import Painter from '../painters/Painter';

export default abstract class Shape{
    backgroundColor : string;
    lineColor : string;
    lineThickness : number;

    abstract paint(p :Painter) : void;
}
