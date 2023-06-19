const discountValue = (p,d) => {
    d=d/100;
    let ans =(p*d);
    ans= ans.toFixed(2);
    return p-ans;
};