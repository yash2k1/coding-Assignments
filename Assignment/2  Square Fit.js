const squareFit = (m,n) => {
    let len1,len2;
    let breath1,brearh2;
      len1 =m/2;
      len2 =n/2;
     len1= parseInt(len1);
     len2= parseInt(len2);
      breath1=n/1;
      breath2=m/1;
      breath1=parseInt(breath1);
      breath2=parseInt(breath2);
       
       return ((len1*breath1) > (len2*breath2))?len1*breath1:len2*breath2;
  };