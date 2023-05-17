function Unique_Shirts (arr,N) {
    arr.sort((a,b)=>a-b);
    let count=0;
    for(let i=0;i<N;i++){
    if((i===0 || arr[i-1]!==arr[i])&& (i===N-1 ||arr[i+1]!==arr[i])){
      count++;
    }
    }
    return count;
   }
   