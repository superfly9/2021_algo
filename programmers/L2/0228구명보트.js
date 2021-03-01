const people = [70, 50, 80, 50];
// [80,70,50,50]
const people2= 	[70, 80, 50];

const limit = 100;
//  2번째 풀이 (테스트 통과하나 효율성에서 깎임 75/100)
function solution (people,limit) {
    let target = people.sort((a,b)=>b-a); // 뒤 - 앞 = 내림차순  앞 - 뒤 = 오름차순
    let answer = 0;
    while (target.length >0) {
        //while => loop 몇번 돌지는 알 수 없다
        //for문에서 인덱스 2개 + 배열의 원소를 빼고 더하는 상황을 다루는 건 많은 주의가 필요한 것 같다.
        const mostHeavy = target.shift();
        let remain = limit - mostHeavy;
        if (remain>=target[target.length-1]) {
            target.pop();
        }
        answer++;
    }
    return answer;
}


// 다시 푼것=>배열의 원소를 뺴거나 추가하지 않고 처리
function solution2 (people,limit) {
    let answer = 0;
    let left = 0;
    let right = people.length-1
    people.sort((a,b)=>b-a);
    while (left<right) {
        if (limit >= people[left]+people[right]) {
            right--;  
        } 
        left++;
        answer++
    }
    if(left === right) answer++;
    return answer;
}
console.log(solution2(people2,limit));


// 다른 사람 풀이
function solution3(people, limit) {
  let biggest = 0,
    count = 0,
    i = 0;
  people.sort((a, b) => a - b);
  while (people.length > 0) {
    biggest = people.pop();
    i = 0;
    while (people[i] <= limit - biggest) i++;
    if (i) people.splice(i - 1, 1);
    count++;
  }
  return count;
}