// 설명:
// 트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 
// 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 
// 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.

// 주어진 것:
// solution 함수의 매개변수로 다리 길이 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck_weights가 주어집니다. 
// 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.


function solution(bridge_length, weight, truck_weights) {
    //헷갈렸던 것 - 다리 건너는 시간 계산시 트럭 몸통의 길이를 포함해서 건너야 하는 것 아닌가?
    // 즉, 건너는 시간 =  다리 진입시간 +  (다리길이 + 트럭 길이) / 초당움직이는 시간이라고 생각했었음
    // 그런 조건이 없기에 여기서는 트럭을 점으로 생각하고 계산
    let time = 0, // 걸리는 시간
        pending = {
            weight : 0, // 다리 위의 총 무게
            list :[]  //  {time , weight} 트럭 1대가 다리 건너는 시점 / 무게
        }
    // 트럭 1대가 다리 건너는 시간 = bridge_length / 1(트럭이 초당 움직이는 시간) = bridge_length
    while (true) {
        
        if (pending.list.length===0 && truck_weights.length===0) {
            return time;
        }
        time++;
        if (pending.list.length!==0 && pending.list[0].time + bridge_length === time) {
            //다리 건넜으면 list에서 제거
            pending.weight -= pending.list.shift().weight;
        }
        
        if (truck_weights.length!== 0 && pending.weight + truck_weights[0]<=weight) {
            let newWeight = truck_weights.shift();
            pending.weight+= newWeight;
            pending.list.push({
                weight: newWeight,
                time // 다리 진입 시점
            });
        }
    }
}

// bl =2 , weight = 10, [7,4,5,6]
/*
    1 ,  7 
    2 ,  7 + 4 > weigth => bl[0]만,  weight.shift()
    3 => 4 
    4 => 4+ 5 < weigth => 둘 다
    5 => 5 +6 > weight / 5만 =>  weight.shift() + weight[0] = 5;
    6=>  weight.shift() = 5  +   weight = []  => weight.length = 2일때 시간 + 2 = 모두 건너는 데 걸리는 시간
    7=> 
    8=> end
*/

// 다른 사람거
function Node(firstData) {
    this.data = firstData;
    this.prev = null;
    this.next = null;
}

// first out last in
function Queue() {
    this.first = null;
    this.last = null;

    this.enqueue = function(node) {
        if (this.first === null) {
            this.first = node;
            this.first.next = node;
            this.last = node;
            this.last.prev = node;
        } else if (this.first === this.last) {
            this.first.prev = null;
            this.first.next = node;
            this.last = node;
            this.last.prev = this.first;
            this.last.next = null;
        } else if (this.last !== null) {
            var temp = this.last;
            temp.next = node;
            this.last = node;
            this.last.prev = temp;
        }
    }

    this.dequeue = function() {
        var returnValue = this.first.data;

        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else if (this.first !== this.last) {
            this.first = this.first.next;
        }

        return returnValue;
    }

    this.length = function() {
        if (this.first === null)
            return 0;
        else if (this.first === this.last) {
            return 1;
        } else if (this.first !== this.last) {
            var count = 1, node = this.first;

            while (node.next !== null) {
                node = node.next;
                count++;
            }

            return count;
        }
    }

    this.sum = function() {
        if (this.first === null)
            return 0;
        else if (this.first === this.last) {
            return this.first.data;
        } else if (this.first !== this.last) {
            var count = this.first.data !== -1 ? this.first.data : 0, // 이 문제에 맞게 추가함
                node = this.first;

            while (node.next !== null) {
                node = node.next;
                if (node.data !== -1) // 이 문제에 맞게 추가한 조건문
                    count += node.data;
            }

            return count;
        }
    }
}

function solution(bridge_length, weight, truck_weights) {
    var answer = 0, truck_length = truck_weights.length, 
        q = new Queue(), end = 0;

    var i = 0;
    for (; i < bridge_length; i++)
        q.enqueue(new Node(-1));

    while (end !== truck_length) {
        // move truck
        answer++;
        end += q.dequeue() !== -1 ? 1 : 0;

        // add truck
        q.enqueue(new Node(q.sum() + truck_weights[0] <= weight ? truck_weights.shift() : -1));
    }

    return answer;
}

// sol3
function solution(bridge_length, weight, truck_weights) {
  // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
  let time = 0, qu = [[0, 0]], weightOnBridge = 0;

  // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
  while (qu.length > 0 || truck_weights.length > 0) {
    // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
    //    다리 위 트럭 무게 합에서 빼준다.
    if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

    if (weightOnBridge + truck_weights[0] <= weight) {
      // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면 
      //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
      weightOnBridge += truck_weights[0];
      qu.push([truck_weights.shift(), time + bridge_length]);
    } else {
      // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
      //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
      //    참고: if 밖에서 1 더하기 때문에 -1 해줌
      if (qu[0]) time = qu[0][1] - 1;
    }
    // 시간 업데이트 해준다.
    time++;
  }
  return time;
}
