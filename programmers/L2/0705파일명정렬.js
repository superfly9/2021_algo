// 무지는 단순한 문자 코드 순이 아닌, 파일명에 포함된 숫자를 반영한 정렬 기능을 저장소 관리 프로그램에 구현하기로 했다.

// 소스 파일 저장소에 저장된 파일명은 100 글자 이내로, 영문 대소문자, 숫자, 공백(" "), 마침표("."), 빼기 부호("-")만으로 이루어져 있다.
// 파일명은 영문자로 시작하며, 숫자를 하나 이상 포함하고 있다.

// 파일명은 크게 HEAD, NUMBER, TAIL의 세 부분으로 구성된다.

// HEAD는 숫자가 아닌 문자로 이루어져 있으며, 최소한 한 글자 이상이다.
// NUMBER는 한 글자에서 최대 다섯 글자 사이의 연속된 숫자로 이루어져 있으며, 앞쪽에 0이 올 수 있다. 0부터 99999 사이의 숫자로,
//00000이나 0101 등도 가능하다.
// TAIL은 그 나머지 부분으로, 여기에는 숫자가 다시 나타날 수도 있으며, 아무 글자도 없을 수 있다.

// 파일명	            HEAD	NUMBER	TAIL
// foo9.txt	           foo	    9	 .txt
// foo010bar020.zip	    foo	    010	  bar020.zip
// F-15	                F-	    15	 (빈 문자열)
// 파일명을 세 부분으로 나눈 후, 다음 기준에 따라 파일명을 정렬한다.

// 파일명은 우선 HEAD 부분을 기준으로 사전 순으로 정렬한다. 이때, 문자열 비교 시 대소문자 구분을 하지 않는다. MUZI와 muzi, MuZi는 정렬 시에 같은 순서로 취급된다.
// 파일명의 HEAD 부분이 대소문자 차이 외에는 같을 경우, NUMBER의 숫자 순으로 정렬한다. 9 < 10 < 0011 < 012 < 13 < 014 순으로 정렬된다. 숫자 앞의 0은 무시되며, 012와 12는 정렬 시에 같은 같은 값으로 처리된다.
// 두 파일의 HEAD 부분과, NUMBER의 숫자도 같을 경우, 원래 입력에 주어진 순서를 유지한다. MUZI01.zip과 muzi1.png가 입력으로 들어오면, 정렬 후에도 입력 시 주어진 두 파일의 순서가 바뀌어서는 안 된다.

// 입력: ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]
// 출력: ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]

// 1순위 - head의 알파벳 순서 , 2순위 - 숫자
function solution(files) {
  let result = {},
    answer = [];
  //1. head , number, tail로 일단 나누기(regex.test사용) => 이것에 대해 순회하며 순서를 정해여
  for (let i = 0; i < files.length; i++) {
    //head를 key로 해서 result 변형하기
    // numberIndex  + numberLength = tail의 startIndex
    let number = files[i].match(/\d+/)[0],
      numberStart = files[i].indexOf(number),
      head = files[i].substring(0, numberStart),
      tail = files[i].substring(numberStart + number.length);
    // console.log("number:", number, "numberStart", numberStart);
    // console.log("head:", head, "tail:", tail);
    //1. number - tail을 짝짓기 위해 일단 객체 key - value로 만들기
    //2. 크기 순대로 출력 img :  { 12 : .png , 10 : .png , 02 : .png ...} => Object.keys.sort()로 key값 따라 sorting 후 다시 객체의 값 가져오기
    let category = head.toLowerCase();
    result[category] = {
      ...result[category],
      [number]: tail,
    };
  }
  // 입력: ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]
  // 출력: ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
  let keys = Object.keys(result).sort(); //img
  console.log("keys:", keys, "result:", result);
  for (let category of keys) {
    // sorting한 것을 출력
    // result[category] = { 5:freedom , 20 : awesome,14 : tomcat }
    //  Number('020') === 20인데 얘네를 순서대로 어떻게 보여주냐? 그 전의 index기억하고 있어야 하나?
    result[category];
    console.log("key:", Object.keys(result[category]).sort());
  }
}

let files = [
  "img12.png",
  "img10.png",
  "img02.png",
  "img1.png",
  "IMG01.GIF",
  "img2.JPG",
];

let files2 = [
  "F-5 Freedom Fighter",
  "B-50 Superfortress",
  "A-10 Thunderbolt II",
  "F-14 Tomcat",
];
solution(files);
solution(files2);
