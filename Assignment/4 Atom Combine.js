const atomCombine = (s) => {
    let total=1;
    let atom=1;
     for(let i=1;i<s;i++){
        atom=2*atom;
       total+=atom;
     }
     return total;
  };
  