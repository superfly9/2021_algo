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

// sol2 )
function solution(A,B){
    A.sort((a, b) => a - b) //오름차순 정렬
    B.sort((a, b) => b - a) // 내림차순 정렬
    return A.reduce((total, val, idx) => total + val * B[idx], 0)
}

//sol3
function getMinSum(A,B){
    var answer = 0;

  var sum = 0;
  var temp1, temp2;
  var result = 0;

  A.sort(function(a,b){return a-b;});
  B.sort(function(a,b){return b-a;});
  for(var i=0;i<A.length;i++){
    result = A[i]*B[i];
    sum = sum + result;
  }
  answer = sum;

  return answer;
}