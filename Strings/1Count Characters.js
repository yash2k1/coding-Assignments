
const countCharacters = (S) => 
{
  let n=S.length;
    let B=[0,0];
    for(let i=0;i<n;i++){
      if(S[i]==="A" ){
        B[0]++;
      }else if (S[i]==="D" ){
        B[1]++;
      }
    }
    return B;
};