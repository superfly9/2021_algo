function solution1(s) {
    let answer = s.length;

    for(let len=1;len<=s.length/2;len++){
        let str="";
        let idx=0;
        let tmp=s.substring(0,len);
        let cnt=1;
        for(idx=len;idx<=s.length;idx+=len){
            if(tmp===s.substring(idx,idx+len)){
                cnt++;
            }
            else{
                if(cnt===1) str+=tmp;
                else str+=cnt+tmp;
                cnt=1;
                tmp=s.substring(idx,idx+len);
            }
        }
        console.log('count:',cnt,'string:',str,'length:',len)
        if(cnt===1) str+=tmp;
        else str+=cnt+tmp;
        console.log('final Result:',str)
        answer=Math.min(answer,str.length);
    }
    return answer;
}