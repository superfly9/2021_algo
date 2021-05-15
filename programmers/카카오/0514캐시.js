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
function solution (cacheSize,cities) {
    //Test 7,17 실패 => cacheSize =  0일때 처리가 안되서 그랬던 것, 그래서 33Line추가했더니 통과
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


//sol2)
function solution(cacheSize, cities) {
    const MISS = 5, HIT = 1;

    if (cacheSize === 0) return MISS * cities.length;

    let answer = 0,
        cache = [];

    cities.forEach(city => {
        city = city.toUpperCase();

        let idx = cache.indexOf(city);

        if (idx > -1) {
            cache.splice(idx, 1);
            answer += HIT;
        } else {
            if (cache.length >= cacheSize) cache.shift();
            answer += MISS;
        }

        cache.push(city);
    });

    return answer;
}

// 클래스 쓴 것 보고 신기해서..

3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
function solution(cacheSize, cities) {
    let downCities = cities.map(city => city.toLowerCase());

    class Cache {
        constructor (size) {
            this.cache = {};
            this.cacheLength = 0;
            this.cursor = 0;
            this.olds = [];
            this.cacheSize = size;
        }

        push (value) {
            if (this.cacheSize === 0) {
                return 5;
            }

            if (this.cache[value] === undefined) {
                this.cache[value] = true;

                if (this.cacheLength === this.cacheSize) {
                    let toRemove = this.olds.shift();

                    this.cache[toRemove] = undefined;

                } else {
                    this.cacheLength++;
                }

                this.olds.push(value);

                return 5;

            } else {
                this.olds = this.olds.filter(old => old !== value);

                this.olds.push(value);

                return 1;
            }
        }
    }

    let cache = new Cache(cacheSize);

    let result = downCities.reduce((sum, city) => {
        return sum + cache.push(city);
    }, 0);

    return result;
}
