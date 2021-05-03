// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.


function solution(s){
    const arr = s.split('');
    let count  = 0;
    //문자열 순회 -> '('이면 count 증가, ')'이면 감소.  count  < 0 라는 건 ')'가 먼저 나오거나 '('보다 갯수가 많은 것이므로 false 
    //그런 식으로 끝까지 순회 + ()의 갯수가 같아야하므로 count === 0이면 return true
    for (let value of arr) {
        if (value ==='(') {
            count++;
        } else {
            count--;
        }
        if(count<0) return false;
    }
    return count === 0 ? true : false;
}

//sol2
function is_pair(s){
    var result = s.match(/(\(|\))/g);
    return result[0] == '(' && result.length % 2 == 0 ? true : false
  }