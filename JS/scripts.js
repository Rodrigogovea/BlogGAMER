function obtenerEstudiantes() {
    const archivo = 'estudiantes.json';
    fetch(archivo)
        .then(resultado => resultado.json())
        .then (datos => {
            const {estudiantes} = datos;
            estudiantes.forEach( estudiante => {
                console.table(estudiante);
            })
        })
}
obtenerEstudiantes();
















// const usuarioAutenticado = new Promise ( (resolve, reject) => {
//     const auth = true;
//     if(auth){
//         resolve("Usuario autenticado");
//     } else {
//         reject("No has iniciado sesión");
//     }
// });


// console.log(usuarioAutenticado);

// usuarioAutenticado
//     .then(resultado => console.log(resultado))
//     .catch( error => console.log(error))


//Pending : No se ha cumplido, ni se ha rechazado
//Fullfiles : Ya se cumplió
//rejected  : No se cumplio. 
















// const multiplicar2 = (numero1, numero2) => console.log(numero1 * numero2 );

// multiplicar2(5,5);





// function multiplicar(numero1, numero2)
// {
//     return numero1 * numero2;
// }

// const resultado = multiplicar(5,10);
// console.log(resultado);







// const telefono = {
//     hacerllamada : function(numeroTelefonico){
//         console.log(`Llamando al número: ${numeroTelefonico}`);
//     },
//     enviarMensaje : function(mensaje,numeroTelefonico){
//         console.log(`Enviando mensaje: ${mensaje} a: ${numeroTelefonico}`);
//     },
//     abriraPlicacion : function(idApp){
//         console.log(`Abriendo aplicación: ${idApp}`);
//     }
// }
// //por eso se llaman métodos de propiedad. 

// telefono.hacerllamada(3511530922);
// telefono.enviarMensaje("Hola",3511530922);
// telefono.abriraPlicacion(254825);











// const numero1 = 20;
// const numero2 = "20";

// console.log(`Estó es un number: ${numero1}`);
// console.log(`Estó es un String: ${numero1}`);

// console.log ( parseInt(numero2) ); //parseInt() es una función.
// console.log(numero1.toString() ); //esto es un método .toString(). 
























// const myPromise = new Promise((resolve,reject) => {
//     const seCumple = false;
//     if(seCumple){
//         resolve('El Promise se cumplió');
//     } else {
//         reject('El promise se rechazó, no se cumplio.')
//     }
// });


// myPromise
//     .then(resultado => console.log(resultado))
//     .catch(error => console.log(error))


// function descargarDatos() {
//     return new Promise (resolve => {//notar que solo se considero cuando el promise se complió
//         console.log('Se están descargando los datos, por favor espere...');
//         //la idea aquí es establecer la conexión, y luego iniciar la consulta a base de datos

//         setTimeout ( () => {
//             resolve('Los datos se descargarón satisfactoriamente.');
//             //solo se consideró el escenario ideal, que la conexión se acepto, y se descargan los datos.
//         }, 5000);

//     });
// }

// async function iniciarTransferenciaDatos() {
//     try{//como en toda conexión a un servidor puede fallar, se encierra en un try-catch
//         const resultado = await descargarDatos();
//         //por aquí podremos poner, una función
//         //mostrarDatos();
//         //solo se ejecutará, una vez se hayan descargado los datos.
//         console.log(resultado);
//     } catch(error) {
//         console.log(error)
//     }
    
// }

// iniciarTransferenciaDatos();
// console.log('Aquí podemos hacer otras cosas mientras se ejecuta nuestra transferencia de datos desde el servidor...');


// expresado en milisegundos, 50000 milisegundos = 5 segundos