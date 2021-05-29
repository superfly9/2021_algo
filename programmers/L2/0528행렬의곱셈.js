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
// result = [[22, 22, 11], [36, 28, 18], [29, 20, 14]]


function solution(arr1, arr2) {
    let result = [];
    for (let i = 0;i<arr1.length;i++) {
        result.push([]);
        let sum = 0;
        for (let j = 0;j<arr2[i].length;j++) {
            sum+= arr1[i][j] * arr2[j][i];
            console.log('i:',i,'j:',j)
        }
        result[i].push(sum)
    }
    return result;
}

console.log(solution(arr1,arr2))