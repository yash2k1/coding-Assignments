const DivTest = (n) => 
{
  // 3*2
  // 6,12,24,48,96,192,384,768,|1536,3072,6144
// now the last number starts repeating 
  if(n%10===0)return 0;
    for(let i=1;i<=10;i++){
        n=n*2;
      if(n%10===0)return i;
      
      
    }
    return -1;
};