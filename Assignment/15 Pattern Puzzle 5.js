
const CompletePattern = (N) => 
{
    let str="";
  for(let i=1;i<=N;i++){
    for(let j=1;j<=i;j++){
      if(i%2===j%2) str+="1 ";
      else str+="0 ";
    }
    str+="\n";
  }
  console.log(str);
    
};
