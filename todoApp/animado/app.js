const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let x = 0;
let y = 0;

const square = {
    x:0,
    y:0,
    dirX: true,
    dirY: true,
    color: 'rgba(100,20,30',
    getColor: function(){
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const t = Math.random();
        this.color = `rgba(${r}, ${g}, ${b}, ${t})`

    },
    show: function (){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 40,0 , Math.PI * 2);
        ctx.fill();

    }
}

setInterval(() => {
    square.x = x;
    square.y = y;
    square.getColor();

    square.show();
    x = square.dirX? x + 30 : x - 30;
    y = square.dirY? y + 20 : y - 20;
    square.dirX = x >= 800? !square.dirX: square.dirX;
    square.dirY = y >= 600? !square.dirY: square.dirY;
    square.dirX = x <= 0? !square.dirX: square.dirX;
    square.dirY = y <= 0? !square.dirY: square.dirY;
}, 50);