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