import Rectangle from "./Rectangle";

export default class Square extends Rectangle{
    public constructor (size: number){
        super(size, size);
    }
}