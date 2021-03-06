// Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

// yellow => 24 = [24,1] [12,2] [8,3] [6,4] 
// yellow => 2  = [2,1] [1,2]
function solution(brown, yellow) {
    const totalBlock = brown + yellow;
    for (let i = yellow;i>0;i--) {
        if (yellow%i!==0) continue; //yellow의 약수가 아니면 다음 for문 loop실행
            const col = i +2;
            const row =(yellow/i)+2;
            if(col*row===totalBlock)  return [col,row];
    }
}

console.log(solution(10,2))


// * => brown  
// ********
// *      *
// *      *   
// *      *
// *      *
// ********

