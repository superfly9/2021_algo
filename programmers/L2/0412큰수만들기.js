// 1231234 => k =3 , length = 7;
// last Index = (length -  1 ) - k  (마지막 문자의 인덱스 - 앞에서부터 제거해야할 문자 갯수)

 // 1,2,3


// 
function solution(number, k) {
    let collected  = [];
    // 모든 경우를 다 순회? 그리디면 그럴 필요 없나 ? 헷갈린다
    for (let i=0;i<number.length;i++) {
        while (k>0) {
            if (collected[collected.length-1] < number[i]) {
                collected.pop();
                k-=1;
            }
            collected.push(number[i])
        }
    }
    return collected.join('').substr(0,number.length-k);
}