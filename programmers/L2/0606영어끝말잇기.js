// 1부터 n까지 번호가 붙어있는 n명의 사람이 영어 끝말잇기를 하고 있습니다. 영어 끝말잇기는 다음과 같은 규칙으로 진행됩니다.

// 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
// 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
// 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
// 이전에 등장했던 단어는 사용할 수 없습니다.
// 한 글자인 단어는 인정되지 않습니다.
// 다음은 3명이 끝말잇기를 하는 상황을 나타냅니다.

// tank → kick → know → wheel → land → dream → mother → robot → tank

// 위 끝말잇기는 다음과 같이 진행됩니다.

// 1번 사람이 자신의 첫 번째 차례에 tank를 말합니다.
// 2번 사람이 자신의 첫 번째 차례에 kick을 말합니다.
// 3번 사람이 자신의 첫 번째 차례에 know를 말합니다.
// 1번 사람이 자신의 두 번째 차례에 wheel을 말합니다.
// (계속 진행)
// 끝말잇기를 계속 진행해 나가다 보면, 3번 사람이 자신의 세 번째 차례에 말한 tank 라는 단어는 이전에 등장했던 단어이므로 탈락하게 됩니다.

// 사람의 수 n과 사람들이 순서대로 말한 단어 words 가 매개변수로 주어질 때,
// 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return 하도록 solution 함수를 완성해주세요.

// 제한 사항
// 끝말잇기에 참여하는 사람의 수 n은 2 이상 10 이하의 자연수입니다.
// words는 끝말잇기에 사용한 단어들이 순서대로 들어있는 배열이며, 길이는 n 이상 100 이하입니다.
// 단어의 길이는 2 이상 50 이하입니다.
// 모든 단어는 알파벳 소문자로만 이루어져 있습니다.
// 정답은 [ 번호, 차례 ] 형태로 return 해주세요.
// 만약 주어진 단어들로 탈락자가 생기지 않는다면, [0, 0]을 return 해주세요.
// 입출력 예
// n	words	result
// 3	["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]	[3,3]
// 5	["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]	[0,0]
// 2	["hello", "one", "even", "never", "now", "world", "draw"]	[1,3]
// 입출력 예 설명
// 입출력 예 #1
// 3명의 사람이 끝말잇기에 참여하고 있습니다.

// 1번 사람 : tank, wheel, mother
// 2번 사람 : kick, land, robot
// 3번 사람 : know, dream, tank
// 와 같은 순서로 말을 하게 되며, 3번 사람이 자신의 세 번째 차례에 말한 tank라는 단어가 1번 사람이 자신의 첫 번째 차례에 말한 tank와 같으므로 3번 사람이 자신의 세 번째 차례로 말을 할 때 처음 탈락자가 나오게 됩니다.

// 입출력 예 #2
// 5명의 사람이 끝말잇기에 참여하고 있습니다.

// 1번 사람 : hello, recognize, gather
// 2번 사람 : observe, encourage, refer
// 3번 사람 : effect, ensure, reference
// 4번 사람 : take, establish, estimate
// 5번 사람 : either, hang, executive
// 와 같은 순서로 말을 하게 되며, 이 경우는 주어진 단어로만으로는 탈락자가 발생하지 않습니다. 따라서 [0, 0]을 return하면 됩니다.

// 입출력 예 #3
// 2명의 사람이 끝말잇기에 참여하고 있습니다.

// 1번 사람 : hello, even, now, draw
// 2번 사람 : one, never, world
// 와 같은 순서로 말을 하게 되며, 1번 사람이 자신의 세 번째 차례에 'r'로 시작하는 단어 대신, n으로 시작하는 now를 말했기 때문에 이때 처음 탈락자가 나오게 됩니다.

// 이전 단어의 마지막 글자 !== 현재 단어의 앞글자이면 break로 for문 종료,
// 몇번째 사람이 어느턴에?  몇번째 턴(몫의 의미)-> Math.ceil((i+1)/n), 1번 사람이 3번째 턴에 탈락 :몇 번째사람(계속 같은게 반복되기에 나머지의 의미) ( i ===  4) => (i+1)%n,
function solution(n, words) {
  let answer = [words[0]],
    flag = true,
    i = 0;
  for (i = 1; i < words.length; i++) {
    let prevWords = words[i - 1],
      currentWords = words[i],
      prevLastStr = prevWords[prevWords.length - 1],
      currentFirstStr = currentWords[0];
    if (
      prevLastStr !== currentFirstStr ||
      answer.indexOf(currentWords) !== -1
    ) {
      flag = false;
      break;
    }
    answer.push(currentWords);
  }
  return flag ? [0, 0] : [(i % n) + 1, Math.ceil((i + 1) / n)];
}
let n = 3,
  words = [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ];
console.log(solution(n, words));
// [3,3]

//sol2
function solution(n, words) {
  for (let i = 0; i < words.length; i++) {
    if (i === 0) continue;
    let prevWord = words[i - 1];
    let prevLast = prevWord[prevWord.length - 1];
    let currFirst = words[i][0];
    if (words.indexOf(words[i]) !== i || prevLast !== currFirst) {
      return [(i + 1) % n || n, Math.ceil((i + 1) / n)];
    }
  }
  return [0, 0];
  // [번호, 차례] (i+1)%n 이 번호를 표현, Math.ceil((i+1)/3)로 표현가능.
  // words 에서 i = 0일 때 제외하고 i-1의 맨뒷글자와 i의 맨첫글자 비교.
  // indexof로 찾는다.
}
//
function solution(n, words) {
  let answer = 0;
  words.reduce((prev, now, idx) => {
    answer =
      answer ||
      (words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]
        ? idx
        : answer);
    return now[now.length - 1];
  }, "");

  return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0];
}

//sol3
function solution(n, words) {
  var fail_i = -1;
  for (var i = 1; i < words.length; i++) {
    var val = words[i];
    // 전단계의 끝말과 현단계 첫말이 다를 경우
    if (
      words[i - 1].substring(words[i - 1].length - 1) != val.substring(0, 1)
    ) {
      fail_i = i;
      break;
    }
    // indexOf 함수는 첫번째로 값이 맞는 인덱스만 반환하므로
    // 현재 인덱스와 맞지 않을 경우 중복된 값
    if (words.indexOf(val) != i) {
      fail_i = i;
      break;
    }
  }

  if (fail_i == -1) return [0, 0];

  var no = (fail_i % n) + 1;
  var turn = Math.floor(fail_i / n) + 1;

  return [no, turn];
}
