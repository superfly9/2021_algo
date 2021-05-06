// 문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현하여 더 짧은 문자열로 줄여서 표현하는 알고리즘을 공부하고 있습니다.
// 예를 들어, "ababcdcdababcdcd"의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 
//2개 단위로 잘라서 압축한다면 "2ab2cd2ab2cd"로 표현할 수 있습니다.
// 다른 방법으로 8개 단위로 잘라서 압축한다면 "2ababcdcd"로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.

// 다른 예로, "abcabcdede"와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 "abcabc2de"가 되지만,
// 3개 단위로 자른다면 "2abcdede"가 되어 3개 단위가 가장 짧은 압축 방법이 됩니다. 
//이때 3개 단위로 자르고 마지막에 남는 문자열은 그대로 붙여주면 됩니다.

// 압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 
//가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.

//"xababcdcdababcdcd"	17
// 문자열은 제일 앞부터 정해진 길이만큼 잘라야 합니다.
// 따라서 주어진 문자열을 x / ababcdcd / ababcdcd 로 자르는 것은 불가능 합니다.
// 이 경우 어떻게 문자열을 잘라도 압축되지 않으므로 가장 짧은 길이는 17이 됩니다.

const s0 = "aabbaccc"	 // 2a2ba3c result  =7
const s1 = "ababcdcdababcdcd"	

// 처음부터 반복되는 문자가 안 생기더라도 ok, 뒤에서 생기면 그걸 압축시키면 된다
// "aabbaccc"	7 2a2ba3c
// "ababcdcdababcdcd"	9  2개씩 :2ab2cd2ab2cd , 8개 : 2ababcdcd
// "abcabcdede"	8   3개씩 : 2abcdede , 2개씩 : abcabc2de
// "abcabcabcabcdededededede"	14  , 
// 문자열을 2개 단위로 자르면 "abcabcabcabc6de" 가 됩니다.
// 문자열을 3개 단위로 자르면 "4abcdededededede" 가 됩니다.
// 문자열을 4개 단위로 자르면 "abcabcabcabc3dede" 가 됩니다.
// 문자열을 6개 단위로 자를 경우 "2abcabc2dedede"가 되어 최소 14

// "xababcdcdababcdcd"	17

const s2 = 'aaabbb' // 3a3b 
const s3 = 'aaabbbb' // 3a3bb
// 1.완전탐색 -> 모든 문자열 조합에 대해 길이를 조사, 조합된 문자열 길이 <= s.length / 2일때까지 (잘린 문자열 길이 > s.length/2이면 같은 문자의 반복이 안 일어나므로 )
// 2.자른 문자열에 대해, 그 다음 index부터 문자열을 하나씩 잘라가기
function solution(s) {
    //aabbaccc => 2a2ba3c
    var answer = [];
    for (let i=1;i<s.length/2;i++) {
        // i는 문자열을 자를 갯수를 의미
        let str1 = s.substring(0,i); //  1. 길이를 1씩 늘려가며 자르는 문자열 (그 뒤의 문자열과 비교하는 기준이 된다)
        let str2 = ''
        let result = ''
        let count = 1; // str1이 몇 번 반복되는지를 나타내는 숫자(문자를 자를때마다 1로 초기화)
        for (let j=i;j<s.length-i+1;j+=i) {
            // j + i < s.length
            // i = 3 이면 0~2번째 문자를 자름, 그 다음에는 3~5번째 문자를 자름
             str2 = s.substring(j,j+i);
             // i=2 , 
             // j =2 , j =4 , j= 6
              
             console.log('str1:',str1,'str2:',str2)
            if (str1 === str2) {
                count++;
            } else {
                //비교하는 문자열이 다를때 카운트와 문자열을 추가
                result+=count >1 ? `${count}${str2}` : `${str2}`
                str1 = str2;
                count = 1;
            }
        }
        if (count>1) result +=`${count}${str2}`
        answer.push(result)
    }
    return answer;
}

console.log(solution(s0))