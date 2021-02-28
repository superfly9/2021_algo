const people = [70, 50, 80, 50];
// [80,70,50,50]
const people2= 	[70, 80, 50];

const limit = 100;
//  처음 풀이 (테스트 통과하나 효율성에서 깎임 75/100)
function solution (people,limit) {
    let target = people.sort((a,b)=>b-a); // 뒤 - 앞 = 내림차순  앞 - 뒤 = 오름차순
    let answer = 0;
    
    while (target.length >0) {
        for (let i=0,j=target.length-1;i<=j;i++) {
            if (limit >= target[0]+target[j]) {
                target.pop();
                j--;
            }
            target.shift();
            j = target.length-1;
            answer++
        }
    }
    return answer;
}

console.log(solution(people2,limit));