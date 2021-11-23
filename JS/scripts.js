const boton =  document.querySelector('#boton1');

boton.addEventListener('click',() => {
    //console.log('Diste click');
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es: ${resultado}`)); 
});


if(Notification.permission == 'granted') {
    new Notification('Esto es una notificación',{
        icon: '../img/logo_2_big.png',
        body: 'Mensaje'
    })
}














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































// function multiplicar(){
//     console.log( 5 * 5 );
// }

// multiplicar();

// const multiplicar2 = function() {
//     console.log( 10 * 10 );
// }
// multiplicar2();

// (function() {
//     console.log(9 * 9);
// })();

// const miArreglo = [0,5,4,2,7,41,9];

// //diferencias entre forEach y map

// const arreglo2 = miArreglo.forEach(function(miArreglo));
// // const arreglo3 = miArreglo.map(valor);



// miArreglo.forEach(function(valor)
// {
//     console.log(valor);
// });






// for(let i = 0; i<miArreglo.length; i++)
// {
//     console.log(miArreglo[i]);
// }



// let i = 0;
// do
// {
//     console.log(`El iterador es: ${i}`);
//     i++;
// }while(i<=10);


// const calificacion = '100';

// if(calificacion === 100)
// {
//     console.log("Felicidades!!!")
// }
// else
// {
//     console.log("Echale más ganas...")
// }

// const opcion = 'opcion 1';

// switch(opcion)
// {
//     case 'opcion 1':
//         console.log("Seleccionaste la opción 1");
//         break;
//     case 'opcion 2':
//         console.log("Seleccionaste la opción 2");
//         break;
//     default:
//         console.log("Opción no válida");
//         break;
// }

//alert("Hola mundo desde JS, desde archivo externo...");

// const numeros = [1,2,3,4,5,6,7,8];
// // console.log(numeros);

// //hay otra forma de mostrar los arreglos:
// console.table(numeros);

// const miArreglo = ["Un string", 10, true, [1,2,3,4], {name:"Rodrigo",lasName:"Govea"},null];
// console.log(miArreglo);

// console.log(miArreglo[2]);

// var nombre = "Rodrigo";
// var edad = "34";
// var unBoleano = false;
// console.log(typeof(nombre));
// console.log(typeof(edad));
// console.log(typeof(unBoleano));

// const nombreProducto = "Monitor";
// const precioProducto = 5000;
// const categoriaProducto = "Gamer";

// // console.log(nombreProducto);
// // console.log(precioProducto);
// // console.log(categoriaProducto);

// const producto = {
//     nombre : "Monitor",
//     precio : 5000,
//     categoria : "Gamer"
// }

// // console.log(producto);

// console.log(producto.nombre);



// function descargarContenido() {
//     return new Promise ( resolve => {
//         console.log('Descargando contenido... por favor espere!');

//         setTimeout( () => {
//             resolve('El contenido fue descargado completamente!');
//         }, 5000);

//     });
// }

// async function app(){
//     try {
//         const resultado = await descargarContenido();
//         console.log(resultado);
//     } catch(error) {
//         console.log(error);
//     }

// }

// app();

// console.log('Este código no se bloquea! ');





















/*variables*/
// let nombre = "Rodrigo";
// let edad = 34;
// let esCasado = "si";

// console.log(esCasado);

// esCasado = true;

// console.log(nombre,edad, esCasado);

//metodologías para nombrar varianles
/*

var nombre_producto = "monitor gamer"; //underscore
var nombreProducto = "monitos gamer"; //camelcase
var NombreProducto = "monitor gamer"; //Pascal Case
var nombreproducto =  "monitor gamer";
*/
 
// const nombre = "Rodrigo";
// const edad = 34;

// // edad = 40;

// let apellido;


// const producto = "Monitor gamer 20\"";
// console.log(typeof producto);
// const producto2 = String("Monitor gamer HD");
// console.log(typeof producto2);
// const producto3 = new String("Monitor gamer super HD");
// console.log(typeof producto3);


// const producto = "Monitor de 20\"";
// const producto2 = "Monitor HD";

// console.log(producto.length);
// //IndexOf

// console.log(producto.indexOf("20"));
// console.log(producto2.indexOf("20"));

// //include

// console.log(producto.includes("20"));
// console.log(producto2.includes("20"));


// const nombre = "Rodrigo";
// console.log(Nombre);


// const nombreProducto = "Monitor AlienWare 40\"";
// const precioProducto = 10000;
// const categoriaProducto = "Gamer";

// console.log(nombreProducto,precioProducto,categoriaProducto);

// const producto = {
//     nombre : "Monitor AlienWare 40\"",
//     precio : 10000,
//     categoria : 'Gamer'
// }

// const precioProducto = producto.precio;

// console.log(precioProducto);

//destructuring de objetoss

// const producto = {
//     nombre : "monitor HD",
//     precio : 4600,
//     color : "negro"
// }
// const medidas = {
//     alto : "20cm",
//     ancho : "40cm",
//     peso : "3kg"
// }

// const nuevoProducto = {...producto, ...medidas};

// console.log(nuevoProducto);





