/*var a = 10;
console.log(a); // 10
function x() {
    console.log(a); // undefined
    var a = 5;
    console.log(a); // 5
    console.log(window.a); // 10
}
x(); // llamamos a la funcion x
console.log(a); // 10

console.log("antes: ", p); // antes: undefined
for (let p = 0; p < 3; p++) {
    console.log("durante: ", p) // durante: 0, 1, 2
}
console.log("después: ", p); // después: undefined



console.log("antes: ", p); // antes: undefined
for (var p = 0; p < 3; p++) {
    console.log("durante: ", p) // durante: 0, 1, 2
}
console.log("después: ", p); // después: 3
 */

/* for (let e = 0; e < 5; e++) {
    console.log(e)
}
console.log(e); */



/* let d = 1
let a = 15 
let n = 10
if (d < 30) { */
    /* console.log(a) // Reference Error - let fue declarada después adentro de esta if, asume scope local  */
    /* console.log(n) // 10 - porque no está declarada adentro de esta if y tomó valor de antes
    let a = 20
    let b = (a + 1)
    console.log (a) // 20
    console.log(b) // 21
}
console.log(a) // 15 ; var declarada adentro de if no retorna el valor, asume el valor declarado afuera */
/* console.log(b) // Reference Error - let no fue declarada afuera de if */

/* let e = 1
var h = 15
var z = 10
if (e < 30) {
    console.log(h) // 15 - var fue declarada después adentro de esta if, pero antes asume su valor global, no da reference error
    console.log(z) // 10 - var no fue declarada después adentro de esta if. y asume su valor global
    var h = 20
    var i = (h + 1)
    console.log (h) // 20
    console.log(i) // 21
}
console.log(h) // 20 - var fue declarada adentro de if, que retorna su ultimo valor!!!
console.log(i) // 21 - var fue declarada adentro de if, que retorna su ultimo valor!!! */


/* const x = 15
if (x < 30) {
    const x = 20
    const y = (x + 1)
    console.log (x) // 20 - assume valor unico, scope local
    console.log(y) // 21 - assume valor unico, scope local
}
console.log(x) // 15 - assume el valor global como en let, no el de la if
 */

/* let d = 1
let a = 15 
let n = 10
function alfa () {
    console.log(a) // Reference Error - let fue declarada después adentro de esta function, asume scope local
    console.log(n) // 10 - porque no está declarada adentro de esta function y tomó valor de antes
    let a = 20
    let b = (a + 1)
    console.log (a) // 20
    console.log(b) // 21
}
alfa()
console.log(a) // 15
console.log(b) // Reference Error - let no fue declarada 


var h = 15
var z = 10
function beta () {
    console.log(h) // Undefined - var fue declarada después adentro de esta function
    console.log(z) // 10 - var no fue declarada después adentro de esta function. y asume su valor global
    var h = 20
    var i = (h + 1)
    console.log (h) // 20
    console.log(i) // 21
}
beta()
console.log(h) // 15 - var fue declarada adentro de if, asume su ultimo valor!!!
console.log(i) // Reference Error - var no fue declarada afuera de la función


const x = 15
function gama () {
    const x = 20
    const y = (x + 1)
    console.log (x) // 20 - assume valor unico, scope local
    console.log(y) // 21 - assume valor unico, scope local
}
gama()
console.log(x) // 15 - assume el valor global como con let, no el de la funcion */
/* 
var g1 = "Hola Mundo"
console.log(g1.length) // 10
console.log("Hello Word!".length) // 11

console.log("Como estas"[0]) // "C"
let fe = "cree".concat(" en ", " tu ", " mente.") // cree en tu mente
console.log(fe.indexOf("mente")) // 13

let gol = "g".concat("o".repeat(10), "l")
console.log(gol) // gooooooooool

let GOL = gol.toUpperCase()
console.log(GOL) // GOOOOOOOOOOL

var golPuro = "        gooooooooool             ".trim()
console.log(golPuro) // gooooooooool */



/*var arr = [20, "cabeza", true, 30, 10]
console.log(arr[1]) // cabeza
console.log(arr.length-1) // 4
console.log(arr[7]) // undefined
arr.length = 3 // modifica el array, toma los 3 primeros valores
console.log(arr) // [20, "cabeza", true]*/

/* var arr = [20, "cabeza", true, 30, 10]
arr.push(true, 20, "cabecao") // 8 - 
console.log(Object.keys(arr)) // ['0', '1', '2', '3', '4', '5', '6', '7']
console.log(Object.values(arr)) // [20, 'cabeza', true, 30, 10, true, 20, 'cabecao']
console.log(arr) // [20, 'cabeza', true, 30, 10, true, 20, 'cabecao']
arr.forEach(element => {element = element.toString(); console.log(element.match(/[a-h]/gi)); console.log(element) }) */



