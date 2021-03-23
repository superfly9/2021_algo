// 10진법	124 나라	10진법	124 나라
// 1	1	6	14
// 2	2	7	21
// 3	4	8	22
// 4	11	9	24
// 5	12	10	41

// 11   42 
// 12   44
// 13   111
// 14   112
// 15   114
// 16   121   , 17 122 , 18 124
// 19   141   , 20 142   21 144
// 21   211

// 숫자의 순서대로 1 / 2 / 4 를 붙여주면 끝
// Math.pow(3,10진법 자릿수) === 해당 자릿수에서 사용가능한 모든 case들

// 5 % 3  =  1   / 2
// 13 %3 =   4  / 1  

function solution(n) {
    let answer = '';
    
    while (n !==0) {
        switch(n%3) {
            case '0':
                answer = '4' + answer;
                n = Math.floor(n/3);
                break;
            case '1':
                answer = '1' + answer;
                n = Math.floor(n/3);
                break;
            case '2':
                answer = '2' + answer;
                n = Math.floor(n/3);
                break;
        }
    }
}