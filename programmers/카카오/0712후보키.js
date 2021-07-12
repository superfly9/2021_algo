let relations = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
];

//유일성(uniqueness) : 릴레이션에 있는 모든 튜플에 대해 유일하게 식별되어야 한다.
//최소성(minimality) : 유일성을 가진 키를 구성하는 속성(Attribute) 중 하나라도 제외하는 경우 유일성이 깨지는 것을 의미한다. 즉, 릴레이션의 모든 튜플을 유일하게 식별하는 데 꼭 필요한 속성들로만 구성되어야 한다.

function solution(relation) {
  let keySet = new Set();
  relation.forEach((v) => {
    let allKeys = getCandiate(v);
    for (let key of allKeys) {
      if (!keySet.has(key)) {
        keySet.add(key);
      }
    }
    console.log("allKeys:", allKeys);
  });
  return keySet;
}

const getCandiate = (arr) => {
  const result = [],
    flag = new Array(arr.length).fill(false);
  const dfs = (depth) => {
    if (depth === arr.length) {
      let target = arr.filter((_, index) => flag[index]);
      result.push(target);
      //   console.log("End =>", "left Flag:", flag, "depth:", depth, target);
      return result;
    }
    flag[depth] = true;
    dfs(depth + 1); // dep :1 =>
    flag[depth] = false;
    dfs(depth + 1);
  };
  dfs(0);
  return result;
};
console.log(solution(relations));
// console.log(getCandiate(relations[1]));
// End => left Flag: [ true, true, true, true ] depth: 4 [ '200', 'apeach', 'math', '2' ]
// End => left Flag: [ true, true, true, false ] depth: 4 [ '200', 'apeach', 'math' ]
// End => left Flag: [ true, true, false, true ] depth: 4 [ '200', 'apeach', '2' ]
// End => left Flag: [ true, true, false, false ] depth: 4 [ '200', 'apeach' ]
// End => left Flag: [ true, false, true, true ] depth: 4 [ '200', 'math', '2' ]
// End => left Flag: [ true, false, true, false ] depth: 4 [ '200', 'math' ]
// End => left Flag: [ true, false, false, true ] depth: 4 [ '200', '2' ]
// End => left Flag: [ true, false, false, false ] depth: 4 [ '200' ]

// End => left Flag: [ false, true, true, true ] depth: 4 [ 'apeach', 'math', '2' ]
// End => left Flag: [ false, true, true, false ] depth: 4 [ 'apeach', 'math' ]
// End => left Flag: [ false, true, false, true ] depth: 4 [ 'apeach', '2' ]
// End => left Flag: [ false, true, false, false ] depth: 4 [ 'apeach' ]
// End => left Flag: [ false, false, true, true ] depth: 4 [ 'math', '2' ]
// End => left Flag: [ false, false, true, false ] depth: 4 [ 'math' ]
// End => left Flag: [ false, false, false, true ] depth: 4 [ '2' ]
// End => left Flag: [ false, false, false, false ] depth: 4 []

// [
//   [ '200', 'apeach', 'math', '2' ],
//   [ '200', 'apeach', 'math' ],
//   [ '200', 'apeach', '2' ],
//   [ '200', 'apeach' ],
//   [ '200', 'math', '2' ],
//   [ '200', 'math' ],
//   [ '200', '2' ],
//   [ '200' ],
//   [ 'apeach', 'math', '2' ],
//   [ 'apeach', 'math' ],
//   [ 'apeach', '2' ],
//   [ 'apeach' ],
//   [ 'math', '2' ],
//   [ 'math' ],
//   [ '2' ],
//   []
// ]
