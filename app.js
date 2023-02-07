// camelCase -> carColor (ale nie tylko)
// --------------------------- (1) --------------------------
// Tworzenie zmiennych / obiektów
// Język typowany dynamicznie

let a1 = 10;
a1 = "ala";
a1 = []

const a2 = 11;
// a2 = 22;

// var?
// redeclaration
// hoisting
// block scoping
// global object

// Typowanie statyczne?
// TS
// Flow (https://youtu.be/AvVdDK0sEjo)

// Types as comments Proposal
// Obecnie na stage 1 (https://tc39.es/process-document/)
// https://github.com/tc39/proposal-type-annotations

// --------------------------- (2) --------------------------
// Typy danych

// Boolean
let b1 = true;  // 1
let b2 = false; // 0
let b3 = a2 > 10;
console.log(a2 + true)  // a2 + 1
console.log(a2 + false)  // a2 + 0

// null
let b4 = null;
console.log(10 + b4) // null w operacjach matmeatycznych
// jest traktowane jako 0

// undefined
let b5 = undefined;
console.log(b5 + undefined)  // NaN


// Number / BigInt

let b6 = 19
let b7 = 19.3
let b8 = 100n  // BigInt
let b9 = BigInt(100)  // BigInt

console.log(Number.isInteger(b6))

// Number.MAX_SAFE_INTEGER
// Number.MIN_SAFE_INTEGER
// Number.NEGATIVE_INFINITY
// Number.POSITIVE_INFINITY

let b10 = 'ala'
let b11 = "ala"

// string interpolation
let b12 = `Name: ${b7}`
console.log(b12)

let b13 = String.raw`C:\User`
let b13_1 = `
First line ${b12}
Second line
`

// Kolejny typ
// Symbol -> primitive, unique, immutable
// well-known symbols -> patrz moj YT

// Object
const b14 = {
    name: 'ALA',
    surname: 'NOWAK'
}
console.log(b14.name)
console.log(b14.surname)

const b15 = [11, 22, 33]  // tablica

const b16 = new Map()
// mapa przechowuje pary klucz wartosc
b16.set('a', 10);
b16.set('b', 20);

const b17 = new Set();
b17.add('a')
b17.add('b')

// const b18 = [11, 21, 222222, 4]
// console.log(b18.sort())

// const b18 = new WeakMap()
// const b19 = new WeakSet()
// const b20 = new WeakRef(b17)

// --------------------------- (3) --------------------------
// Pewne specjalne właściwości języka

// Porownywanie w JS

const c1 = '12'
const c2 = 12
console.log(c1 == c2)
console.log(c1 === c2)
console.log(c1 != c2)
console.log(c1 !== c2)

const c2_1 = 11
console.log('LICZBA ' + c2_1)  // konkatenacja

// Odejmowanie od napisu
console.log(typeof c1)
console.log(typeof c1 ==='string')
console.log('20' - 5)

// Parsowanie
const c3 = '12'

// todo czym sie roznia ponizsze sposoby konwersji
console.log(parseInt(c3) + 10)
console.log(Number.parseInt(c3))
console.log(+c3)
console.log(parseInt('ala'))  // NaN

// Destrukturyzacja
// Moj YT o destrukturyzacji w JS: https://youtu.be/O66NX3WIEss

const c5 = [11, 22, 33]
const [c5_1, c5_2, c5_3] = c5
console.log(c5_1)
console.log(c5_2)
console.log(c5_3)

const [c5_11, , c5_33] = c5
console.log(c5_11)
console.log(c5_33)

const person = {
    name: 'ADAM',
    surname: 'NOWAK'
}
const {name} = person;
console.log(name)

const {surname} = person
console.log(surname)

const {name: nn, surname: ss} = person;
console.log(nn)
console.log(ss)

function getInfo(person) {
    console.log(person.name)
    console.log(person.surname)
}
getInfo(person)

function getInfo2({name, surname}) {
    console.log(name)
    console.log(surname)
}
getInfo2(person)

// Truthy / Falsy
// FALSY (traktowane jako false w przypadku zastosowania ich
// w instrukcjach warunkowych i nie tylko ...)
// false, 0, -0, 0n, "", '', ``, null, undefined, NaN
const c6 = undefined;
if (c6) {  // z racji tego ze c6 przechowuje undefined czyli falsy
    // bedzie potraktowane jako wartosc logiczna o wartosci false
}

if (!c6) {

}


const c8 = undefined
const c9 = null

console.log(c8 || c9)  // wynikiem jest ostatnie Falsy
console.log(c8 || '8000')  // wynikiem jest pierwsze truthy

console.log(c8 && c9)  // wynikiem jest pierwszy Falsy
console.log(c8 && '8000')  // znowu masz falsy
console.log('8001' && '8000')  // kiedy wszystko jest truthy zwraca ostatni

const car = {speed: 100}
console.log(car && car.speed)
console.log(car?.speed)

// Czesto jest tak ze nasze operacje zwracaja null albo
// undefined
const c10 = ""; // undefined
console.log(c10 ?? "XXX")
