// dineroCofla  = prompt ("Ingrese la cantidad de dinero que tienes")

// dineroRoberto  = prompt ("Ingrese la cantidad de dinero que tienes")

// dineroPedro  = prompt ("Ingrese la cantidad de dinero que tienes")

// if (dineroCofla >= 0.6 && dineroCofla <1){
//     alert("comprtate el helado de agua")
//     alert('te sobran ' + (dineroCofla-0.6))
// }
// else if (dineroCofla >= 0.6 && dineroCofla<1.6){
//     alert('comprate el helado de crema')
//     alert('te sobran ' + (dineroCofla-1.6))
// }
// else if (dineroCofla >= 1.6 && dineroCofla<1.7){
//     alert('comprate el helado de heladix')
//     alert('te sobran ' + (dineroCofla-1.7))
// }
// else if (dineroCofla >= 1.7 && dineroCofla<1.8)
// {
//     alert('comprate el helado de heladovich')
//     alert('te sobran ' + (dineroCofla-1.8))
// }
// else if (dineroCofla >= 1.8 && dineroCofla<2.9){
//     alert('comprate el helado de helardo')
//     alert('te sobran ' + (dineroCofla-1.8))
// }
// else if (dineroCofla >= 2.9){
//     alert('helado de confites o el pote de 1/$kg')
//     alert('te sobran ' + (dineroCofla-2.9))
// } else {
//     alert ('no te alcanza para ningun helado')
// }

// if (dineroPedro >= 0.6 && dineroPedro <1){
//     alert("comprtate el helado de agua")
// }
// else if (dineroPedro >= 0.6 && dineroPedro<1.6){
//     alert('comprate el helado de crema')
// }
// else if (dineroPedro >= 1.6 && dineroPedro<1.7){
//     alert('comprate el helado de heladix')
// }
// else if (dineroPedro >= 1.6 && dineroPedro<1.7){
//     alert('comprate el helado de heladovich')
// }
// else if (dineroPedro >= 1.8 && dineroPedro<2.9){
//     alert('comprate el helado de helardo')
// }
// else if (dineroPedro >= 2.9){
//     alert('helado de confites o el pote de 1/$kg')
// } else {
//     alert ('no te alcanza para ningun helado')
// }

// if (dineroRoberto >= 0.6 && dineroRoberto <1){
//     alert("comprtate el helado de agua")
// }
// else if (dineroRoberto >= 0.6 && dineroRoberto<1.6){
//     alert('comprate el helado de crema')
// }
// else if (dineroRoberto >= 1.6 && dineroRoberto<1.7){
//     alert('comprate el helado de heladix')
// }
// else if (dineroRoberto >= 1.6 && dineroRoberto<1.7){
//     alert('comprate el helado de heladovich')
// }
// else if (dineroRoberto >= 1.8 && dineroRoberto<2.9){
//     alert('comprate el helado de helardo')
// }
// else if (dineroRoberto >= 2.9){
//     alert('helado de confites o el pote de 1/$kg')
// } else {
//     alert ('no te alcanza para ningun helado')
// }

// let free = false

// const validarCliente = (time) => {
//     let edad = prompt('ingresa tu edad');
//     if (edad >= 18){
//         if (time >= 2 && time <=7 && free == false){
//             alert('podes pasar gratis')
//             free= true
//         } else {
//             alert('podes pasar pero tenes que comprar la entrada')
//         }
//     } else {
//         alert('sos menor de edad')
//     }
// }

// let cantidad = prompt('cuantos alumnos son')

// let alumnosTotales = []

// for (i=0; i<cantidad; i++){
//     alumnosTotales[i] = [prompt('nombre del alumno ' + (i+1)), 0]
// }

// const tomarAsistencia = (nombre, p) => {
//     let presencia = prompt(nombre);
//     if (presencia == 'p' || presencia == 'P') {
//         alumnosTotales[p][1]++
//     }
// }

// for (let i = 0; i<30; i++){
//     for (alumno in alumnosTotales){
//         tomarAsistencia(alumnosTotales[alumno][0], alumno)
//     }
// }

// for (alumno in alumnosTotales){
//     let resultado = `${alumnosTotales[alumno][0]}: <br> asitencias: ${alumnosTotales[alumno][1]} <br> Ausencias: ${30 - alumnosTotales[alumno][1]}`

//     if (30 -alumnosTotales[alumno][1] > 18){
//         resultado+= `<b style='color:red'> REPROBADO POR INASISTENCIA </b> <br>`
//     } else {
//         resultado+= "<br> <br>"
//     }
//     document.write(resultado)
// }

// const sumar = (num1, num2)=>{
//     return parseInt(num1) + parseInt(num2)
// }

// const restar = (num1, num2)=>{
//     return parseInt(num1) - parseInt(num2)
// }

// const multiplicar = (num1, num2)=>{
//     return parseInt(num1) * parseInt(num2)
// }

// const dividir = (num1, num2)=>{
//     return parseInt(num1) / parseInt(num2)
// }

// alert('que operacion deseas realizar?');
// operacion = prompt(`1:suma 2: resta  3: multiplicacion 4: division`)

// if ( operacion == 1){
//     let numero1 = prompt('ingrese el primer numero')

