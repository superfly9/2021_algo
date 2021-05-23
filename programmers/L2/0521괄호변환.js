// 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다. 
// 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다. 
// 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다. 
//   3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다. 
// 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다. 
//   4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다. 
//   4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다. 
//   4-3. ')'를 다시 붙입니다. 
//   4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.(strChanger)
//   4-5. 생성된 문자열을 반환합니다

//" ()))((() "	 = > () + ))((()
//  u = () , v= ))((() => v  = u + v로 다시
// ))((() => u = ))(( , v = () 
//  u = 올바르지x => 함수의 종료 

function solution(p) {
    let left = 0,
        right = 0;
        u = '',
        v = '',
        answer = ''
        [u,v] = divde(p)
        console.log('top:','u:',u,'v:',v)
        if (p.length === 0 ) return '';
        if (checkRight(u)) {
            u+=solution(v);
        } else {
            console.log('before answer:',answer)
            let my = strChanger(v)
            console.log('my:',my,'v:',v)
            answer+='(' + v + ')' + my
            console.log('answer:',answer)
        }
    return answer;
}

const divde = (str)=>{
    let left = 0,
        right = 0;

    for (let i = 0;i<str.length;i++) {
        if (str[i]=== '(') {
            left++;
        } else {
            right++;
        }
        if (right === left) {
            u = str.substring(0,i+1);
            v = str.substring(i+1);
            console.log('u:',u,'v:',v);
            return [u,v]
        }
    }
}

const strChanger = (str)=>{
    console.log('strChange:',str)
    let result = '';
    for (let i=1;i<str.length-1;i++) {
        if (str[i]===')') {
            result +='('
        } else {
            result+=')'
        }
    }
    return result;
}

const checkRight = (str)=>{
    console.log('check Right:',str)
    let left = 0,
        right = 0;
        isRight = true;
    for (let i = 0;i<str.length;i++) {
        if (str[i]=== '(') {
            left++;
        } else {
            right++;
        }
        if (left <right) isRight = false;
    }
    return isRight
}

// 1. 균형잡힌 문자열 (u,v) 로 분리  => 분리 함수 필요 (divde)
// 2. u가 균형잡혔는지, 올바른지 판단 (올바르지 않으면 균형잡힌것) => 균형 여부 판단 함수 필요 (checkRight)
// 2-1 . 올바르다 ? -> v대해 재귀 , 아니다 ? -> 4를 실행 => 문자열 조작 함수 필요 (strChanger)

let str1 = '()))((()'
console.log(solution(str1))