// Help Rudy the Red Dot collect all the green dots!

// Control Rudy with the following commands:
//  up();                   -- moves Rudy up one square
//  down();                 -- ...down one square
//  left();                 -- ...left one square
//  right();                -- ...right one square

// Interact with Rudy's environment using the following commands:
//  remainingDots();        -- returns the number of green dots remaining
//  getColor();             -- returns the color of Rudy's square
//  setColor(color);        -- changes the color of Rudy's square, opens gates if colors match

function repeatDown(total) {
  var count = 0;
  while (count < total) {
    down();
    count = count + 1;
  }
}
function repeatright(total) {
  var count = 0;
  while (count < total) {
   right();
    count = count + 1;
  }
}
function repeatup(total) {
  var count = 0;
  while (count < total) {
   up();
    count = count + 1;
  }
}
repeatDown(4);
repeatright(1);
var x=getColor();
repeatDown(1);
setColor(x);
repeatright(3);
repeatup(1);
var y=getColor();
repeatDown(1);
setColor(y);
repeatright(2);
