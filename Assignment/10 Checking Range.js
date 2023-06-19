const CheckRange = (A,B,C) => 
{
    if(A!==parseInt(A) &&B!==parseInt(B)&&C!==parseInt(C)){
    return "false";
    }
      return (A>B && A<C)? "true":"false";
  
   
  
};