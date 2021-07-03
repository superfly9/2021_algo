let board = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];

/*
[0,1,1,1]
[1,1,1,1]
[1,1,1,1]
[0,0,1,0]
*/
const board2 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
function solution(board) {
  //왼,위,왼쪽 위를 비교해서 셋의 최솟값 + 1을 써주기, 0이 하나라도 있으면 무조건 1이 되고,아니라면 사각형을 추가로 생성 가능하기에 변의 길이를 확장시켜 나갈 수 있다.
  // 항상 최댓값을 체크하며 순회하기, 최댓값(한 변의 길이) ** 2 = 넓이
  let rowLength = board.length,
    colLength = board[0].length,
    max = 0;
  if (rowLength === 1 || colLength === 1) return 1;
  for (let i = 1; i < rowLength; i++) {
    for (let j = 1; j < colLength; j++) {
      let left = board[i][j - 1],
        top = board[i - 1][j],
        leftTop = board[i - 1][j - 1],
        mySelf = board[i][j];
      board[i][j] = mySelf !== 0 ? Math.min(left, top, leftTop) + 1 : 0;
      if (max < board[i][j]) max = board[i][j];
    }
  }
  return max ** 2;
}

console.log(solution(board));
