const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const circle = {
    x: lienzo.width / 2, // Centra el círculo en el lienzo
    y: lienzo.height / 2,
    radioInicial: 50, // Radio inicial
    cambioRadio: 2, // Cambia el tamaño del círculo
    growing: true, // Para saber si el círculo está creciendo
    color: 'rgb(100, 20, 30)', // Color del círculo

    // Método para mostrar el círculo
    show: function() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radioInicial, 0, Math.PI * 2);
        ctx.fill();
    },

    // Método para actualizar el tamaño del círculo
    updateSize: function() {
        if (this.growing) {
            this.radioInicial += this.cambioRadio;
            if (this.radioInicial > 200) { // Limite superior
                this.growing = false; // Cambia a encogerse
            }
        } else {
            this.radioInicial -= this.cambioRadio;
            if (this.radioInicial < 10) { // Limite inferior
                this.growing = true; // Cambia a crecer
            }
        }
    }
};

setInterval(() => {
    ctx.clearRect(0, 0, lienzo.width, lienzo.height); // Limpia el lienzo
    circle.updateSize(); // Actualiza el tamaño del círculo
    circle.show(); // Muestra el círculo
}, 30); // Actualiza cada 30 ms
