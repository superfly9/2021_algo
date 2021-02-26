 const numbers = 	[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
 //                 L  R   L  L  R  R  L  L  L  R  R
const hand = 'left';

function solution(numbers,hand) {
    const result = '';
    const position = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    let curLeft = '*',curRight = '#';
    for (let num of numbers) {
        if (num%3===1) {
            // 현재 결과  + 현재 손이 어디있는지 파악해야
            result += 'L';
            curLeft = num;
        }
        else if (num !==0 && num % 3 === 0){
            result += 'R';
            curRight = num;
        }
        // 중간 키라인
        else{
            const [coordsX,coordsY] = position[num];
            const [leftX,leftY] = position[curLeft];
            const [rightX,rightY] =position[curRight] 
            const leftDistance = Math.abs(coordsX - leftX) +  Math.abs(coordsY-leftY);
            const rightDistance = Math.abs(coordsX - rightX) +  Math.abs(coordsY-rightY);
            if (leftDistance === rightDistance) {
                result+= hand === 'right' ? 'R' : 'L';
            } else if (leftDistance < rightDistance) {
                result +=  'L'
            } else {
                result +=  'R'
            }
            result[result.length-1] === 'L' ? curLeft = num : curRight = num;
        }
    }
    return result;
}

console.log(solution(numbers,hand))


// sol2
const solution2 = (numbers, hand) => {
  const answer = [];

  let leftHandPosition = '*';
  let rightHandPosition = '#';

  numbers.forEach(number => {   
    if (number === 1 || number === 4 || number === 7) {
      answer.push('L');
      leftHandPosition = number;
      return;
    }

    if (number === 3 || number === 6 || number === 9) {
      answer.push('R');
      rightHandPosition = number;
      return;
    }

    const leftHandDistance = getDistance(leftHandPosition, number);
    const rightHandDistance = getDistance(rightHandPosition, number);

    if (leftHandDistance === rightHandDistance) {
      if (hand === "right") {
        answer.push('R');
        rightHandPosition = number;
        return;
      }

      if (hand === 'left') {
        answer.push('L');
        leftHandPosition = number;
        return;
      }
    }

    if (leftHandDistance > rightHandDistance) {
      answer.push('R');
      rightHandPosition = number;
    } 

    if (leftHandDistance < rightHandDistance) {
      answer.push('L');
      leftHandPosition = number;
    }
  });

  return answer.join("");
};

const getDistance = (locatedNumber, target) => {
  const keyPad = {
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2],
    '*': [3, 0], 0: [3, 1], '#': [3, 2],
  }

  const nowPosition = keyPad[locatedNumber];
  const targetPosition = keyPad[target];

  return Math.abs(targetPosition[0] - nowPosition[0]) + Math.abs(targetPosition[1] - nowPosition[1]);
};