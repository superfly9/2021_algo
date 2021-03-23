//첫번째 글자 바꾸기 
//start : A => 두 가지 고려 : 거꾸로 or 그대로  / A에서 오름차순으로 탐색 or Z로 가서 내림차순 탐색
// 참고  : ASCII CODE  A = 65, Z = 90;
const name = 'JEROEN'; // return 56
// 오름차순 계산시(A기준으로 ASCII차이 계산) 9 + 4 + 17 +14 + 4 + 13    + 5 (name.length -1 )= 61 + 5 = 66
// 17대신   Z - R =8   + 1(Z=>A 이동) = 9를 사용
// 14대신  Z - O = 11  + 1  = 12 사용  그러면 56된다.

function solution (name) {
  //
  let init,
      index=0,
      answer = 0,
      start = 'A'.charCodeAt(0),
      end = 'Z'.charCodeAt(0),
      reverse = false;
      console.log('start:',start,'end:',end)
  for (let i=0;i<name.length;i++) {
    init+='A';
  }
  //init === name일때까지 반복
  while (init!==name) {
    // name과 다른 문자 하나 변경
    let left = 0,
      right = index+1;
      
    if (init[index]!==name[index]) {
      const fromA = name[index].charCodeAt(0) - start;
      const fromZ = end - name[index].charCodeAt(0)
      answer+= fromA < fromZ ? fromA : fromZ+1;
      init = init.substring(0,index) + name[index] + init.substring(index+1);
    }
  
  //변경된 문자열이 답과 다를 때, 그 다음으로 변경 시킬 문자에 도달하기 위한 칸 수를 계산
  if (init!==name) {
    if (!reverse) {
      for (let i = index+1;i < name.length;i++) {
        left++;
        if (name[i]!=='A') {
          break;
        }
      }
      for (let j = name.length-1;j>index;j--) {
        right++;
        if(name[j]!=='A') {
          break;
        }
      }
    }
    // AAABCD
    //AZAAAZ=5

    //오른쪽으로 가는 칸 수가 더 작다면 reverse하게 가도록 결정
    if (left > right) {
      reverse = true;
    }
    if (reverse && index===0)  {
        index = name.length - 1 ;
        // 0번째 글자를 바꾸고, 거꾸로 거슬러 간다면 index를 문자열의 맨 마지막으로 설정
    } else {
      reverse ? index-- : index++;
    }
    answer++;
  }
  //인덱스를 바꾸었기에 좌/우로 이동하는 값
  }
  return answer;
}
solution('ABC')