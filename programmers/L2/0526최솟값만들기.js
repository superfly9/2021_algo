function solution(A,B){
    var answer = 0;
    let length = A.length;
    for (let i = 0;i<length;i++) {
        const indexA = A.indexOf(Math.min(...A)),
              indexB =B.indexOf(Math.max(...B)),
              minA =A.splice(indexA,1)[0],
              minB = B.splice(indexB,1)[0];
        answer+=minA * minB;
    }
    return answer;
}
const A  = [1,4,2];
const B = [5,4,4];
console.log(solution(A,B))
// A	B	answer
// [1, 4, 2]	[5, 4, 4]	29
// [1,2]	[3,4]	10