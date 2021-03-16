//첫번째 글자 바꾸기 
//start :A => 두 가지 고려 : 거꾸로 or 그대로  / A에서 오름차순으로 탐색 or Z로 가서 내림차순 탐색
// 참고  : ASCII CODE  A = 65, Z = 90;
const name = 'JEROEN'; // return 56
// 오름차순 계산시(A기준으로 ASCII차이 계산) 9 + 4 + 17 +14 + 4 + 13    + 5 (name.length -1 )= 61 + 5 = 66
// 17대신   Z - R =8   + 1(Z=>A 이동) = 9를 사용
// 14대신  Z - O = 11  + 1  = 12 사용  그러면 56된다.
//AZAAAZ=5
// Greedy는 매 수행에서 매 순간의 최적의 방법을 찾아 수행하는 알고리즘입니다.
// 항상 최적의 결과를 return하지는 않지만, 항상 최악의 결과를 return하지 않는 특징을 가지고 있습니다.

function solution(name) {
    let init = '',
        answer = 0
    for (let i=0;i<name.length;i++) {
        init+='A';
    }
    while (name!==init) {
        let left=0,
            right = 0;
            index = 0;

            // 위 / 아래 비용 계산
            for (let i = 0; i<name.length-1;i++) {
                let fromA =  name[i].charAt(0) - 65;
                let fromZ =  90 -name[i].charAt(0)
                answer+= fromA  >  fromZ ? fromZ : fromA;
            }
            // 오 / 왼 비용 계산
            for (let i = index;i<name.length-1;i++) {
                left++;
                if (name[i]!=='A') break;
            }
            for (let j= name.length-1;j>index;j--) {
                right++;
                if (name[j]!=='A') break;
            }

            // 인덱스 결정했으니 +1
            answer++;
    }
    return answer;
}