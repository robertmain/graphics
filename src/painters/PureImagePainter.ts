import Painter from './Painter';
import * as pureimage from 'pureimage';
import Line from 'pureimage/src/Line';
import * as COLORS from 'pureimage/src/named_colors';
import fs = require("fs");

export default class PureImagePainter implements Painter{

    private fileName: string;
    private image   : any;
    private context : any;
    private width   : number;
    private height  : number;

    constructor(width : number, height : number, filename : string) {
        this.fileName = filename;
        this.image    = pureimage.make(width, height);
        this.context  = this.image.getContext('2d');
    }

    public drawLine(startX: number, startY: number, endX: number, endY: number) : void {
        this.context._strokeColor = COLORS.white;
        this.context.drawLine(new Line(startX, startY, endX, endY));

        pureimage.encodePNGToStream(this.image, fs.createWriteStream(this.fileName)).then(()=> {
            return true;
        }).catch((e : Error)=>{
            throw new Error('Unable to write out to file:  ' + e);
        });

    }
}