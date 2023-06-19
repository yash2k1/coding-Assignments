const CompletePattern = (N) => 
{
let str="";
 let count=1;
for (let i=1;i<=N;i++){
  
  for(let j=1;j<=i;j++){
    str+=count%2 +" ";
    count++;
  }
  str+='\n';
}
console.log(str);
};
