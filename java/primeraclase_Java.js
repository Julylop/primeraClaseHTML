/*console.log('Hola');//es para imprimir en consola
math.random()
console.log(math.random());
let edad;
let age=43;
let mensaje="Hola usuarios";
let mensaje2="segundo mensaje";
// dos datos deben de ser enteros para por sumarlo
//console.log(mensaje2.length);//para saber cuantos caracteres tiene el string
// === tres comparan tipo de dato y valor

const moneda='COP';
const numeroColumnas=4;
numeroColumnas=8;//const: no se deja cambiar

//funcion comun
function sumar(num1,num2){

}

//funcion anonima
const hola=function(){
    return'hola';
}

//funcion de flecha, la mas comun en java

const sum=(num1,num2)=> {
    return num1+num2;
}

let resultado =sum(3,5)
console.log(resultado);

// si no recibe parametros se escribe el parentecis 
//un solo parametro no necesita parentesis
const multiplicarDos=numero=>{
    return numero*2

    //arreglos

    let numeros[1,2,3,4,5,6];
    // ingresa un dato adicional al final del arreglo
    numero.push(10)

    //saca el ultimo elemento 
    numeros.pop();
}*/


const Digitenom= (nombre1, apellido) => {
    return nombre1+apellido;
}
let respuesta =Digitenom('juana','perez')
console.log(respuesta);

const fecha_Naci= dia => {
    return dia;
}
let  fecha_na =fecha_Naci(12)
console.log(fecha_na);

const ciudad= () => {
    return 'Bienvenido a Medellin';
}
console.log(ciudad);

let arreglo=[1,2,3,4];
const Arreglo= (vec) => {
     vec.pop();
     console.log(vec);

}

Arreglo(arreglo)


