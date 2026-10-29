const btnTheme = document.querySelector('#btn_cambio');
const body = document.body;
btnTheme.addEventListener('click',() =>{
    body.classList.toggle('modo_oscuro');
    if (body.classList.contains('modo_oscuro')) {
        btnTheme.textContent = 'Modo claro';
    }else{
        btnTheme.textContent = 'Modo oscuro';
        
    }
    console.log('Modo oscuro activo:', body.classList.contains('Modo oscuro'));
});

const form = document.getElementById('formulario');

if (form) {
    const nombre = document.getElementById('nombre');
    const celular = document.getElementById('celular');
    const email = document.getElementById('email');
    const respuesta = document.getElementById('respuesta');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (
            nombre.value.trim() === '' ||
            celular.value.trim() === '' ||
            email.value.trim() === ''
        ) {
            respuesta.style.color = 'red';
            respuesta.textContent = 'Llena todos los campos obligatorios.';

        } else if (!/^\d{10}$/.test(celular.value.trim())) {
            respuesta.style.color = 'red';
            respuesta.textContent = 'El celular debe tener 10 dígitos.';

        } else {
            respuesta.style.color = 'green';
            respuesta.textContent = '¡Formulario validado correctamente!';
            form.reset();
        }
    });
}
