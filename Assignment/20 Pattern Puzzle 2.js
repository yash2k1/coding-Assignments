const CompletePattern = (N) => 
{
      let str="";
  for(let i=0;i<N;i++){
    for(let k=0;k<N-i-1;k++){
      str+="?";
    }
    for(let j=1;j<=2*i+1;j++){
      str+="X";
    }
     for(let k=0;k<N-i-1;k++){
      str+="?";
    }
    str+="\n";
  }
  console.log(str);
    
};