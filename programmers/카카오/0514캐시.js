// 캐시 크기(cacheSize)와 도시이름 배열(cities)을 입력받는다.
// cacheSize는 정수이며, 범위는 0 ≦ cacheSize ≦ 30 이다.

// 입력된 도시이름 배열을 순서대로 처리할 때, "총 실행시간"을 출력한다.

// 캐시(페이지) 교체 알고리즘은 LRU(Least Recently Used)를 사용한다.
// cache hit일 경우 실행시간은 1이다. ( ram -> cpu )
// cache miss일 경우 실행시간은 5이다.( ssd/하드 -> cpu)

// sol1  해당 데이타가 언제 사용되었는지를 알 수 있게 하는 부분 구현? -> 제일 오랫동안 참조되지 않은 부분 제거
// sol2  해당 데이터 사용하려 할때, (Queue구조)이미 쓴거면 맨위로 아니라면 가장 앞쪽 데이터 삭제 후 새로운 데이터 추가



// 캐시크기(cacheSize)	도시이름(cities)	실행시간
// 3	["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]	21
// 2	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	60
// 5	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", 
//       "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	52
// 2	["Jeju", "Pangyo", "NewYork", "newyork"]	16
// 0	["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	25

// 3	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	50

// Jeju -> Pangyo -> Seoul  -> Jeju.unshift() + NewYork.push() 
//  5       5           5                   
// 5 5 5 5 5 1 1 1 1 1 
// 같은 원소가 있다면 해당 원소 삭제후, 맨 뒤에 push + count 증가
// 없다면 가장 앞에 것 제거(shift) + 새로운 원소를 배열의 가장 뒤로 push
// cacheSize = 0 인 것도 처리해야
//Test 7,17 실패
function solution (cacheSize,cities) {
    if (cacheSize === 0) return cities.length * 5
    let timeCount = 0;
    // 도시들을 담을 배열 생성
    let cachedArr = new Array(cacheSize).fill('')
    cities.map(v=>v.toUpperCase()).forEach(v=>{
        // 기존 배열에 없는 원소라면
        const targetIndex  = cachedArr.findIndex(value => value === v);
        
        if(targetIndex === -1) {
            cachedArr.shift();
            cachedArr.push(v)
            timeCount+=5;
        } else {
            //이미 존재하는 원소라면
            let deleted = cachedArr.splice(targetIndex,1)[0];
            cachedArr.push(deleted)
            timeCount++;
        }
    })
    return timeCount;
}

//캐시공간이 남았을떄 hit 처리?

let s1 = ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"];
let s2 = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco","Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]
let s3 = ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"];
let s4  =["Jeju", "Pangyo", "NewYork", "newyork"]
console.log(solution(0,s3));