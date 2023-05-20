var Game_Winner = (S) => 
{
  let Aditya=0,Danish=0;
  let n=S.length;
  for(let i=0;i<n;i++){
    if(S[i]==="A"){
      Aditya++;
    }else {
       Danish++;
    }
  }
  if(Danish>Aditya){
    return "Danish";
  }else if(Aditya>Danish){
    return "Aditya";
  }else{
    return "Draw";
  }
}
 