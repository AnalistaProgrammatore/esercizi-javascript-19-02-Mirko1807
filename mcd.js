/**
* Scrivere qui il codice delle funzioni mcd(x, y) e mcdRecursive(x, y)
**/
const mcd = (x, y) => {
    if (x > y) {
        let r = 1
        while (r != 0) {
            r = x % y
            x = y
            y = r
        }
        return x
    } else {
        let r = 1
        while (r != 0) {
            r = y % x
            y = x
            x = r
        }
        return y
    }
}
const mcdRe = (x, y) => {
    let r
    if (x > y) {
        r = x % y
        if (r === 0) return y
        else return mcdRe(y, r)
    } else {
        r = y % x
        if (r === 0) return x
        else return mcdRe(r, x)
    }
}
let a = 102
let b = 34
let mcdIt = mcd(a, b)
let mcdRec = mcdRe(a, b)
console.log(mcdIt, mcdRec)
