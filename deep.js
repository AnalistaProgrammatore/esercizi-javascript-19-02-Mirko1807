/**
* Scrivere qui il codice dell'esercizio 4 del capitolo 4 di eloquentJS
**/
let d
const deep = (x, y) => {
    if ((x === null || y === null) && x === y) return true
    else if (x === null || y === null) return false
    if (x != null && y != null) {
        let typex = typeof x
        let typey = typeof y
        console.log(typex, typey)
        if (typex != typey) return false
        if (typex === typey && typey != "string") {
            let xs = JSON.stringify(x)
            let ys = JSON.stringify(y)
            return deep(xs, ys)
        }
        if (typex === typey && typex === "string") {
            if (x === y) return true
            else return false

        }


    }
}
let xa = true
let ya = true
d = deep(xa, ya)
if (d) console.log("gli elementi sono uguali")
else console.log("gli elementi non sono uguali")
