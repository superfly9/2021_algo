//  [1,7] => 7, 17 , 71 : return 3
// [0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다. : return 2 
// 11과 011은 같은 숫자로 취급합니다.
// 같은 카드를 2번 동시에 쓸 수는 X

// 1. 가능한 숫자의 조합들을 만들고, 2. 바로 소수인지 판단, yes -> count ++ , no : 그 다음 실행
function solution(nums) {
    const numsArr = nums.split('');
    
    return answer;
}

// 모든 인덱스에 대해 depth~끝까지 순환, depth + 1 = k이면 순환종료
// k : 뽑는 갯수 , depth : 바꿔치기 대상 원소의 인덱스
const permutation = (arr,depth,k)=>{
    
    const swap = (arr,a,b)=> [arr[a],arr[b]] = [arr[b],arr[a]]; // 원소 바꿔주는 함수
    //재귀 종료 조건
    if (depth === k) {
        let result = [];
        for (let j=0;j<k;j++) {
            console.log('depth:',depth,'j:',j,'result:',arr[j])
            result.push(arr[j]);
        }
        return result;
    }
    for (let i = depth;i<arr.length;i++) {
        swap(arr,depth,i)
        permutation(arr,depth+1,i)
        //순서 바꿔줬던 원소를 다시 바꿔줌 (원래의 배열로 재귀 함수를 실행해야 하기에)
        // dep = 0,i =0 => per(1,0)[0번째,1번째 스왑 + 재귀실행]=> dep=1, i =1 => per(2,1)
        swap(arr,depth,i)
    }
}
console.log(permutation([1,2,3]));

const isPrime = (number)=>{
    if (number <=1) return false;
    if (n%2===0) return n===2 ? true : false;
    for (let i = 3 ; i < Math.sqrt(number);i+=2) {
        if (n%2===0) return false
    }
    return true;
}