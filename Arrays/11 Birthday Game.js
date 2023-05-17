 
function Birthday_Game(arr,D ,M) {
// length = M
// sum of integer =D
let n=arr.length;
let way=0;
// 5
// 2 2 1 3 2
// D=4 , M=2
for(let i=0;i<n;i++){ // iterating over each arr element 
let tempSum=0; 
let count=0;
let itr= i;//iterator
  while(count<M && itr<n){// adding from each element upto the count(M)
    tempSum+=arr[itr++];
    count++;
  }
  if(tempSum===D) way++;
}
// console.log(way); 
return way;

}
