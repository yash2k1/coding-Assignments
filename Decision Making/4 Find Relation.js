const findRelation = (X,Y) => {
    if (X<Y){
      return `${X} is smaller than ${Y}`;
    }else if (X>Y){
      return `${X} is greater than ${Y}`;
      
    }else{
     return `${X}  is equal to ${Y}`;}

};
