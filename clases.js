// // arrays

// let frutas = ['banana', 'manzana', 'pera'];

// document.write(frutas)

// // arrays asociativos (objetos)
// let pc1 = {
//     nombre: "JonasPC",
//     procesador: 'Intel Core 17',
//     ram: '16GB',
//     espacio: '1TB'
// };

// let nombre = pc1['nombre'];
// let procesador = pc1['procesador']
// let ram = pc1['ram']
// let espacio = pc1['espacio'];

// frase = `el nombre de su computor es: <b> ${nombre}</b> <br/> el nombre de su procesador es: <b> ${procesador} </b> <br/> el espacio de ram de su computador es: <b> ${ram} </b> <br/> el espacio de su computador es: <b> ${espacio}</b>`

// document.write(frase)

// // while

// let numero = 0

// while (numero < 100) {

//     numero++;
//     document.write(numero)

//     if (numero === 10){
//         break;
//     }
// }

// // do while

// let numero = 0

// do {
//     numero++;

//     document.write(numero)

// } while (numero < 6) 

// // for 
// in nos muestra la propiedad (indice)
// of nos muestra lo que contiene la prpiedad

// let animales = ["perro", "gato", "tiburon"]
// for ( let animal in animales){
//     document.write(animal + "<br>")
// }


// for (let animal of animales) {
//     document.write( animal + "<br>")
// }

// function saludar (){
//     respuesta = prompt ('Como fue tu dia')

//     if (respuesta == 'bien'){
//         prompt ('me alegro')
//     } prompt ('que pena')
// }

// funciones flecha 
// const saludar = nombre => {
//     document.write(frase)
// }

// //Programcion orienta a objetos

// class animal{
//     constructor (especie, edad, color){
//         this.especie = especie
//         this.edad = edad
//         this.color = color
//         this.info = `soy ${this.especie}, tengo ${this.edad} years y soy de color ${this.color}`
//     }
//     verInfo(){
//         document.write(this.info + "<br>")
//     }
// }

// class Perro extends animal {
//     constructor(especie,edad,color, raza){
//         super (especie,edad,color)
//         this.raza = null
//     }
//     set modificarRaza(newName){
//         this.raza = newName
//     }

//     get getRaza () {
//         return this.raza
//     }


// }
// const perro = new Perro('perro', 5, 'marron');
// const gato = new animal('perro', 2, 'negro');
// const pajaro = new animal('pajaro', 1, 'verde');

// perro.verInfo()
// gato.verInfo()
// pajaro.verInfo()

// perro.modificarRaza = "lobo"

// document.write(perro.raza) //set
// document.write(perro.getRaza) //get

// metodo string
//startswith si empieza por la misma palabra
// endsWith lo mismo pero con la ultima 
//cadena.sw()

//includes para ver si una palabra esta en la cadena

// indexOf no dice donde comienza la palabra

// lastindexof lo mismo pero la ultimo

//cadena.padStart(41,"hola ") and padend
// split (",")
//substring(0,2) nos muestra las letras

// toLowerCase convierte minuscula
// toUppercase 

//tostring convierte a string un numero
// trim triemstar trimend quitan espacion en blanco

// // metodo arrays 

// pop elimina el ultimo elemento y lo muestra
// shift elimina el primero
//push 
//reverse invierte el nombre
//unshift agrega al principio
// sort ordena alfabeticamente
//splice (0,4,"agrega")
// join covierte en cadena de texto