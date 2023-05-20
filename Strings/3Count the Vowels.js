var Count_Vowels= (S) => 
{
      let count=0;
      let n=S.length;
      for(let i=0;i<n;i++){
        if(S[i]==="A" || S[i]==="a"||  S[i]==="E"|| S[i]==="e" ||
         S[i]==="I"|| S[i]==="i"|| S[i]==="o"|| S[i]==="O"||
          S[i]==="U"|| S[i]==="u"){
            count++;
          }
      }
      return count;
};
 
