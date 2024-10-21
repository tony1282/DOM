const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let x = 300;
let y = 200;
let radioInicial = 50;
let cambioRadio = 2;
let coloInicial = 0;

const circle = {
    x: 200,
    y: 300,
    radioInicial: 1,
    cambioRadio: 2,
    coloInicial: 0,
    dirX: false,
    dirY: false,
    color: rgb(100, 20, 30),
    getColor: function(){
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        this.color = rgb(${r}, ${g}, ${b});
    },
    show: function() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radioInicial, 0, Math.PI * 2);
        ctx.fill();
    },
    getSize: function(){
        radioInicial += cambioRadio;
        if (radioInicial > 200 || radioInicial < 1){
            cambioRadio =- cambioRadio;
        }
        coloInicial += 1;
        if (coloInicial>= 360){
            coloInicial = 0;
        }
    }
}
setInterval(() => {
    ctx.clearRect(0, 0, 600, 400)
    circle.y = y;
    circle.radioInicial = radioInicial;
    circle.cambioRadio = cambioRadio;
    circle.coloInicial = coloInicial;
    circle.getColor();
    circle.show();
    circle.getSize();
    circle.x = x;
    }, 10);
