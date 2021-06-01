// 제한 조건
// s는 길이 1 이상인 문자열입니다.
// s는 알파벳과 공백문자(" ")로 이루어져 있습니다.
// 첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 씁니다. ( 첫번째 입출력 예 참고 )
// 입출력 예
//              s	                return
// "3people unFollowed me"	"3people Unfollowed Me"
// "for the last week"	"For The Last Week
let str1 = "3people unFollowed me",
    str2 = "for the last week";
    function solution(s) {
        let arr = s.split(' '),
            regex = /^[a-zA-Z]+$/
        return arr.map(v=>{
            if (!regex.test(v[0])) {
                v= v.substring(0,1) + v[1].toLowerCase() + v.substring(2)
            } else {
                v= v.substring(0,1).toUpperCase() + v.substring(1).toLowerCase()
            }
            return v;
        }).join(' ')
    }
    
// sol2 
function solution2(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}


//sol3
function solution3(s) {
    var answer = [];

    s = s.split(' ');
    for(var i=0; i<s.length; i++) {
        // 2번쨰문자부터는 그냥 소문자로 다 처리해도 문제의 조건 만족하기에
        answer.push(s[i].substr(0,1).toUpperCase() + s[i].substr(1,s[i].length).toLowerCase());
    }
    return answer.join(' ');
}
