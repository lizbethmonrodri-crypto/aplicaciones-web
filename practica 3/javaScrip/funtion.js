const btnTheme = document.querySelector('#btn_cambio');
const btnTheme2 = document.querySelector('#btn_cambio2');

const padre = document.getElementById('div_DLMR');
btnTheme.addEventListener('click', () => {

    padre.classList.toggle('modo_oscuro');

    if (padre.classList.contains('modo_oscuro')) {
        btnTheme.textContent = 'Modo claro';
    } else {
        btnTheme.textContent = 'Modo oscuro';
    }

    console.log('Modo oscuro aplicado:',
        padre.classList.contains('modo_oscuro'));

});
btnTheme2.addEventListener('click', () => {

    padre.classList.toggle('modo_transparente');

    if (padre.classList.contains('modo_transparente')) {
        btnTheme2.textContent = 'Opaco :)';
    } else {
        btnTheme2.textContent = 'Transparente :)';
    }

    console.log(
        'Se aplicó transparente:',
        padre.classList.contains('modo_transparente')
    );

});
const ingredientes = document.querySelectorAll('.ingrediente');

ingredientes.forEach((ingrediente) => {

    ingrediente.addEventListener('click', () => {
        if (window.matchMedia('(max-width: 750px)').matches) {
            ingrediente.classList.toggle('mostrar');
        }

    });

});

console.log('Recetario funcionando correctamente');