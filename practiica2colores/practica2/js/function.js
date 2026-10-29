
const btnTheme = document.querySelector('#btn_cambio');

const padre = document.getElementById('div_padre');
const nombresOriginales = [
    'ROJO',
    'ROSA',
    'NARANJA',
    'AZUL',
    'CAFE',
    'VERDE',
    'AMARILLO',
    'MORADO'
];
const nombresNuevos = [
    'VERDE',
    'AZUL',
    'NEGRO',
    'AMARILLO',
    'MORADO',
    'NARANJA',
    'AZUL',
    'ROSA'
];
const divs = padre.querySelectorAll('.aa');
btnTheme.addEventListener('click', () => {
    padre.classList.toggle('cambio');
    const cambioActivo = padre.classList.contains('cambio');
    divs.forEach((div, i) => {

        if (cambioActivo) {
            div.textContent = nombresNuevos[i];
        } else {
            div.textContent = nombresOriginales[i];
        }

    });
    if (cambioActivo) {
        btnTheme.textContent = 'Regresar colores originales';
    } else {
        btnTheme.textContent = 'Cambiar colores';
    }

});
