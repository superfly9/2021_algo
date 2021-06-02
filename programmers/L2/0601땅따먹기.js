//              land	            answer
// [[1,2,3,5],[5,6,7,8],[4,3,2,1]]	  16
// 단, 땅따먹기 게임에는 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 있습니다.
// 예를 들면,
// | 1 | 2 | 3 | 5 |    

// | 5 | 6 | 7 | 8 |

// | 4 | 3 | 2 | 1 |
// 로 땅이 주어졌다면, 1행에서 네번째 칸 (5)를 밟았으면, 2행의 네번째 칸 (8)은 밟을 수 없습니다.
// 마지막 행까지 모두 내려왔을 때, 얻을 수 있는 점수의 최대값을 return하는 solution 함수를 완성해 주세요

// 땅 -> N행 4열로
// 완전 탐색 or 그리디인줄 알았는데 dp
function solution(land) {
    
    for (let i=1;i<land.length;i++) {
        land[i][0] += Math.max(land[i-1][1],land[i-1][2],land[i-1][3])
        land[i][1] += Math.max(land[i-1][0],land[i-1][2],land[i-1][3])
        land[i][2] += Math.max(land[i-1][0],land[i-1][1],land[i-1][3])
        land[i][3] += Math.max(land[i-1][0],land[i-1][1],land[i-1][2])
    }
    return Math.max(...land[land.length-1]);
}

let land =[[1,2,3,5],[5,6,7,8],[4,3,2,1]];
console.log(solution(land))