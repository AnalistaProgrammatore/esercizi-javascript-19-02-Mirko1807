/**
* Scrivere qui il codice della funzione fibonacci(n)
**/
const fibonacci = (x, o, z) => {
    let y = o
    console.log(z)
    o += z
    z = y
    if (z >= x) return z
    z = fibonacci(x, o, z)
}
let z = fibonacci(30, 1, 0)