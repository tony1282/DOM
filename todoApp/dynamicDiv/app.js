const inputAlto = document.querySelector('#height');
const inputAncho = document.querySelector('#width');
const inputRadio = document.querySelector('#radius');
const inputSombra = document.querySelector('#shadow');
const figure = document.querySelector('.container'); // Aseguramos que es la clase .container

let altopar = 0;
let anchopar = 0;
let radiopar = 0;
let sombrapar = 0;

const cambiodepropiedadesalto = () => {
    return ${altopar}px;
};
const cambiodepropiedadesancho = () => {
    return ${anchopar}px;
};
const cambiodepropiedadesradio = () => {
    return ${radiopar}px;
};
// Función corregida para la sombra
const cambiodepropiedadessombra = () => {
    return 10px 10px ${sombrapar}px rgba(0, 0, 0, 0.5); // Sombra con desplazamiento y blur dinámico
};

// Event listeners para actualizar los valores en tiempo real
inputAlto.addEventListener('input', (al) => {
    altopar = al.target.value;
    figure.style.height = cambiodepropiedadesalto();
});

inputAncho.addEventListener('input', (an) => {
    anchopar = an.target.value;
    figure.style.width = cambiodepropiedadesancho();
});

inputRadio.addEventListener('input', (ra) => {
    radiopar = ra.target.value;
    figure.style.borderRadius = cambiodepropiedadesradio();
});

inputSombra.addEventListener('input', (so) => {
    sombrapar = so.target.value;
    figure.style.boxShadow = cambiodepropiedadessombra(); // Aplicar el estilo de la sombra
});