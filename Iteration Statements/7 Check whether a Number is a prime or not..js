const Prime_Check = (N) => 
{
  if(N==1) return "NO";
  else if(N==2) return "YES";
  
	 for(let i=2;i<=(N/2);i++){
	   if(N%i===0){
	     return "NO";
	   }
	 }
	 return "YES";
// 	  if(N==1) return "NO";
// 	let c=0;
// 	 for(let i=2;i<N;i++){
// 	   if(N%i===0){
// 	     c++;
// 	     break;
// 	   }
// 	 }
// 	 if(c===1){
// 	   return"NO";
// 	 }else{
// 	   return"YES";
// 	 }
};

