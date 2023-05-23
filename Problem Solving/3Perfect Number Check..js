var Perfect_Check = (N) => 
{
  let sum=0;
  if(N===1)return "YES";
  for(let i=1;i<N;i++){
    if(N%i===0) sum +=i;
    
  }
  if(sum==N)return "YES";
  return "NO";
        
};
 