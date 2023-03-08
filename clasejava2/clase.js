//funcion tipo flecha
let sumar=(number)=>{return number +5;}

//asigno una funcion completa, a la variable f
 let f=sumar;

//llamo a la funcion sumar
 console.log(f(5));//usando f
console.log(sumar(5));//usando sumar


/**Callback functions
 * 
 * Se trata de enviarle como parametro de entrada a una funcion
 * otra funcion
 */

const esPar=(numero)=>
{return numero%2 == 0}//regresa ub booleano, si es verdad retorna true

const validarParidad =(num,callbackFn)=>
{const esPar=callbackFn(num);
console.log("El numero es entero?" +esPar);}

validarParidad(9,esPar)

const dividePorDos=(numero)=>
{
    return numero/2;
}

const divideNumero=(numero,callbackFn)=>
{
    return callbackFn(numero)
}
console.log(divideNumero(10,dividePorDos));

/*Metodos para arreglos*/

const numeros=[1,2,3,20,893,452];
let numerosDos=[1,2,3,20,893,452];

//.reduce(); genera un solo valor al final */

const sumarValores = numeros.reduce((acumulador,valorActual)=>
{
    return acumulador + valorActual;
});
console.log(sumarValores);

//.forEach()

const fnDos=numerosDos.forEach(number=>{
    console.log(number);
})

//.filter() para filtrar

const fnTres = numerosDos.filter(number=>{
    //como voy a filtrar la condicion
    return number>10;
});
console.log(fnTres);

//.map() da un nuevo arreglo como se alla modificado

const nombresPersonas =["maria","pedro","pablo","luisa"];

const anuncios =nombresPersonas.map(miembro=>{
    return miembro + "se unio al grupo";
})
console.log(anuncios)

//Callback functions

const esMayor=(numero)=>
{return numero > 20}//regresa ub booleano, si es verdad retorna true

const validarMayor =(num,callbackFn)=>
{const esMayor=callbackFn(num);
console.log("el numero es mayor de 20?" +esMayor);}

validarParidad(30,esMayor)

let nombres=["carol","juan","matias","luisa","sandra"];
const personas = nombres.filter(name=>{
    //como voy a filtrar la condicion
    return name== "juan","matias";
});
console.log(personas);