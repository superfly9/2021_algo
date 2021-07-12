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
    DFS(depth + 1);

    flag[depth] = false;
    console.log("depth:", depth, "Rigth flag:", flag);
    DFS(depth + 1);
  };
  DFS(0);
  return subSets;
};
const ex = [1, 2, 3];
console.log(getSubsets(ex));
