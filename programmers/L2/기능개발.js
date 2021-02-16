const progresses = [93,30,55];
const speeds = [1,30,5]

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

console.log(solution(progresses,speeds))



function solution2(progresses, speeds) {
    const answer = [];

    while(speeds.length > 0) {
        // 개발
        for(let i in speeds) {
            if(progresses[i] < 100) {
                progresses[i] += speeds[i];
            }
        }

        // 배포
        let deploy_count = 0;
        while(progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            deploy_count++;
        }
        if(deploy_count > 0) {
            answer.push(deploy_count);
        }
    }

    return answer;
}