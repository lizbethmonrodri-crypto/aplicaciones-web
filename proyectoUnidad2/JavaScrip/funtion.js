const btnModo = document.getElementById('btn_modo');
const body = document.body;

if (btnModo) {
    btnModo.addEventListener('click', () => {
        body.classList.toggle('modo_oscuro');

        if (body.classList.contains('modo_oscuro')) {
            btnModo.textContent = 'Modo claro';
        } else {
            btnModo.textContent = 'Modo oscuro';
        }
    });
}

const formulario = document.getElementById('formulario');

if (formulario) {
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const celular = document.getElementById('celular').value.trim();
        const motivo = document.getElementById('motivo').value;
        const mensaje = document.getElementById('mensaje').value.trim();
        const acepto = document.getElementById('acepto').checked;
        const respuesta = document.getElementById('respuesta');

        if (
            nombre === '' ||
            email === '' ||
            celular === '' ||
            motivo === '' ||
            mensaje === ''
        ) {
            respuesta.style.color = '#c0394f';
            respuesta.textContent ='Por favor, completa todos los campos obligatorios.';

        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            respuesta.style.color = '#c0394f';
            respuesta.textContent =
                'Escribe un correo electrónico válido.';

        } else if (!/^\d{10}$/.test(celular)) {
            respuesta.style.color = '#c0394f';
            respuesta.textContent = 'El celular debe tener exactamente 10 dígitos.';

        } else if (!acepto) {
            respuesta.style.color = '#c0394f';
            respuesta.textContent ='Debes confirmar que revisaste los datos.';

        } else {
            respuesta.style.color = '#2f8057';
            respuesta.textContent =
                '¡Formulario validado correctamente! ' +
                'Esta es una demostración y no se enviaron datos.';

            formulario.reset();
        }
    });
}
