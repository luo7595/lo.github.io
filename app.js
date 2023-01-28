let btnC = document.querySelector('#btn');

btnC.addEventListener('click', mostrar);

function mostrar() {
    console.log('aqui');
    let divC = document.querySelector('#div-container');
    divC.classList.toggle('visible');
}