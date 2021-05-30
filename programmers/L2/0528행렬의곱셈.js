// arr1의 열의 갯수 = arr2의 행의 갯수가 같아야 한다
// 행 = arr.length  열 = arr[0].length

let arr1 = 
    [
        [2, 3, 2], 
        [4, 2, 4], 
        [3, 1, 4]
    ]

    let arr2 = 
    [
        [5, 4, 3], 
        [2, 4, 1], 
        [3, 1, 1]
    ]
// result = 
// [
//     [22, 22, 11],  i=0, j=0~arr2.length-1; k= 0~arr2[0].length - 1
//     [36, 28, 18], 
//     [29, 20, 14]
// ]

// //  ( 3, 2) * ( 2 ,5) = ( 3 ,5 )  =>
// [
//     [1,2,3,4,5]
//     [1,2,3,4,4]
//     [1,2,3,4,4]
// ]

// [ [1,2],         
//   [5,6]
//   [9,10] 
// ]
// [
//     [1,2,3,4,5] k=0,j=0,k=1,j=0 => j고정 시키고 k가 변해야
//     [3,5,3,8,9]
// ]
function solution(arr1, arr2) {
    let result = [];
    for (let i = 0;i<arr1.length;i++) {
        result.push([]);
        // j고정 + k를 하나씩 증가
        for (let j = 0;j<arr2[0].length;j++) {
            let sum = 0;
            for (let k=0;k<arr2.length;k++) {
                sum+= arr1[i][k] * arr2[k][j];    
            }
        result[i].push(sum)    
        }
    }
    return result;
}

console.log(solution(arr1,arr2))