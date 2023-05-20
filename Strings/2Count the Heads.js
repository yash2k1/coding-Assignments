
var Count_Occ = (s) => 
{ 
  let n=s.length;
  s=s.split("").sort().join("");//sorting a string 
  let output="";
  for (let i=0;i<n-1;i++){
    let count=1;
    while(i<n-1 && s[i]===s[i+1]){
      count++;
      i++;
    }
    if(count>1){
    output+=s[i]+count; 
   
   
    }
    
  }
  return output;
};
 