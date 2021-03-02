const clothes =[['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']]	
// 스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.


function solution(clothes) {
    let answer =1; // 하나씩만 입을때를 초기값으로 줌
    const candidate = {}
    // { 'headgear' : ['yellow_hat','blue_sunglasees'], 'eyewear : [] ] }형태의 구조를 생성
    for (let item of clothes) {
        const key = item[1];
        candidate[key] = []
    }
    for (let item of clothes) {
        const value =item[0];
        const key = item[1];
        candidate[key].push(value)
    }
    for (let item in candidate) {
        answer*= candidate[item].length+1;
    }
    return answer-1;
}

console.log(solution(clothes));