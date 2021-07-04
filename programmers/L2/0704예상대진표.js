//게임은 최종 한 명이 남을 때까지 진행됩니다.
// 이때, 처음 라운드에서 A번을 가진 참가자는 경쟁자로 생각하는 B번 참가자와 몇 번째 라운드에서 만나는지 궁금해졌습니다.
//게임 참가자 수 N, 참가자 번호 A, 경쟁자 번호 B가 함수 solution의 매개변수로 주어질 때, 처음 라운드에서 A번을 가진 참가자는 경쟁자로 생각하는 B번 참가자와 몇 번째 라운드에서 만나는지 return 하는 solution 함수를 완성해 주세요.
//단, A번 참가자와 B번 참가자는 서로 붙게 되기 전까지 항상 이긴다고 가정합니다.

// 1 2 3 4 5 6 7 8
//  3 - 4 => 4 ,  7 - 8 => 7
// 1 4 5 7
// 1 -4 => 4, 5 -7 => 7
// 4 -7

// 1 2 => 1   length === 2 => return 1
// 1 2 3 4  , 2 vs 3 => return 2
// 5 6 7 8 , 5 vs 7
// a,b 홀짝 따라 newIndex = a -1 or/2 + 1 a-2/2 +1
// index갱신 a가 짝수 + b- a = 1이면 게임 끝, return count
// A,B에게 매 시행마다 index가 필요(길이가 매번 줄어들기에)
// 종료조건 : indexA % 2 === 0 && indexB-indexA=1이면 둘이 만났기에
// 1 2 3 4 5 6 7 8
// 2  4 5 8
// 4 5
//실패 test : 25,26 시간초과
function solution(n, a, b) {
  if (n === 2) return 1;
  let indexA = a, // 1부터 시작
    indexB = b;
  round = 1;
  let isEnd;
  while (!isEnd) {
    round++;
    indexA = indexHandler(indexA);
    indexB = indexHandler(indexB);
    let minIndex = Math.min(indexA, indexB);
    isEnd = minIndex % 2 === 1 && Math.abs(indexB - indexA) === 1;
  }
  return round;
}

const indexHandler = (target) => {
  if (target % 2 === 0) {
    target /= 2;
  } else {
    target = Math.floor(target / 2) + 1; // or Math.ceil(indexA/2)
  }
  return target;
};

console.log(solution(16, 4, 5));

// 두번쨰 시도
function solution2(n, a, b) {
  if (n === 2 || (Math.min(a, b) % 2 === 1 && b - a === 1)) return 1; // 이거 추가하니 26은 통과, 25는 여전히 실패
  let indexA = a, // 1부터 시작
    indexB = b;
  round = 1;
  let isEnd;
  // 1 2 3 4 5 6 7 8
  //  3 - 4 => 4 ,  7 - 8 => 7
  // 1 4 5 7
  // 1 -4 => 4, 5 -7 => 7
  // 4 -7
  while (!isEnd) {
    round++;
    indexA = indexHandler(indexA);
    indexB = indexHandler(indexB);
    let minIndex = Math.min(indexA, indexB);
    isEnd = minIndex % 2 === 1 && Math.abs(indexB - indexA) === 1;
  }
  return round;
}

const indexHandler = (target) => {
  if (target % 2 === 0) {
    target /= 2;
  } else {
    target = Math.floor(target / 2) + 1; // or Math.ceil(indexA/2)
  }
  return target;
};