//console.log(arr.find(i => i === 'cabeza' || i === 'cabecao')) // devuelve cabeza (el primer elemento que encuentre)
//console.log(arr.map(i => typeof i === 'number')) // [true, false, false, true, true, false, true, false]
//console.log(typeof arr[2]) // boolean 
/*
arr.pop() // cabecao - Devuelve valor eliminado, modifica array, eliminando el ultimo valor
console.log(arr) // [20, 'cabeza', true, 30, 10, true, 20] - Modifica array
arr.unshift("cabecinha", 12, false) // 10 - Devuelve el valor de lenght nuevo, modifica array adicionando en el inicio
arr.shift() // cabecinha - Elimina valor0, devuelve valor eliminado, modifica array
console.log(arr) // [12, false, 20, "cabeza", true, 30, 10, true, 20] 

//.push()
var arr = [1, 2, 3]
console.log(arr.push(4, 5, 6)) // 6
console.log(arr) // [1, 2, 3, 4, 5, 6]
arr.push([7, 8, 9]) // devuelve 7
console.log(arr) //[1, 2, 3, 4, 5, 6, [7, 8, 9]] - [7, 8, 9] entra como 1 elemento array

//.concat()
var arr = [1, 2, 3]
arr.concat(4, 5, 6) // devuelve [1, 2, 3, 4, 5, 6]
console.log(arr) // [1, 2, 3] - no modifica el array!!
arr = arr.concat(4, 5, 6)
console.log(arr) // [1, 2, 3, 4, 5, 6] - modificó el array solo declarando nuevo valor
arr = arr.concat([7, 8, 9])
console.log(arr) // [1, 2, 3, 4, 5, 6, 7, 8, 9] - 7, 8, 9 entran como valores independientes! */

 //slice(ini, end)
/* var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var arr2 = arr.slice(1,4) // devuelve el valor y asigna a la variable, no modifica arr
 */

// console.log(arr.join(', ')) // [1, 2, 3, 4, 5, 6, 7, 8, 9] - No modifica el array
// console.log(arr)
// console.log(arr2) // [2, 3, 4] - Valor asignado

/*//splice(ini, num)
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var arr2 = arr.splice(2, 3) // elimina y devuelve valores empezando con el valor2 y con tamaño 3 elementos en la secuencia
console.log(arr) // [1, 2, 6, 7, 8, 9] - Modificó el array
console.log(arr2) // [3, 4, 5] - Valor asignado

//join(string)
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var arr2 = arr.join("<")
console.log(arr) // [1, 2, 3, 4, 5, 6, 7, 8, 9] - no modifica el array
console.log(arr2) // 1<2<3<4<5<6<7<8 - asume valor devuelto como string

//split(string)
var arr = "1.2.3.4.5.6.7.8"
var arr2 = arr.split(".")
console.log(arr) // "1.2.3.4.5.6.7.8" - no modifica la variable
console.log(arr2) // ["1", "2", "3", "4", "5", "6", "7", "8"] - asume valor devuelto como array de strings */


/* let objeto1 = {
    marca: "Warwick",
    modelo: "Corvette 5c $$",
    color: "Black Ofc",
    tipo: "Bajo Electrico",
    "pais de origen": "China",
};
console.log(objeto1.marca) // Warwick
console.log(objeto1.modelo) // Corvette 5c $$
console.log(objeto1."pais de origen") // Salta error 
console.log(objeto1["pais de origen"]) // China

let objeto2 = {}
objeto2.precio = 88.000;
objeto2.modelo = "Streamer Basic 5c";
objeto2.marca = "Warwick";
objeto2.color = "Black Nirvana";

console.log(objeto1.marca + objeto1.modelo + " es mejor que " + objeto2.marca + objeto2.modelo) // WarwickCorvette 5c $$ es mejor que WarwickStreamer Basic 5c

objeto1.mensaje = function () {
    alert("Este bajo es muy copado!!")
}
objeto1.mensaje() // Ejecuta la función
console.log(objeto1.mensaje) // f() {"Este bajo es muy copado!!"} */

