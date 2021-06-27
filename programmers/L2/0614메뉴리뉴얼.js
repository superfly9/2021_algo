// 예를 들어, 손님 6명이 주문한 단품메뉴들의 조합이 다음과 같다면,
// (각 손님은 단품메뉴를 2개 이상 주문해야 하며, 각 단품메뉴는 A ~ Z의 알파벳 대문자로 표기합니다.)

// 손님 번호	주문한 단품메뉴 조합
// 1번 손님	A, B, C, F, G
// 2번 손님	A, C
// 3번 손님	C, D, E
// 4번 손님	A, C, D, E
// 5번 손님	B, C, F, G
// 6번 손님	A, C, D, E, H
// 가장 많이 함께 주문된 단품메뉴 조합에 따라 "스카피"가 만들게 될 코스요리 메뉴 구성 후보는 다음과 같습니다.

// 코스 종류	메뉴 구성	설명
// 요리 2개 코스	A, C	1번, 2번, 4번, 6번 손님으로부터 총 4번 주문됐습니다.
// 요리 3개 코스	C, D, E	3번, 4번, 6번 손님으로부터 총 3번 주문됐습니다.
// 요리 4개 코스	B, C, F, G	1번, 5번 손님으로부터 총 2번 주문됐습니다.
// 요리 4개 코스	A, C, D, E	4번, 6번 손님으로부터 총 2번 주문됐습니다.

// orders	                                        course	    result
// ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]	[2,3,4]	["AC", "ACDE", "BCFG", "CDE"]
// ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"]	[2,3,5]	["ACD", "AD", "ADE", "CD", "XYZ"]
// ["XYZ", "XWY", "WXA"]	[2,3,4]	["WX", "XY"]

//BCF,BCG,CFG,BFG

const orders = ["XYZ", "XWY", "WXA"],
  course = [2, 3, 4];
// course의 길이별로 가능한 조합을 다 만들고 , 그 조합에 대해 전체 순회하면서 카운트 세기
function solution(orders, course) {
  let answer = [],
    result = {};
  orders.forEach((v) => {
    for (let i = 0; i < course.length; i++) {
      //getCombinations(v.split("") :Ex = [A,B,C,F,G] , 2 )  => AB AC AF AG BC BF BG
      let candidate = getCombinations(v.split("").sort(), course[i]);
      //v.split("")이면 wx ,xw가 각각 1번 씩으로 카운트 됨, 실제는 wx:2가 되어야함.따라서 조합을 만들기 전 오름차순으로 문자열 정리
      for (let i = 0; i < candidate.length; i++) {
        let key = candidate[i].join("");
        // key가 이미 result obj에 존재하는지 확인 -> true : count + 1 , false : 1부터 시작
        result[key] = result.hasOwnProperty(key) ? result[key] + 1 : 1;
        // 모든 경우의 수를 객체로 만듦
      }
    }
  });
  // 객체를 순환하며 길이 별로 가장 크거나 긴 값을 체크
  for (let i = 0; i < course.length; i++) {
    let max = 0, // course값이 달라질 때마다 초기화
      val = [];
    for (let key in result) {
      if (course[i] !== key.length) continue;
      if (result[key] > 1 && result[key] > max) {
        max = result[key];
        val = [key];
      } else if (result[key] === max) {
        val.push(key);
      }
    }
    answer = [...answer, ...val];
  }
  console.log("reuslt:", result);
  return answer.sort();
}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

console.log(solution(orders, course));
