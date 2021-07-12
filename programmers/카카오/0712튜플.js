// 셀수있는 수량의 순서있는 열거 또는 어떤 순서를 따르는 요소들의 모음을 튜플(tuple)이라고 합니다. n개의 요소를 가진 튜플을 n-튜플(n-tuple)이라고 하며, 다음과 같이 표현할 수 있습니다.

// (a1, a2, a3, ..., an)
// 튜플은 다음과 같은 성질을 가지고 있습니다.

// 중복된 원소가 있을 수 있습니다. ex : (2, 3, 1, 2)
// 원소에 정해진 순서가 있으며, 원소의 순서가 다르면 서로 다른 튜플입니다. ex : (1, 2, 3) ≠ (1, 3, 2)
// 튜플의 원소 개수는 유한합니다.
// 원소의 개수가 n개이고, 중복되는 원소가 없는 튜플 (a1, a2, a3, ..., an)이 주어질 때(단, a1, a2, ..., an은 자연수), 이는 다음과 같이 집합 기호 '{', '}'를 이용해 표현할 수 있습니다.

// {{a1}, {a1, a2}, {a1, a2, a3}, {a1, a2, a3, a4}, ... {a1, a2, a3, a4, ..., an}}
// 예를 들어 튜플이 (2, 1, 3, 4)인 경우 이는

// {{2}, {2, 1}, {2, 1, 3}, {2, 1, 3, 4}}
// 와 같이 표현할 수 있습니다. 이때, 집합은 원소의 순서가 바뀌어도 상관없으므로

// {{2}, {2, 1}, {2, 1, 3}, {2, 1, 3, 4}}
// {{2, 1, 3, 4}, {2}, {2, 1, 3}, {2, 1}}
// {{1, 2, 3}, {2, 1}, {1, 2, 4, 3}, {2}}
// 는 모두 같은 튜플 (2, 1, 3, 4)를 나타냅니다.

// 특정 튜플을 표현하는 집합이 담긴 문자열 s가 매개변수로 주어질 때, s가 표현하는 튜플을 배열에 담아 return 하도록 solution 함수를 완성해주세요.

//             s	                        result
// "{{2},{2,1},{2,1,3},{2,1,3,4}}"	    [2, 1, 3, 4]
// "{{1,2,3},{2,1},{1,2,4,3},{2}}"	    [2, 1, 3, 4]
// "{{20,111},{111}}"	                [111, 20]
// "{{123}}"	                        [123]
// "{{4,2,3},{3},{2,3,4,1},{2,3}}"	    [3, 2, 4, 1]

let str = "{{2},{2,1},{2,1,3},{2,1,3,4}}";
function solution(s) {
  let target = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]")),
    //길이순 정렬
    sortedByLength = target.sort((a, b) => a.length - b.length),
    result = sortedByLength.reduce((acc, val) => {
      return acc.concat(val.filter((v) => !acc.includes(v)));
    }, []);
  return result;
}

console.log(solution(str));

//sol2) Set이용
const solution = (s) => tupple(changeMatrix(getSets(s)));

const getSets = (s) => {
  const sets = s.match(/{[\d,]+}/g);
  return sets
    .map((set) => set.match(/[\d]+,?/g).map((v) => parseInt(v)))
    .sort((a, b) => a.length - b.length);
};

const changeMatrix = (sets) => sets.reduce((_, set) => _.concat(set), []);

const tupple = (arr) => [
  ...arr.reduce((set, value) => set.add(value), new Set()),
];

//함수로 다 나눠서
const tupleFrom = (str) =>
  str
    .slice(2, -2)
    .split("},{")
    .map((it) => toNumbers(it))
    .sort(accendingByLength)
    .reduce(
      (acc, cur) => [...acc, ...cur.filter((it) => !acc.includes(it))],
      []
    );

const toNumbers = (str) => str.split(",").map((it) => Number(it));

const accendingByLength = (arr1, arr2) => arr1.length - arr2.length;

const solution = (s) => tupleFrom(s);
