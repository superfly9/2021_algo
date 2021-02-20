// 모든 스킬을 다 배우지 않아도 된다
// skii.length = 1 ~26 , 빈 배열을 오지 않는다


// skill	skill_trees	                        return
// "CBD"	["BACDE", "CBADF", "AECB", "BDA"]	   2
// 처음 값 인덱스 = -1 => count변화x
// 인덱스 오름차순 아닐시 ealry return
// ~6:40                
function solution (skill,skill_trees) {
    let count = 0;
    skill_trees.forEach(value=>{
        let skillArr = skill.split(''); // [C,B,D]
        //포함되는 원소가 skillArr의 첫번째 값인지 확인, 그렇다면 skillArr.shift()로 확인된 값 제거
        //특정 문자가 포함되었을 때 skillArr에서 인덱스값이 0이 아니라면 count 1 감소
        count++; //skill_trees의 길이만큼 count증가시키고, 문제 조건 만족안하는 경우만 count -=1 해주기 
        //value : BACDE
        for (let i of value) {
            if (skillArr.includes(i)) {
                //skillArr의 맨 앞에서 제거
                if (skillArr.indexOf(i) === 0) skillArr.shift();
                else {
                    count--;
                    break;
                }
            } 
        }//BACDE순회 
    })
    return count;
}
const skill = 'CBD';
const skill_trees =["BACDE", "CBADF", "AECB", "BDA"]
console.log(solution(skill,skill_trees))