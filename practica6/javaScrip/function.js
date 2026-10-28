const btnModo = document.getElementById('btn_modo');
const body = document.body;

btnModo.addEventListener('click', () => {
    body.classList.toggle('modo_oscuro');
    
    if (body.classList.contains('modo_oscuro')) {
        btnModo.textContent = 'Modo Claro';
    } else {
        btnModo.textContent = 'Modo Oscuro';
    }
});

const form = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const celular = document.getElementById('celular');
const respuesta = document.getElementById('respuesta');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (nombre.value.trim() === '' || celular.value.trim() === '') {
        respuesta.style.color = 'red';
        respuesta.textContent = 'Llena todos los campos obligatorios.';
    } else if (celular.value.length !== 10) {
        respuesta.style.color = 'red';
        respuesta.textContent = 'El teléfono debe ser de 10 dígitos.';
    } else {
        respuesta.style.color = 'green';
        respuesta.textContent = '¡Enviado con éxito!';
        form.reset();
    }
});