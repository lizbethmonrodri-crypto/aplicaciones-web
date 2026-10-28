
const btnModo = document.querySelector('#btn_modo');

if (btnModo) {
    btnModo.addEventListener('click', () => {
        document.body.classList.toggle('modo_oscuro');

        btnModo.textContent =
            document.body.classList.contains('modo_oscuro')
                ? 'Modo claro'
                : 'Modo oscuro';
    });
}

// Efecto al pasar el cursor sobre las imágenes
const imagenes = document.querySelectorAll('.img-flor');

imagenes.forEach((img) => {
    img.addEventListener('mouseenter', () => {
        img.classList.add('borrosa');
    });

    img.addEventListener('mouseleave', () => {
        img.classList.remove('borrosa');
    });
});

// Validación del formulario
const formulario = document.querySelector('#formulario');

if (formulario) {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.querySelector('#nombre');
        const correo = document.querySelector('#correo');
        const telefono = document.querySelector('#telefono');
        const motivo = document.querySelector('#motivo');
        const respuesta = document.querySelector('#respuesta');

        if (
            !nombre.value.trim() ||
            !correo.value.trim() ||
            !telefono.value.trim() ||
            !motivo.value
        ) {
            respuesta.style.color = '#b42318';
            respuesta.textContent =
                'Por favor, completa los campos obligatorios.';

        } else if (!/^\d{10}$/.test(telefono.value.trim())) {
            respuesta.style.color = '#b42318';
            respuesta.textContent =
                'El teléfono debe tener exactamente 10 dígitos.';

        } else {
            respuesta.style.color = 'var(--green)';
            respuesta.textContent =
                '¡Gracias! Tu mensaje quedó validado en esta demostración.';

            formulario.reset();
        }
    });
}
