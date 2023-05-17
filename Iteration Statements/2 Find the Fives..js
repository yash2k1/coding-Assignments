const Find_Five = (N) => 
{
	 let count =0;
	 while(N>0){
	   if((N%10)==5)count++;
	   N=N/10;
	   N=Math.floor(N);
	   
	 }
	 return count;
};
