// 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
// 어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

// citiation = [3, 0, 6, 1, 5] H-index = 3

function solution(citations) {
    //  [6,5,3,1,0]  
    //   1  2 3  4 5  => 내림차순으로 배열을 정렬했으므로, index 1씩 증가할때마다 newArr[index]이상으로 인용된 논문수도 1씩 증가
    // [ 13, 11 , 8, 7, 6, 3, 2]
    //    1   2   3  4  5  6  7
    // newArr[index] < index 바로 전의 index값이 H-index
    // [5,5,5,5,5]
    //  1 2 3 4 5
    const newArr = citations.sort((a,b)=>b-a);
    let count = 0;
    if (newArr[0] === 0) return 0;
    if (newArr[newArr.length-1] >= newArr.length) return newArr.length;
    for (let i = 0;i<newArr.length;i++) {
        count++;
        if (newArr[i] <count) return count-1;
        // if (i === newArr.length) return i;
    }
}
console.log(solution([3,0,6,1,5]))