//첫번째 글자 바꾸기 
//start :A => 두 가지 고려 : 거꾸로 or 그대로  / A에서 오름차순으로 탐색 or Z로 가서 내림차순 탐색
// 참고  : ASCII CODE  A = 65, Z = 90;
const name = 'JEROEN'; // return 56
// 오름차순 계산시(A기준으로 ASCII차이 계산) 9 + 4 + 17 +14 + 4 + 13    + 5 (name.length -1 )= 61 + 5 = 66
// 17대신   Z - R =8   + 1(Z=>A 이동) = 9를 사용
// 14대신  Z - O = 11  + 1  = 12 사용  그러면 56된다.
function solution(name) {
    var answer = 0;
    return answer;
}