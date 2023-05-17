
const Max_out_of_three = (A,B,C) => {

    if(C>B && C>A){
      return C;
    }else if(A>B && A>C){
      return A;
    }else if(B>A&& B>C){
      return B;
    }else{
       return -1;
    }
    };