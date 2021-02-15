function solution(progresses, speeds) {
    let end_days = progresses.map((v,i)=> Math.ceil((100-v)/speeds[i]));
    let result = [0];
    let max_day = end_days[0];
    // [93,30,55]=> end_days :[7,3,9] 
    for (let i=0,j=0;i<progresses.length;i++) {
        if (max_day>=end_days[i]) {
            // max : 7, end_days[i] = 6
            result[j] +=1; // result =[0]이어야 함 []이면 undefined+1 = NaN이 됨,
        } else {
            max_day = end_days[i];
            result[++j] = 1;
        }
    }
    return result;
}
const progresses = [93,30,55];
const speeds = [1,30,5]
console.log(solution(progresses,speeds))