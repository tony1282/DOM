const body = document.querySelector('body');
const btnChange = document.querySelector('#btnChange');
const span = document.querySelector('h2 span');

const changeColor = () => {
    let color = '#'
    const letras = '0123456789ABCDEF'
    for(let i = 0; i < 6; i++){
        const aletorio = Math.floor(Math.random() * 16);
        color += letras[aletorio];
    }
    body.style.backgroundColor = color;
    span.innerText = color;
}

btnChange.addEventListener('click' , changeColor);