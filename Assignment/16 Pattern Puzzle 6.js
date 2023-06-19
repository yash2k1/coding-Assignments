const CompletePattern = (N) => 
{
    let str="";
    N=N.charCodeAt(0);
     N=N-63;   //if N==D then ASCII value of D is 68 so we want to run 
    // the loop 4 times starting from zero to 4 so we suntract N with 
    // 63 so we got 4 .
    console.log(N)
  for(let i=0;i<N;i++){
    for(let j=0;j<i;j++){
      str+=String.fromCharCode(j+65) +" " ;
    }
    str+="\n";
  }
  console.log(str);
    
};