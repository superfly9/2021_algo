// 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다. 
// 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다. 
// 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다. 
//   3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다. 
// 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다. 
//   4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다. 
//   4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다. 
//   4-3. ')'를 다시 붙입니다. 
//   4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.(strChanger)
function solution(p) {
        if(p=='') return '';
        let answer = '';
        let [u,v] = divde(p,'')
        if (checkRight(u)) {
            answer+=u;
            if (v==='') return answer;
            answer+=solution(v);
        } else {
            answer+='(' + solution(v) + ')' + strChanger(u)
        }
    return answer;
}

// p ="()))((()"	
// u = "()"
// v = "))((()"
// 문자열 u가 "올바른 괄호 문자열"이므로 그대로 두고, v에 대해 재귀적으로 수행합니다.
// 다시 두 문자열 u, v로 분리합니다.
// u = "))(("
// v = "()"
// u가 "올바른 괄호 문자열"이 아니므로 다음과 같이 새로운 문자열을 만듭니다.
// v에 대해 1단계부터 재귀적으로 수행하면 "()"이 반환됩니다.
// u의 앞뒤 문자를 제거하고, 나머지 문자의 괄호 방향을 뒤집으면 "()"이 됩니다.
// 따라서 생성되는 문자열은 "(" + "()" + ")" + "()"이며, 최종적으로 "(())()"를 반환합니다.
// 처음에 그대로 둔 문자열에 반환된 문자열을 이어 붙이면 "()" + "(())()" = "()(())()"가 됩니다.

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
            let first = str.substring(0,i+1);
            second = str.substring(i+1);
            return [first,second]
        }
    }
}

const strChanger = (str)=>{
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
    let left = 0,
        right = 0,
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
console.log('답:',solution(str1));


//sol2

2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
function solution(p) {
  if (p.length === 0) {
    return ''
  }
  const { u, v } = split(p)

  if (isValid(u)) {
    return u + solution(v)
  } else {
    return '(' + solution(v) + ')' + makeNewU(u)
  }
}

const isValid = (str) => {
  const stack = []
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (char === '(') {
      stack.push(char)
    } else {
      stack.pop()
    }
  }
  return stack.length === 0
}

const split = (p) => {
  let count = 0
  for (let idx = 0; idx < p.length; idx++) {
    const char = p[idx]
    if (char === '(') {
      count++
    } else {
      count--
    }
    if (count === 0) {
      return { u: p.slice(0, idx + 1), v: p.slice(idx + 1) }
    }
  }
}

const makeNewU = (u) => {
  const result = Array.from(u.slice(1, u.length - 1))
    .map((char) => {
      if (char === '(') {
        return ')'
      } else {
        return '('
      }
    })
    .join('')
  return result
}

///
const TYPE1 = '\('
const TYPE2 = '\)'
function solution(p) {
    let result = convert(p,'');
    return result;
}
function convert(w,ans){
    // 문자열을 균형잡힌 괄호 문자열 u,v로 분리
    // u는 더 나눌 수 없는 균형잡힌 괄호 문자열
    let str = divide(w);
    let u = str[0];
    let v = str[1];
    if (check(u)){
        // u가 올바른 문자열이라면 ans에 u를 붙이고 v부터 다시 시작
        // v가 비어있다면 그동안 붙인 ans 반환
        ans += u;
        if (v===''){
            return ans;
        }
        return convert(v,ans);
    }else{
        // u가 올바른 문자열이 아니라면 과정 수행하고 반환
        ans += '\(' + convert(v,'') +'\)' + transfromU(u);
        return ans;
    }
}
function transfromU(u){
    let newU = ''
    for (let i=1; i<u.length-1; i++){
        if(u[i]===TYPE1){
            newU += TYPE2;
        }else{
            newU += TYPE1;
        }
    }
    return newU;
}
function check(str){
    // 문자열 넘기면서 TYPE1 문자열 개수보다 TYPE2 문자열 개수가 많아지면 올바른 문자열이 아님
    let isCorrect = true;
    let cntType1 = 0;
    let cntType2 = 0;
    for (let i=0; i<str.length; i++){
        if (str[i] === TYPE1){
            cntType1++;
        }else if (str[i] === TYPE2){
            cntType2++;
        }
        if (cntType1 < cntType2){
            isCorrect = false;
        }
    }
    return isCorrect;
}
function divide(str){
    // 문자열 넘기면서 처음으로 TYPE1 문자열 개수와 TYPE2 문자열 개수가 같아지면
    // 그동안 넘긴 문자열과 그 이후로 나누기
    let cntType1 = 0;
    let cntType2 = 0;
    let i = 0;
    for (i=0; i<str.length; i++){
        if (str[i] === TYPE1){
            cntType1++;
        }else if (str[i] === TYPE2){
            cntType2++;
        }
        if (cntType1 === cntType2){
            break;
        }
    }
    let arr = [];
    arr.push(str.substr(0,i+1));
    arr.push(str.substr(i+1,str.length-i));
    return arr;
}

//function solution(p){
    if(p=='') return '';
    var answer = solution_act(p);
    
    function solution_act(str){
        var txt = '';
        var num = 0;
        for(var i=0; i<str.length; i++){
            num += (str[i] == '(') ? 1 : -1;
            if(num == 0) break;
        }
        var u = str.substring(0,i+1);
        var v = str.substring(i+1,str.length);
        if(check_correct_str(u)){
            txt += u;
            if(v != '') txt += solution_act(v);
        }else{
            txt += '(';
            txt += solution_act(v);//( 
            txt += ')';
            u = u.substring(1, u.length-1);
            for(var j=0; j<u.length; j++){
                txt += (u[j] == ')') ? '(' : ')';
            }
        }
        return txt;
    }
    

    // 올바른 문자열 체크
    function check_correct_str(str){
        var num = 0;
        for(var i=0; i<str.length; i++){
            num += (str[i] == '(') ? 1 : -1;
            if(num < 0) break;
        }
        return (num == 0) ? true : false;
    }
    return answer;
}
//


2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
function reverse(str) {
  return str.slice(1, str.length - 1).split("").map((c) => (c === "(" ? ")" : "(")).join("");
}

function solution(p) {
  if (p.length < 1) return "";

  let balance = 0;
  let pivot = 0;
  do { balance += p[pivot++] === "(" ? 1 : -1 } while (balance !== 0);

  const u = p.slice(0, pivot);
  const v = solution(p.slice(pivot, p.length));

  if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
  else return "(" + v + ")" + reverse(u);
}
