const CompletePattern = (N) => 
{
  let str="";
    for(let i=0;i<N;i++){
      for(let j=1;j<=N-i;j++){
        str+=j +" ";
      }
      str+="\n";
    }
    console.log(str);
};