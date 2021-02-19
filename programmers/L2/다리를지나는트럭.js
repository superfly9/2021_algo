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