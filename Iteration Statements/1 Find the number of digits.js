const Find_Digits = (N) => 
{
  let count=0;
  while(N>=1){
   N= N/10;
    // N=Math.floor(N);
    count++;
  }
	return count; 
};