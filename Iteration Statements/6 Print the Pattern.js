const Print_pattern = (N) => 
{
//    way 1

    let str ="";
  for(let i = 1; i <= N; i++){
    for(let j = 1; j <= i; j++){
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
   
  //    way 2

    // for(let i=1; i<=N; i++){
    //   console.log("*".repeat(i));
    // }
};