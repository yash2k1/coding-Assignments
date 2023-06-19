const CheckArm = (N) => 
{
  let num=N;
  let sum=0;
 while(N>0){
   let temp=N%10;
   N=parseInt(N/10);
     sum+=temp**3;
 }
 return  (num===sum)?"Yes":"No";
};