
const findGrades = (M) => {
    // if(M>= 41  && M <= 50){
    //   return "A";
    // }else if(M>= 31 && M <= 40){
    //   return "B";
    // }else  if(M>= 21 && M <= 30){
    //   return "C";
    // }else if(M>= 11 && M <= 20){
    //   return "D";
    // }else {
    //   return "E";
    // }
        switch(true){

      case M<=10:
        return "E";

      case M>=11&&M<=20:
        return "D";

      case M>=21&&M<=30:
        return "C";

        case M>=31&&M<=40:
        return "B";

        case M>=41&&M<=50:
        return "A";
    }

};
