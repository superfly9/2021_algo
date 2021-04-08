// const getGCD = (a,b)=>{
//     let n;
//     while (n!==0) {
//          n = a%b;
//         console.log(n)
//         a = b;
//         b = n;
//     }
//     return a;
// }

// console.log(getGCD(7,14))
const GCD = (a,b)=>{
    const remainder =  a % b;
    if (remainder === 0) {
        return b;
    }
    const result = GCD(b,remainder);
    // GCD(5,3) => GCD(3,2) => GCD(2,1) =>return 0;
    // 3, 5 => 3 , 5 ,3 =>2 3,2 =>1 2,1=>0
    console.log('result:',result)
    return result;
}
// console.log(GCD(3,5));
console.log(GCD(6,4))
 
const solution = (w,h)=>{
 const gcd = GCD(w,h);
 return (w+h-gcd);
}

console.log(solution(6,9))

const sol2 = (w,h)=>{
    const gcd = GCD(w,h);
    return gcd * (( w/gcd) + (h/gcd) -1)
}
console.log('sol2:',sol2(5,12))

// 대각선 지나는 단위 정사각형 갯수 : https://m.blog.naver.com/PostView.nhn?blogId=zzinuhelios&logNo=120024685950&proxyReferer=https:%2F%2Fwww.google.com%2F
