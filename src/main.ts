import Square  from "./shapes/Square";
import PureImagePainter from './painters/PureImagePainter';

let myPainter = new PureImagePainter(1000, 1000, 'helloworld.png');

for(let i=0; i<=10; i++) {
    console.log('Painting square ' + i + '...');
    let previousSquareWidth = (i - 1)*10;
    let offset = previousSquareWidth + 10;
    let square = new Square(offset, i *10, i*40);
    square.paint(myPainter);
}
