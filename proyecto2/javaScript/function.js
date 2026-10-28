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

// aqui agregamos lo del boton btncamcio2

const btnTheme2 = document.querySelector('#btn_cambio2');

const padre = document.getElementById('div_padre');

btnTheme2.addEventListener('click', () =>{

    padre.classList.toggle('modo_transparente');

    if (padre.classList.contains('modo_transparente')) {
        btnTheme2.textContent = 'opaco (:';
    }else{
        btnTheme2.textContent = 'transparente :)';
    }
    console.log('se aplico transparente:', padre.classList.contains('modo_transparente'));
});

