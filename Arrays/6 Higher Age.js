const highAge = (N, Arr) => 
{
    let arr=[];
    for(let i=0;i<N ;i++){
      if(Arr[i]>=18){
        arr.push(Arr[i]);
      }
    }
    return arr;
};