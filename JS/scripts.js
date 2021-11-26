const datos = {
    nombre : '',
    gamerTag : '',
    raza : '',
    correo : '',
    mensaje : ''
}


const formulario = document.querySelector('.formulario');

const nombre = document.querySelector('#nombre');
const gamerTag = document.querySelector('#gamerTag');
const raza = document.querySelector('#raza');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input',leerTexto);
gamerTag.addEventListener('input',leerTexto);
raza.addEventListener('change',leerTexto);
correo.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);



formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    const {nombre, gamerTag,raza,correo,mensaje} = datos;
    if(nombre === '' || gamerTag === '' || correo === '' || raza === '' || mensaje === ''){
        // console.log('Todos los campos son obligatorios');
        mostrarError('¡Todos los campos son obligatorios!');
        return;
    }
    envioCorrecto('Los datos han sido enviados correctamentes');
    // console.log('Enviando formulario');
});
function leerTexto(e){
    datos[e.target.id] = e.target.value;
    //console.log(datos);
}


function mostrarError(mensaje){
    const errorFormulario = document.createElement('P');
    errorFormulario.textContent = mensaje;
    errorFormulario.classList.add('error');
    errorFormulario.classList.add('centrar-texto');
    setTimeout(() => {
        errorFormulario.remove();
    },5000);
    formulario.appendChild(errorFormulario);
    // console.log(error);
}

function envioCorrecto(mensaje){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');
    alerta.classList.add('centrar-texto');
    formulario.appendChild(alerta);
    
    setTimeout(()=> {
        alerta.remove();
    },5000)
}


function monstrarAlerta(mensaje){
    const alerta = document.createElement('P');
    alerta.textContent
}