// 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
// 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

// sort(compareFunction)
// compareFunction(a,b) : return < 0 = 그대로(a,b)    , return > 0 : 순서 바꿈(b,a)

const numbers = [6,10,2,98]; // 
let count = 0;
// console.log(numbers.sort((a,b)=>{
//     console.log('count:',++count);
//     console.log('a:',a,'b:',b);
//     return a-b;
// }))
// 7:25 - 7: 50 => for문 3개? 이거 너무 too much
function solution(numbers) {
    var answer = numbers.map(v=>v+'').sort((a,b)=>(b+a)-(a+b));
    console.log(answer)
    return answer[0] === 0 ? '0' : answer.join('');
}
console.log(solution(numbers))
