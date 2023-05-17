const findSndSmallest = (x,y,z) => {
    if(x>=y && y>=z){
      if(y>=z)return y;
      else return z;
    }else if(y>=x && y>=z){
        if(x>=z)return x;
      else return z;
    }else{
        if(y>=x)return y;
      else return x;
    }
};

