const CompletePattern = (N) => 
{
    let str="";
  for(let i=1;i<=N;i++){
    for(let j=1;j<=i;j++){
      str+="X";
    }
    str+="\n";
  }
  console.log(str);
    
};