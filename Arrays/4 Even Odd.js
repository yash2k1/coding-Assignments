const findEvenOdd = (N, Arr) => 
{
    let arr=[0,0];
    for(let i=0;i<N;i++){
      if(Arr[i]%2===0){
        arr[0]+=Arr[i];
      }else{
        arr[1]+=Arr[i];
      }
    }
    return arr;
};