/**
* Scrivere qui il codice dell'esercizio 1 del capitolo 4 di eloquentJS
**/
const range = (x, y) => {
    let arr = []
    for (let i = 0; i < y; i++) arr[i] = x + i
    return arr
}
const sum = (x) => {
    let somma = 0
    for (let i = 0; i < x.length; i++) somma = somma + x[i]
    return somma
}
V = range(1, 10)
console.log(V)
console.log(sum(V))
