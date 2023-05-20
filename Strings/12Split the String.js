var Split_the_string = (S) => 
{
  let arr=[];
  let n=S.length;
  let str="";
  for(let i=0;i<=n;i++){
    if(S[i]===" " || i===n){
      arr.push(str);
      str="";
    }else{
       str+=S[i]; 
    }
  
  }
  return arr;
        
};
 