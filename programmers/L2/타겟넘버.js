// n개의 음이 아닌 정수가 있습니다. 이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.

// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3
// 사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
// 각 숫자는 1 이상 50 이하인 자연수입니다.
// 타겟 넘버는 1 이상 1000 이하인 자연수입니다.

const number = [1, 1, 1, 1, 1];
const target = 3;
function dfs () {
    
}
function solution(numbers, target) {
    let answer = 0;
    //index => stage라 생각하고 풀이, 가장 나중 단계의 것이 먼저 return을 만나 사라지기에 스택 구조
    dfs(0,0);

    function dfs (index,sum) {
        if (index === numbers.length) {
            if (sum === target) {
                answer++
            }
        return;
        }
        dfs(index+1,sum+numbers[index])
        dfs(index+1,sum-numbers[index])
    }
    return answer;
}

// dfs(5, sum + num[index]) => dfs(4,sum + num[index])  ,dfs(4,sum - num[index])
// dfs(5, sum - num[index]) 

// dfs(4,sum + num[index])  
// dfs(4,sum - num[index])

// index= 0
// first
// dfs(1,sum+number[0]) => dfs(2,sum + number [0]+ number[1]) => dfs(3,sum+ number[0] + number[1] + number[2]) => dfs(4,sum+number[3]) => dfs(5,number[0]+number[1]+number[2]+number[3]+number[4])
//                                                                                                                                     => dfs(5,number[0]+number[1]+number[2]+number[3]-number[4])   
//                                                         => dfs(3,sum - number[2])                           => dfs(4,sum-number[3]) => dfs(5,number[0]+number[1]+number[2]-number[3]+number[4])
//                                                                                                                                     => dfs(5,number[0]+number[1]+number[2]-number[3]-number[4])
//                      => dfs(2,sum+number[0]-number[1])   => dfs()

// second
// dfs(1,sum-number[0])