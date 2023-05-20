function arrayMin(arr) {
    let min=Number.MAX_SAFE_INTEGER;
    let n=arr.length;
    for(let i=0;i<n;i++){
      // min=min(min,arr[i]);
      min=(min<arr[i])? min: arr[i];
    }
    return min;
   
    
  }
  
  function arrayMax(arr) {
   
    let max=Number.MIN_SAFE_INTEGER;
    let n=arr.length;
    for(let i=0;i<n;i++){
      // max=min(min,arr[i]);
       max=(max>arr[i])? max: arr[i];
    }
    return max;
   
    
  }
  