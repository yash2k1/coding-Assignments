const Number_Sum = (N) => 
{
	let sum =0;
	while(N>0){
	  sum+=N%10;
	  N=N/10;
	  N=parseInt(N);
	}
	return sum;
};