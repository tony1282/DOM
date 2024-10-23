const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
ctx.font = "20px serilf "

const sanke = [
    {
        x: 2,
        y: 1,
        on: true,
        show: function () {
            ctx.fillText('🟥', this.x * 20, this.y * 20)
        }
    },
    {
        x: 1,
        y: 1,
        xSig: 2,
        ySig: 1,
        on: true,
        show: function () {
            ctx.fillText('🟥', this.x * 20, this.y * 20)
        }
    },
  
       
]

function checkCollision() {
    for (let i = 2; i < sanke.length; i++) {
        if (sanke[0].x === sanke[i].x && sanke[0].y === sanke[i].y) {
            alert('perdiste');
            location.reload();
        }
    }
}

const food = {
    x: 0,
    y: 0,
    show: function () {
        ctx.fillText('🍕', this.x * 20, this.y * 20)
    },
    aparece: function () {
        // generar valores this.x y this.y aletorios 
        this.x = Math.ceil(Math.random() * 29);
        this.y = Math.ceil(Math.random() * 19) + 1;
    }
}

let count = 0;

function checkEat() {
    if (sanke[0].x === food.x && sanke[0].y === food.y) {
        food.aparece();
        sanke.push({...sanke[1]});
        count++;

    }
}

function nextMove(x, y) {
    sanke.forEach((item, idx) => {
        if (idx === 0) {
            item.x = x;
            item.y = y;
        } else {
            item.x = item.xSig;
            item.y = item.ySig;
            item.xSig = sanke[idx - 1].x;
            item.ySig = sanke[idx - 1].y;
        }
    })
}

let direction = 1;
let x = 2;
let y = 1;

food.aparece();

gameInterval = setInterval(() => {
    ctx.clearRect(0, 0, 800, 600);
    nextMove(x, y);
    sanke.forEach(i => i.show());
    food.show();
    checkCollision();
    checkEat();
    ctx.fillStyle = "black";
    ctx.fillText(`puntos: ${count}`, 10, 20);
    if (direction === 1) x++;
    else if (direction === 2) y++;
    else if (direction === 3) x--;
    else y--;

    //validar limites
    if (x > 29) x = 0;
    else if (x < 0) x = 29;
    if (y > 20) y = 2;
    else if (y < 1) y = 20;
}, 80);


document.querySelector('body')
    .addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') direction = 1;
        if (e.key === 'ArrowDown') direction = 2;
        if (e.key === 'ArrowLeft') direction = 3;
        if (e.key === 'ArrowUp') direction = 4;
    }, 20);