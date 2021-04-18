//  [1,7] => 7, 17 , 71 : return 3
// [0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다. : return 2 
// 11과 011은 같은 숫자로 취급합니다.
// 같은 카드를 2번 동시에 쓸 수는 X

// 1. 가능한 숫자의 조합들을 만들고, 2. 바로 소수인지 판단, yes -> count ++ , no : 그 다음 실행
function solution(nums) {
    const numsArr = nums.split('');
    return answer;
}
//n자릿수
// 자릿수 갯수
//  1    n
//  2   n * (n-1)
//  3   n*(n-1)*(n-2)
// 1 7 
// 17 71 

// 0 1 1 
// 01 01  
// 10 11 
// 10 11
// 011 011  101 110 101 110

// 0 - 0 /1

// 1 - 0 / 1

// 1 - 0 /1

// 0 - 1 - 0/1  
//   - 1 - 0 /1
// 1 - 0
//   - 1
// 1

const isPrime = (number)=>{
    if (number <=1) return false;
    if (n%2===0) return n===2 ? true : false;
    for (let i = 3 ; i < Math.sqrt(number);i+=2) {
        if (n%2===0) return false
    }
    return true;
}