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



/* var arr = [20, "cabeza", true, 30, 10]
console.log(arr[1]) // cabeza
console.log(arr.length-1) // 4
console.log(arr[7]) // undefined
arr.length = 3 - modifica el array, toma los 3 primeros valores
console.log(arr) // [20, "cabeza", true]

var arr = [20, "cabeza", true, 30, 10]
arr.push(true, 20, "cabecao") // 8 - devuelve el valor de lenght nuevo, modifica array adicionando en el final
console.log(arr) // [20, 'cabeza', true, 30, 10, true, 20, 'cabecao'] 
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

/* //slice(ini, end)
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var arr2 = arr.slice(1,4) // devuelve el valor y asigna a la variable, no modifica arr
console.log(arr) // [1, 2, 3, 4, 5, 6, 7, 8, 9] - No modifica el array
console.log(arr2) // [2, 3, 4] - Valor asignado

//splice(ini, num)
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
var num1 = 20,
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
    console.log('Por favor, selecciona un valor            del 1 al 6.');
}