/* function msjBajo (modelo) {
    
    alert("El " + modelo + " es un bajo muy copado!")
}

msjBajo("Corvette $$ 5c"); // aparece alerta "El Corvette $$ 5c es un bajo muy copado!"
msjBajo("Streamer 5c");

function msjBajo2(modelo, color, marca = "Warwick") {
    alert("El bajo marca "+ marca + ", modelo " + modelo + " y color " + color + " es el mejor del mundo!!");
}

msjBajo2("Corvette $$ 5c", "Black ofc"); // Alerta con el mensaje: 'El bajo marca Warwick, modelo Corvette $$ 5c y color Black ofc es el mejor del mundo!!'

function msjBajo3(marca = "Warwick", modelo, color) {
    alert("El bajo marca "+ marca + ", modelo " + modelo + " y color " + color + " es el mejor del mundo!!");
}

msjBajo3("Corvette $$ 5c", "Black ofc"); // Alerta con el mensaje: 'El bajo marca Corvette $$ 5c, modelo Black ofc y color undefined es el mejor del mundo!!'
 */

// Assuming the following variables
/* foo = 'foo'
bar = 5
baz = true

// Number + Number -> addition
bar += 2 // 7

// Boolean + Number -> addition
baz += 1 // 2

// Boolean + Boolean -> addition
baz += false // 1

// Number + String -> concatenation
bar += 'foo' // "5foo"

// String + Boolean -> concatenation
foo += false // "foofalse"

// String + String -> concatenation
foo += 'bar' // "foobar"

var a, b, c;

a = b = 3, c = 4; // Returns 4 in console
console.log(a); // 3 (left-most)

var x, y, z;

x = (y = 5, z = 6); // Returns 6 in console
console.log(x); // 6 (right-most) */

/* // declaración de objetos
const songsFrom = {
    name: 'Songs From the Wood',
    year: 1977,
    numberOfSongs: 10,
}
const benefit = {
    name: 'Benefit',
    year: 1970,
    numberOfSongs: 14,
}

// declaración de variables
const songsyear = songsFrom.year;
const benefyear = benefit.year;

// declaración de función como variable
let albumMasViejo = function () {
    if (songsFrom.year < benefit.year) {
        console.log(`${songsFrom.name} es más antiguo`);
        return false
    } else {
        console.log(`${benefit.name} es más antíguo`);
        return true
    }
}
console.log(albumMasViejo()) */


/* const songsFrom = {
    name: 'Songs From the Wood',
    year: 1977,
    numberOfSongs: 10,
}
const benefit = {
    name: 'Benefit',
    year: 1970,
    numberOfSongs: 14,
}

// declaración de variables
const songsyear = songsFrom.year;
const benefyear = benefit.year;

// declaración de función como variable
let albumMasViejo = 
    songsyear < benefyear ? (
        console.log(`${songsFrom.name} es más antíguo`), 
        'false' 
    ) : (
        console.log(`${benefit.name} es más antíguo`), 
        'true' 
    )

console.log(albumMasViejo);



const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }

console.log(factorial(3)) // 6 */

/* let iExist = 'I exist'
let noExist;
function existOrNot (x) {
if (x) { 
    console.log('I really exist!!!')
} else {
    console.log('...')
}
}

existOrNot(iExist); // I really exist!!!
existOrNot(noExist); // ... */


/* let username = '';
let defaultName;

if (username) {
    defaultName = username;
} else {
    defaultName = 'Stranger';
}
console.log(defaultName); // Stranger - porque username tiene valor falsy

//Usando operador lógico, se puede achicar:
defaultName = username || 'Stranger';
console.log(defaultName) // Stranger - toma el primer como falsy y el segundo como truthy

username = 'Rodrigo';
defaultName = username || 'Stranger';
console.log(defaultName) // Rodrigo - toma el primer como truthy */

// Las siguientes variables se definen en el ámbito global
/* var num1 = 20,
    num2 = 3,
    apellido = 'Chamahk';

// Esta función está definida en el ámbito global
function multiply() {
  return num1 * num2;
}

multiply(); // Devuelve 60

// Un ejemplo de función anidada
function getScore() {
  var num1 = 2,
      num2 = 3;

  function add() {
    return apellido + ' anotó ' + (num1 + num2);
  }

  return add();
}

let foo = function jTull (e) {
    // instrucciones aquí ...
    jTull(e - 1);
    foo (e - 1);
    arguments.callee(e - 1);
    // cualquiera de las ejecuciones, es lo mismo
}

let mejorAlbum = 'Close To The Edge'

switch (mejorAlbum) {
    case 'Master Of Puppets': 
        console.log('banda Metallica');
        break;
    case '2112': 
        console.log('banda Rush');
        break;
    case 'Close To The Edge':
        console.log('banda Yes');
        break;
    default:
        console.log('Invalid band');
        break;
}
var foo5;
var output = 'Salida: ';
switch (foo5) {
  case 10:
    output += '¿Y ';
  case 1:
    output += 'Cuál ';
    output += 'Es ';
  case 2:
    output += 'Tu ';
  case 3:
    output += 'Nombre';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Por favor, selecciona un valor el 1 al 6.');
} */

