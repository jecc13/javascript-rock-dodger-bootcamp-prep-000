/*

To improve your test, I suggest changing your "180px" test case in the checkCollision(rock) function.

If the student's program fails to check for case 2 in the instructions ((rockLeftEdge >= dodgerLeftEdge) && (rockRightEdge <= dodgerRightEdge)), dropping a rock with a left edge of between 181 and 199, inclusive, will pass the tests and the rock will pass right through the dodger in the game. 

To reproduce:
1. Remove  `|| ((rockLeftEdge >= dodgerLeftEdge) && (rockRightEdge <= dodgerRightEdge))` from your checkCollision(rock) function.
2. Run the test and play the game.
Result: The tests will pass and the rock will page right through the dodger in the game.

I realized this because I originally misread the instructions and thought the rock had a width of 40, the same as the dodger. So case 2 in the instructions was redundant and I left it out. The game worked and I passed all the tests. 

Before submitting, I went back through the original instructions - which I had been deleting as I implemented pieces - and realized that the rock was only supposed to be 20 wide. I changed that and observed the behavior above. 

If you change your "180px" check to something between 181-199, you'll catch the cases where the rock is directly over the dodger with neither edge aligned with the dodger's edges.

*/


// Simpler code needed to get stuff working before building up to the complex crap.

/* 
add to the start function, so i have a visual that start() has actually started. 

DODGER.style.backgroundColor = 'yellow';
*/

/*
The console.logs below are for double checking the collision checking.

    if (((rockLeftEdge <= dodgerRightEdge) && (rockRightEdge >= dodgerRightEdge)) || 
      ((rockLeftEdge <= dodgerLeftEdge) && (rockRightEdge >= dodgerLeftEdge))) {
        console.log(`DL: ${dodgerLeftEdge}`);
        console.log(`DR: ${dodgerRightEdge}`);
        console.log(`RL: ${rockLeftEdge}`);
        console.log(`RR: ${rockRightEdge}`);
       return true;
    } else {
      return false;
    } // end else
*/



/* 
this works to move the rocks, without checking for collisions

function moveRock() {
    function step() {
      rock.style.top = `${top += 2}px`;
      if (top < GAME_HEIGHT) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);
*/

/*
create and drop a rock.

const jen = document.createElement('div');
jen.className = 'rock';
jen.style.left = `${x}px`;
//jen.style.left = '4px';
jen.style.top = '2px';
GAME.appendChild(jen);

function move(jen) {
  var top = 0;
 
  function step() {
    jen.style.top = `${top += 2}px`;
 
    if (top < 400) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
} // end move(jen)

move(jen);
ROCKS.push(jen);
return jen;
*/

