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
repeatDown(6);
function repeatright(total) {
  var count = 0;
  while (count < total) {
   right();
    count = count + 1;
  }
}
repeatright(3);
function repeatup(total) {
  var count = 0;
  while (count < total) {
   up();
    count = count + 1;
  }
}
repeatup(2);
repeatright(2);
repeatDown(3);
