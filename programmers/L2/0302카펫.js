// Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

// yellow => 24 = [24,1] [12,2] [8,3] [6,4] 
// yellow => 2  = [2,1] [1,2]
function solution(brown, yellow) {
    const totalBlock = brown + yellow;
    for (let i = yellow;i>0;i--) {
        // yellow부터 시작해서 값을 1씩 줄이기에 항상 col > row인 값이 먼저 return
        // for (let i = 0;i<yellow;i++) 였다면 내가 col < row인 값이 먼저 return되었을것
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

function solution2(brown, red) {
    var n = 0;
    for(var m = red; m >= 1; m--){
        n = Math.floor(red / m);
        if(red % m == 0 && ((m + 2) * (n + 2) == (brown + red)))
            return [m + 2, n + 2]
    }
}
//다른 사람 풀이
function solution3(brown, red) {
    const totalSpace = brown + red;
    
    for(let i = Math.floor(totalSpace / 2); i > 0; i--){
        if(totalSpace % i !== 0) continue;
        
        const width = i;
        const height = totalSpace / i;
        
        if((width - 2) * (height - 2) === red){
            return [width, height];
        }
    }
}