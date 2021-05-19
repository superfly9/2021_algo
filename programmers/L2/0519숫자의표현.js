// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15

// 완전 탐색
// n	result
// 15	4
function solution(n) {
    let count = 1;
    for (let i = 1;i <n;i++) {
        let sum = i; // 1 
        let start = i; // 1
        
        for (let j = start+1;j<=n;j++) {
            sum+=j;
            console.log('j:',j,'i:',i)
            if (sum === n) {
                console.log('성공시 : =>','j:',j,'i:',i)
                count++
                break;  
            } 
            if (sum > n) break; // 안 쪽 for문을 빠져나온다
        }
    }
    return count;
}

console.log(solution(15))