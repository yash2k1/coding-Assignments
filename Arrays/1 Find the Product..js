const Find_Prod = (array, N) => 
{
 let multi=1;
 for(let i=0;i<N;i++){
   multi*= array[i];
 }
     return multi;

};
 