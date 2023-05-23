var Minimal_Angle = (h, m) => 
{  
  if(h==12)h=0;// if h is 12 then 360 deg complete and we have to resent
//   each hour cover 30 deg ie- 360/12
//   if hours move 30 deg in that time
// minutes move 60 deg so each minutes hour
//   hand move 30/60 = 0.5 deg 

   h=h*30+m*0.5;
     // each minute cover 6 deg ie- 360/12
   m=m*6;
 let output= Math.abs(h-m);
 return output;
};
 
// The minute hand moves 360 degrees in 60 minute
// (or 6 degrees in one minute) and hour hand moves 
// 360 degrees in 12 hours(or 0.5 degrees in 1 minute).
// In h hours and m minutes, the minute hand would move
// (h*60 + m)*6 and hour hand would move (h*60 + m)*0.5.
