var Palin_Check = (str) =>
{
  let n =str.length;
	 for(let i=0;i<n;i++){
	   if(str[i]!==str[n-i-1]){
	     return "False";
	   }
	 }
	 return "True";
}
