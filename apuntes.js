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
let fe = "cree".concat(" en ", " tu ", " mente.") // cree
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

//slice(ini, end)
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
console.log(arr2) // ["1", "2", "3", "4", "5", "6", "7", "8"] - asume valor devuelto como array de strings