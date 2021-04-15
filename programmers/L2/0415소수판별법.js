// 소수 : 약수가 1과 자기 자신(n)뿐
// 즉, 2 ~ n-1로 어떤 정수로도 나뉘는 경우가 없어야

//방법 1 : 즉, 2 ~ n-1로 어떤 정수로도 나뉘는 경우가 없어야
const isPrime = (number)=>{
    let result = true;
    for (let n=2;n<number;n++) {
        if(number%2===0)return false;
    }
    return result;
}

console.log(isPrime(56))

// 방법 2: 제곱근으로 나눠서 판별 
const sqrtIsPrime = n=> {
    if( n <= 1 )
        return false; //1은 소수가 아님.
         
	// 짝수는 소수에서 제외
	// 단, 2는 유일하게 짝수 중에서 소수
    if( n%2 == 0) {
        return n==2 ? true : false;
    }
	// n이 홀수인 경우 sqrt(n)까지 나눠서 나눠떨어지는지 여부 체크
    for(let i=3; i<=Math.sqrt(n); i += 2) { 
		// 나눠 떨어진다면 약수에 해당하므로 소수가 아님.
        if( n % i == 0)
            return false;
    }
    // 위에서 걸러지지 않은 나머지 경우는 소수에 해당됨
	return true; 
}
console.log(sqrtIsPrime(79))
