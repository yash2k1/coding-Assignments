var Reverse_Number = (N) => 
{
  let output="";
  while(N>0){
    let temp= N%10;
    output+=temp;
    N=Math.floor(N/10);
  }
  return Number(output);

};
 