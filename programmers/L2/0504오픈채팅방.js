// Muzi가 나간후 다시 들어올 때, Prodo 라는 닉네임으로 들어올 경우 기존에 채팅방에 남아있던 Muzi도 Prodo로 다음과 같이 변경된다.
// "Prodo님이 들어왔습니다."
// "Prodo님이 들어왔습니다."
// "Prodo님이 나갔습니다."
// "Prodo님이 들어왔습니다."

// 채팅방은 중복 닉네임을 허용하기 때문에, 현재 채팅방에는 Prodo라는 닉네임을 사용하는 사람이 두 명이 있다. 
// 이제, 채팅방에 두 번째로 들어왔던 Prodo가 Ryan으로 닉네임을 변경하면 채팅방 메시지는 다음과 같이 변경된다.

// "Prodo님이 들어왔습니다."
// "Ryan님이 들어왔습니다."
// "Prodo님이 나갔습니다."
// "Prodo님이 들어왔습니다."

// 채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 담긴 문자열 배열 record가 매개변수로 주어질 때, 
//모든 기록이 처리된 후, 최종적으로 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 형태로 return 하도록 solution 함수를 완성하라.

// record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
// result = ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
// record순회 ->uid값 - 객체로 매칭(한 아이디에 대한 여러 정보를 담아야하기에) - Enter / Leave /Change에 따라 값을 처리

//  uid1234 : {
//     'Enter' : ['Muzi','Prodo']
//     'Leave' : null,
// }
function solution(record) {
    var answer = [];
    let info = {}
    for (let value in record) {
        const [behavior,id,nickName] = value.split(' ');
        if (info[id] === undefined) {
            info[id] = {};
            
        }
        switch (behavior) {
            case 'Enter':
                info[id][behavior] 
                break;
            case 'Change':
                break;
            case 'Leave':
        }
    }
    return answer;
}