const getGCD = (a,b)=>{
    let n;
    while (n!==0) {
         n = a%b;
        console.log(n)
        a = b;
        b = n;
    }
    return a;
}

// console.log(getGCD(7,14))