/* const whileLoop = () => {
    let i=1;
    while(i < 10) {
        console.log(i);
        i++;
    }
}
whileLoop(); // 1 2 3 4 5 6 7 8 9

const forLoop = () => {
    for(i = 1; i < 10; i++) {
        console.log(i);
    }
}
forLoop(); // 1 2 3 4 5 6 7 8 9

var array1 = () => {
    let arrayCresc = [];
    for(n = 0; 3*n < 1000; n++) {
    arrayCresc.push(3*n);
}
console.log(arrayCresc)
}
array1() */
/* 
let raceNumber = Math.floor(Math.random() * 1000);
let earlyAdult = true;
let runnerAge = 20;

if(runnerAge > 18 && earlyAdult === true ) {
  raceNumber += 1000;
}
console.log(raceNumber) */

//declara una variable llamada persona como un objeto. Los items de objeto son separados por una comma.
/* 
const persona = {   
    nombre: {      // propriedad objeto de persona llamado 'nombre'
        primer:'Bob',       // propriedad de nombre llamada 'primer'
        apellido: 'Smith',  // propriedad de nombre 'apellido'
    },                      // cada item es separado por comma
        edad: 32,
        genero: 'masculino',
        intereses: ['música', 'esquí'],
        bio: function () {      // metodo de persona llamado 'bio'
            alert(this.nombre.primer + ' ' + this.nombre.apellido + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
            return 'amo ' + this.intereses[0] + '!'
        },
        saludo: function () {   // metodo de persona 'saludo'
        alert('Hola, Soy '+ this.nombre.primer + '. ');
        return this.nombre.primer;
    },
    
};

console.log(Array.isArray(arr))
persona.edad = 40;
console.log(Object.keys(persona)) // ['nombre', 'edad', 'genero', 'intereses', 'bio', 'saludo']
console.log(Object.values(persona)) // [{primer: 'Bob', apellido: 'Smith'}, 40, "masculino", ['música', 'esquí'], ƒ (), ƒ ()]

 */

/* 
function listAllProperties(o) {
    var objectToInspect;
    var result = [];

    for(objectToInspect = o; objectToInspect !== null;
        objectToInspect = Object.getPrototypeOf(objectToInspect)) {
     result = result.concat(
         Object.getOwnPropertyNames(objectToInspect)
     );
 }

     return result;
}

 */
// (18) ['nombre', 'edad', 'genero', 'intereses', 'bio', 'saludo', 'constructor', '__defineGetter__', '__defineSetter__', 'hasOwnProperty', '__lookupGetter__', '__lookupSetter__', 'isPrototypeOf', 'propertyIsEnumerable', 'toString', 'valueOf', '__proto__', 'toLocaleString']0: "nombre"1: "edad"2: "genero"3: "intereses"4: "bio"5: "saludo"6: "constructor"7: "__defineGetter__"8: "__defineSetter__"9: "hasOwnProperty"10: "__lookupGetter__"11: "__lookupSetter__"12: "isPrototypeOf"13: "propertyIsEnumerable"14: "toString"15: "valueOf"16: "__proto__"17: "toLocaleString"length: 18[[Prototype]]: Array(0)
// console.log(listAllProperties(persona))

// (6) ['nombre', 'edad', 'genero', 'intereses', 'bio', 'saludo']
// console.log(Object.getOwnPropertyNames(persona))

// (6) ['nombre', 'edad', 'genero', 'intereses', 'bio', 'saludo']
// console.log(Object.keys(persona))



/* const items = ()=> {
    for(let item in persona) {
        console.log(persona[item])
    }
}
items();
console.log(persona.intereses[1]) */ // Bob

// para llamar el metodo de persona, se usa la expresion abajo, con parentesis porque es una funcion:
/* console.log(persona.bio(), persona.saludo());  */ // Amo música! Bob       


// Abajo, document es el objeto, getElementById() es un metodo de document, addEventListener() es un metodo de documentElement encontrado por el valor de id.

/* document.getElementById('string').addEventListener('click', x(), true); */



/* console.log(document.images[0]) */ // <img src="./Captura35.PNG" alt="">

