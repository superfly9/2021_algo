// 1231234 => k =3 , length = 7;
// last Index = (length -  1 ) - k  (마지막 문자의 인덱스 - 앞에서부터 제거해야할 문자 갯수)

 // 1,2,3

3234

// 
function solution(number, k) {
    let answer  = [];
    for (let i=0;i<number.length-1-k;i++) {
        answer.push(number[i])
        if (answer[0] < number[i]) {
            answer.pop();
            k-=1;
            answer
        }
    }
    return answer;
}