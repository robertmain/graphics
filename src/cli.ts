import Rectangle from './shapes/Rectangle';
import Square from './shapes/Square';
import PureImagePainter from './painters/PureImagePainter';

let r = new Rectangle(25, 150, 115, 172);
let s = new Square(150, 200, 300);
let p = new PureImagePainter(1000, 1000, 'rectangle.png');

for(var i = 0; i<=20; i++){
    let s = new Square((i * 10) + 100, (i * 10) + 100, i*10);
    s.paint(p);
}