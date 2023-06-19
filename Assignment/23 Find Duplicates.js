const DuplicateElements = (N,arr) => 
{
    arr.sort((a, b)=>{return a - b});
    for(let i=0;i<N-1;i++){
      if(arr[i]==arr[i+1]) console.log(arr[i]);
    }
    
};