//     let numero2 = prompt('ingrese el segundo numero')
//     resultado = sumar(numero1,numero2);
//     alert(`tu resultado es ${resultado}`)
// }
// else if (operacion == 2){
//     let numero3 = prompt('ingrese el primer numero')

//     let numero4 = prompt('ingrese el segundo numero')
//     resultado = restar(numero3,numero4);
//     alert(`tu resultado es ${resultado}`)
// }
// else if (operacion == 3){
//     let numero5 = prompt('ingrese el primer numero')

//     let numero6 = prompt('ingrese el segundo numero')
//     resultado = multiplicar(numero5,numero6);
//     alert(`tu resultado es ${resultado}`)
// }
// else if (operacion == 4){
//     let numero7 = prompt('ingrese el primer numero')

//     let numero8 = prompt('ingrese el segundo numero')
//     resultado = dividir(numero7,numero8);
//     alert(`tu resultado es ${resultado}`)
// }
// else {
//     alert('no se ha encontrado ninguna operacion')
// }

// class Celular {
//     constructor(color, peso, rdp, rdc, ram){
//         this.color= color,
//         this.peso = peso,
//         this.rdp = rdp,
//         this.rdc = rdc,
//         this.ram = ram
//         this.encendido = false
//     }
//     presionarBotonEncendido (){
//         if (this.encendido == false){
//             alert("celular prendido");
//             this.encendido = true
//         } else {
//             alert("el celular esta apagado")
//             this.encendido = false
//         }
//     }
//     reiniciar (){
//         if (this.encendido == true){
//             alert(" reiniciando celular");
            
//         } else {
//             alert("el celular esta apagado")
//         }
//     }
//     tomarFotos (){
//         alert(`foto tomada en una resolucion de: ${this.rdc}`)       
//  }
//     grabarVideo (){
//         alert(`grabando video en una resolucion de: ${this.rdc}`)       
 
//     }
//     mostrarInfo(){
//         return `
//         color: <b>${this.color} </b><br/>
//         peso: <b>${this.peso} </b><br/>
//         resolucion de pantalla: <b>${this.rdp} </b><br/>
//         resolucion de video: <b> ${this.rdc}</b><br/>
//         ram: <b>${this.ram} </b><br/>
//         `
//     }
// }

// class CelularAltaGama extends Celular{
//     constructor(color, peso, rdp, rdc, ram, rdce){
//         super(color, peso, rdp, rdc, ram);
//         this.resolucionDeCamaraExtra = rdce
//     }
//     grabarVideoLento(){
//         alert("estas grabando en camara lenta")
//     }
//     reconocimientoFacial (){
//         alert("vamos a iniciar un reconocimiento facial")
//     }
//     InfoAltaGama(){
//         return this.mostrarInfo() + `resolucion de camara extra: ${this.resolucionDeCamaraExtra}`
//     }
// }

// celular1 = new Celular('rojo', "150g", "5'", "full HD", "2GB")

// celular2 = new Celular('negro', "200g", "6'", " HD", "2GB")

// celular3 = new Celular('blanco', "125g", "7'", "full HD", "1GB")

// celular1.presionarBotonEncendido()
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido()

// celular1 = new CelularAltaGama("rojo", "130g","5.2'","4K","3Gb","HD")
// celular2 = new CelularAltaGama("blanco", "142g","6'","4K","3Gb","HD")


// document.write(`
// ${celular1.InfoAltaGama()} <br/> <br/>
// ${celular2.InfoAltaGama()} <br/> <br/>

// `)

class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas,
        this.puntuacion = puntuacion,
        this.peso = peso,
        this.iniciada = false,
        this.instalada = false;
    }
    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            alert('app instalada correctamente')
        }
    }
    desinstalar(){
        if (this.instalada == true){
            this.instalada = false;
            alert('app desinstalada correctamente')
        }
    }
    abrir(){
        if (this.iniciada == false && this.instalada==true){
            this.iniciada = true
            alert ('app iniciada')
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada==true){
            this.iniciada = false
            if (this.instalada == true){
                alert ('app cerrada')
            } else {
                'ha ocurrido un error'
            }
        }
    }
    appInfo(){
       return `
       Descargas: <b>${this.descargas}</b><br/>
       Puntuacion: <b>${this.puntuacion}</b><br/>
       Peso: <b>${this.peso}</b><br/>

       `
    }
}

app1 = new App("10.000", "5 estrellas", "900mb")
app2 = new App("18.000", "4 estrellas", "400mb")
app3 = new App("12.000", "3 estrellas", "700mb")
app4 = new App("13.000", "4.5 estrellas", "500mb")
app5 = new App("11.000", "3.5 estrellas", "600mb")
app6 = new App("13.000", "2 estrellas", "500mb")
app7 = new App("15.000", "1.9 estrellas", "200mb")


app.instalar()
app.abrir()
app.cerrar()
app.desinstalar()

document.write(`
${app1.appInfo()}<br><br>
${app2.appInfo()}<br><br>
${app3.appInfo()}<br><br>
${app4.appInfo()}<br><br>
${app5.appInfo()}<br><br>
${app6.appInfo()}<br><br>
${app7.appInfo()}<br><br>
`)
