const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const ball = {
    x: 0,
    y: 0,
    show: function () {
        ctx.font = "50px serif"
        ctx.fillText('🤓', this.x * 10, this.y * 10)
       // if (this.on) ctx.fillStyle = 'yellow';
        //ctx.beginPath();
        //ctx.arc(this.x * 10, this.y * 10, 10, 0, Math.PI * 2);
        //ctx.fill();
        //this.on = !this.on;
    }
}

const food ={
    x:10,
    y:10,
    show: function (){
        ctx.font = "50px serif"
        ctx.fillText('❤️‍🩹', this.x * 10, this.y *10)
    },
    aparece: function (){
        this.x = Math.ceil(Math.random() * 59);
        this.x = Math.ceil(Math.random() * 39);
    
    }
}

function checkEat(){
    return ball.x === food.x && ball.y === food.y;
}



let direction = 1;
let x = 1
let y = 1

food.aparece();
setInterval(() => {
    
    ctx.clearRect(0, 0, 800, 600);
    ball.x = x;
    ball.y = y;
    ball.show();
    food.show();
    if(checkEat())food.aparece();
    if (direction === 1) x++;
    else if (direction === 2) y++;
    else if (direction === 3) x--;
    else y--;

    //validar limites
    if (x > 80) x = 1;
    if (x < 1) x = 80;
    if (y > 60) y = 1;
    if (y < 1) y = 60;
}, 50);

document.querySelector('body')
    .addEventListener('keydown', e => {
        
        //validar tecla y cambiar direccion
        if(e.key === 'ArrowRight') direction = 1;
        if(e.key === 'ArrowDown') direction = 2;
        if(e.key === 'ArrowLeft') direction = 3;
        if(e.key === 'ArrowUp') direction = 4;

    })
