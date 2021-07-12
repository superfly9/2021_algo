// flag = [false,false,false]
// flag[index] = true이면 arr[index]가 포함, 아니면 불포함
// dfs === tree구조인가? yes
// [O, O, O] => [1, 2, 3]
// [O, O, X] => [1, 2]

// [O, X, O] => [1, 3]
// [O, X, X] => [1]

// [X, O, O] => [2, 3]
// [X, O, X] => [2]

// [X, X, O] => [3]
// [X, X, X] => []

const getSubsets = (arr) => {
  let flag = new Array(arr.length).fill(false);
  const subSets = [];
  const DFS = (depth) => {
    //depth === 1부터 시작
    if (depth === arr.length) {
      const subset = arr.filter((v, index) => flag[index]);
      subSets.push(subset);
      return subSets;
    }
    flag[depth] = true;
    console.log("depth:", depth, "Left flag:", flag);
    DFS(depth + 1); // 트리의 왼쪽에 대한 재귀호출

    flag[depth] = false;
    console.log("depth:", depth, "Rigth flag:", flag);
    DFS(depth + 1); // 트리의 오른쪽에 대한 재귀호출
  };
  DFS(0);
  return subSets;
};
const ex = [1, 2, 3];
console.log(getSubsets(ex));

// depth: 0 Left flag: [ true, false, false ]
// depth: 1 Left flag: [ true, true, false ]
// depth: 2 Left flag: [ true, true, true ]
// depth: 2 Rigth flag: [ true, true, false ]
// depth: 1 Rigth flag: [ true, false, false ]
// depth: 2 Left flag: [ true, false, true ]
// depth: 2 Rigth flag: [ true, false, false ]

// depth: 0 Rigth flag: [ false, false, false ]
// depth: 1 Left flag: [ false, true, false ]
// depth: 2 Left flag: [ false, true, true ]
// depth: 2 Rigth flag: [ false, true, false ]
// depth: 1 Rigth flag: [ false, false, false ]
// depth: 2 Left flag: [ false, false, true ]
// depth: 2 Rigth flag: [ false, false, false ]
