let count=0;
var Count_Vowels= (S) => 
{
   for(let s of S){
     if(s==="A"||s==="E"||s==="I"||s==="O"||s==="U"||s==="a"||s==="e"||s==="i"||s==="o"||s==="u"){
       count++;
     }
   } 
   return count;
};
var Count_Consonants= (S) => 
{
    let n=S.length;
  return n-count;  
};
 