/* 
var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar) // {make: 'Ford', model: 'Mustang', year: 1969}

// Se crean y asignan cuatro variables de una sola vez, separadas por comas
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type                 = 'Sintaxis de puntos';
myObj['fecha de creación'] = 'Cadena con espacios';
myObj[str]                 = 'Valor de cadena';
myObj[rand]                = 'Número aleatorio';
myObj[obj]                 = 'Object';
myObj['']                  = 'Incluso una cadena vacía';
    
console.log(myObj); */ // {type: 'Sintaxis de puntos', fecha de creación: 'Cadena con espacios', myString: 'Valor de cadena', 0.004412887462228232: 'Número aleatorio', [object Object]: 'Object',  "": "Incluso una cadena vacía"} 


/* function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

var myCar = new Car('Eagle', 'Talon TSi', 1993);

let rodrigosCar = new Car('Nissan', '300ZX', 1992);

console.log(myCar); // Car {make: 'Eagle', model: 'Talon TSi', year: 1993}

console.log(rodrigosCar); */ // Car {make: 'Nissan', model: '300ZX', year: 1992}

/* var obj = { property_1:   value_1,   // property_# puede ser un identificador...
            2:            value_2,   // o un número...
            // ...,
            'property n': value_n }; // o una cadena
 */


/* var Animal = {
    type: 'Invertebrates', // Valor predeterminado de las propiedades
    displayType: function() {  // Método que mostrará el tipo de Animal
        console.log(this.type);
    }
    };
    
    // Crea un nuevo tipo de animal llamado animal1
    var mosquito = Object.create(Animal);
    mosquito.displayType(); // Muestra: Invertebrates
    
    // Crea un nuevo tipo de animal llamado Fishes
    var fish = Object.create(Animal);
    fish.type = 'Fishes';
    fish.displayType();    // Muestra: Fishes */

/* const bands70s = ['Cactus', 'Rush', 'Montrose', 'Deep Purple', 'Yes', 'Little Feat']
console.log(bands70s); 

const orderBands = bands70s.forEach( (value, index) => {
    return bands70s[index] = 'My ' + (index+1) + '°' + 'favourite band is ' + value;
})

console.log(bands70s.join('. ')); 
// My 1°favourite band is Cactus, My 2°favourite band is Rush, My 3°favourite band is Montrose, My 4°favourite band is Deep Purple, My 5°favourite band is Yes, My 6°favourite band is Little Feat

$lis = document.querySelectorAll('li');
$lis2 = document.getElementsByTagName('li');
$lis.forEach( (item,index) => item.setAttribute('class', 'lista el'+index));
$lis2[1].setAttribute('id','elemento2');
//$lis2[2].classList.contains('el2') ? $lis2[2].classList.remove('el2') : $lis2[2].classList.add('el2');
$lis.forEach(item => item.classList.toggle('el2'));

console.log($lis);
console.log($lis2[2].classList); */


/* function logText () {
    console.log(this.responseText);
  }
  
  var newReq = new XMLHttpRequest();
  newReq.addEventListener("load", logText);
  newReq.open("GET", "http://www.example.org/example.txt");
  newReq.send(); */

  const newFetch = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
  
  // response es el parametro de la callback de cumplido, y error el parametro de la callback de rechazo. Es una forma de no usar el catch, pero se palica solo al primer then.
  newFetch
  .then( 
    response => { console.log(response.url); return response.json();}, // callback de Cumplido
    error => {console.log(`Error de escritura ${error}`); alert(`Error de escritura ${error}`)} // Callback de Rechazo
  )
  .then( 
    data => {
        console.log(data);
        const names = [];
        data.forEach (element => {names.push(element.name)});
        alert(`Este son los productos disponibles: ${names.join(', ')}.`);
    }
  )

  const myPromise = new Promise(function (myResolve, myReject){
    function esPrimo(num){
        for(let i = 2,raiz=Math.sqrt(num); i <= raiz; i++){
            if(num%i===0){
                return false
            } 
        }
        return num > 1;
    }
    
    let numeros = '';
    for(let x=0; x<=1000000; x++){
        if(esPrimo(x)){
            numeros = numeros.concat(x.toString(), ', ')
        }
    }
    
    if(numeros===''){
       return myReject('numeros falsos!');
    }
    return myResolve(`${numeros}`);
  });
  myPromise.then(
    result => console.log(result) // devuelve string con los nros primos
  ) .catch(
    error => console.error(error) // devuelve 'numeros falsos!'
  )

  const otherFetch = fetch('https://swapi.dev/api/people/');
  otherFetch.then(res=>{return res.json()}).then(data=>{const results = data.results; console.log(results.filter(item=>item.name==='Darth Vader'));});
