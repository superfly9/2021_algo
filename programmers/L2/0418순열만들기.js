// const permutation = (numbers,index,r)=>{
//     // r :  전체 숫자에서 몇개뽑을지 결정하는 값
//     // index: number배열의 index를 의미
    
// }

// console.log(permutation([1,2,3]))


const per =() =>{
    
        const arr = ['a','b','c','d'];
        permutation(arr, 0, 3);
}

const permutation = (arr, depth, r)=> { 
        if (depth == r) {
            for (let i = 0; i < r; i++) {
                console.log('Complete:',arr,'arr[i]:',arr[i])
            }
            return;
        }

        for (let i = depth; i < arr.length; i++) {
            const tmp = arr[depth]; //  
            arr[depth] = arr[i];  // 
            arr[i] = tmp; 
            // Point : i = depth 인 것에 대한 모든 재귀 실행이 끝나야 i = depth + 1의 재귀가 실행된다
            // [a,b,c,d],  0 ,3  => (*)abcd 대해 permutation 재귀 실행, 이거 다 끝나면 bacd 대한 permutation 재귀 실행 cbad, dbca도 마찬가지
            // (*)abcd => depth =1,r =3 : abcd => depth=2 => abcd=>depth=3 
            // [a,b,c,d] , 1 ,3  => arr[depth] = b, 
            permutation(arr, depth + 1, r);  

            //하나의 depth가 마무리 되면 스왑한거 다시 되돌리기
            arr[i] = arr[depth];
            arr[depth] = tmp;
        }
    }
    console.log(per())


    //refactoring )
    const swap=(arr,  i,  j) => { 
        const temp = arr[i]; 
        arr[i] = arr[j]; 
        arr[j] = temp; 
    } 
    const perm  = (arr, depth,  n,  k) =>{ 
        if (depth == k) { // 한번 depth 가 k로 도달하면 사이클이 돌았음. 출력함. 
            for (let i = 0; i < r; i++) {
                console.log('Complete:',arr,'arr[i]:',arr[i])
            }
             return; 
        } for ( i = depth; i < n; i++) { 
            swap(arr, i, depth); 
            perm(arr, depth + 1, n, k); 
            swap(arr, i, depth); 
        } 
    } // 

//출처: https://gorakgarak.tistory.com/522 