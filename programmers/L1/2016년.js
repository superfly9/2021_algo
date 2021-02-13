const date = new Date(2021,1,10); //2021-02-09T15:00:00.000Z
console.log(date)
// date.toString() =>Wed Feb 10 2021 00:00:00 GMT+0900 (대한민국 표준시)
console.log(date.toString())
console.log(date.toString().slice(0,3).toUpperCase())


function getDayName(a,b){
    var date = new Date(2016, (a - 1), b);
      return date.toString().slice(0, 3).toUpperCase();
  }
  
function solution(a, b) {
    const day_select = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const month = a-1;
    const day = b+4;
    let totalDay= 0;
    const month_list = [31,29,31,30,31,30,31,31,30,31,30,31];
    for (let i = 0; i < month;i++) {
        totalDay+=month_list[i];
    }
    totalDay+=day;
    return day_select[totalDay%7];
}