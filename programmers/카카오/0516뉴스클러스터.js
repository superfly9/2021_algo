// str1	str2	answer
// FRANCE	french	16384
// handshake	shake hands	65536
// aa1+aa2	AAAA12	43690
// E=M*C^2	e=m*c^2	65536

// 1:15 - 2:00
// 1. 두 글자씩, 
// "FRANCE"와 "FRENCH"가 주어졌을 때, 이를 두 글자씩 끊어서 다중집합을 만들 수 있다. 
//각각 {FR, RA, AN, NC, CE}, {FR, RE, EN, NC, CH}가 되며, 
//교집합은 {FR, NC}, 합집합은 {FR, RA, AN, NC, CE, RE, EN, CH}가 되므로, 두 문자열 사이의 자카드 유사도 J("FRANCE", "FRENCH") = 2/8 = 0.25가 된다.
let str1 = "E=M*C^2";
let str2 = "e=m*c^2"
let s1 = 'aaaabbac'
let s2 = 'aaBBacca';
function solution(str1, str2) {
    //영어에 해당하는 문자를 2개씩 잘라 만든 배열(집합)
    let firstSet = makingStr(str1),
        secondSet = makingStr(str2);
    // 교집합, 합집합 => totalLength - 교집합 갯수 = 합집합갯수
    if (firstSet.length ===0 && secondSet.length === 0) return 65536;
    let totalLength = firstSet.length + secondSet.length;
    console.log('first:',firstSet,'second:',secondSet)
    let [commonSet,commonSetLength] = getCommonSet(firstSet,secondSet),
    zacard = (commonSetLength / (totalLength -commonSetLength)),
    result = Math.floor(zacard* 65536)
    console.log('교집합 갯수:',commonSetLength,'교집합:',commonSet)
    return result
}
//arr2가 arr1에서 AA AA AA 가지고 있다면 count = 1이어야하는데 count =3 으로 세지는 상황, (중복의 발생)
const getCommonSet =  (arr1,arr2)=>{
    let count = 0;
    let result = []; //교집합 담을 배열
    arr2.forEach(v=>{
        let index = arr1.indexOf(v)
        if(index!== -1) {
            result.push(arr1.splice(index,1)[0])
            count++
        }
    })
    return [result,count];
}

const makingStr = (str)=>{
    //각각의 글자가 ascii code 충족하면 추가하기
    // upperCase : 65-90 , smallCase : 97 - 122 , upperCase + 32 = smallCase
    let strArr = [];
    for (let i=0;i<str.length-1;i++) {
        let current = str[i].toUpperCase()
        let next =  str[i+1].toUpperCase()
        let checkEng =(target)=>{
            return target.charCodeAt()>=65 && target.charCodeAt()<=90;
        } 
        let flag = checkEng(current) && checkEng(next)
        if (flag) {
            strArr.push(`${current}${next}`)
        }
    }
    return strArr
};

// console.log(makingStr('E=M*C^2'));
console.log(solution(s1,s2))