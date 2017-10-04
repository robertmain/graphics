import Rectangle from "./Rectangle";

export default class Square extends Rectangle{
    public constructor (x : number, y : number, size: number){
        super(x, y, size, size);
    }
}