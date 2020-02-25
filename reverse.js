/**
* Scrivere qui il codice dell'esercizio 2 del capitolo 4 di eloquentJS
* Vi ricordo che le funzioni DEVONO ESSERE PURE e implementate una in modo IMPERATIVO e una in modo DICHIARATIVO
**/
const reverseArray = (x) => {
    let V = []
    let j = x.length - 1
    for (let i = 0; i < x.length; i++) {
        V[i] = x[j]
        j--
    }
    return V

}
const reverseArrayInPlace = x => {
    let j = x.length - 1
    let k = 0
    for (let i = 0; i < x.length / 2; i++) {
        k = x[i]
        x[i] = x[j]
        x[j] = k
        j--
    }

    return x
}
v = [1, 2, 3, 4, 5]
console.log(reverseArray(v), v)
console.log(v, reverseArrayInPlace(v))
