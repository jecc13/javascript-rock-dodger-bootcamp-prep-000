/**
 * Don't change these constants!
 */
const DODGER = document.getElementById('dodger');
const GAME = document.getElementById('game');
const GAME_HEIGHT = 400;
const GAME_WIDTH = 400;
const LEFT_ARROW = 37; // use e.which!
const RIGHT_ARROW = 39; // use e.which!
const ROCKS = [];
const START = document.getElementById('start');

var gameInterval = null;

/**
 * Be aware of what's above this line,
 * but all of your work should happen below.
 */
const DODGER_WIDTH = 40;
const DODGER_HEIGHT = 20;
const ROCK_WIDTH = 40;
const ROCK_HEIGHT = 40;

function checkCollision(rock) {
  const top = positionToInteger(rock.style.top);

  // rocks and DODGER are 20px high.
  // GAME_HEIGHT - 20 - 20 = 360px;
  // top refers to top of the rock.

  if (top > (GAME_HEIGHT - ROCK_HEIGHT - DODGER_HEIGHT)) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left);
    const dodgerRightEdge = dodgerLeftEdge + DODGER_WIDTH;
    const rockLeftEdge = positionToInteger(rock.style.left);
    const rockRightEdge = rockLeftEdge + ROCK_WIDTH;
    if ([(rockLeftEdge <= dodgerRightEdge) && (rockRightEdge >= dodgerRightEdge)] || [(rockLeftEdge <= dodgerLeftEdge) && (rockRightEdge >= dodgerLeftEdge)]) {
      return true;
    } else {
      return false;
    }
  }
} // end fx checkCollision

              /**
               * Think about it -- what's happening here?
               * There's been a collision if one of three things is true:
               * 1. The rock's left edge is < the DODGER's left edge,
               *    and the rock's right edge is > the DODGER's left edge;
               * 2. The rock's left edge is > the DODGER's left edge,
               *    and the rock's right edge is < the DODGER's right edge;
               * 3. The rock's left edge is < the DODGER's right edge,
               *    and the rock's right edge is > the DODGER's right edge
               */

/*
Creates a rock with a random left position.
Called initially from the START function.
*/
function createRock(x) {
  const rock = document.createElement('div');
  rock.className = 'rock';
  rock.style.left = `${x}px`;
  var top = 0;
  rock.style.top = top;

  GAME.appendChild(rock);

  function moveRock() {
      if (checkCollision(rock)) {
        endGame();
      } else if (rock.style.top > 0) {
          rock.style.top = `${top + 2}px`;
          if (top < GAME_HEIGHT) {
            window.requestAnimationFrame(moveRock);
          }
      } else {
          rock.remove();
      }
  }
  window.requestAnimationFrame(moveRock);
  ROCKS.push(rock);
  return rock;
}

/**
 * End the game by clearing `gameInterval`,
 * removing all ROCKS from the DOM,
 * and removing the `moveDodger` event listener.
 * Finally, alert "YOU LOSE!" to the player.
 */
function endGame() {
  clearInterval(gameInterval);
// ROCKS.length = 0;
  var rock;
  while (ROCKS.length > 0) {
    rock = ROCKS.lastChild;
    rock.remove();
  }

  window.removeEventListener('keydown', moveDodger);
  alert('YOU LOSE!');
}

/*

var oldRocks = document.getElementByClassName("rocks");
while(oldRocks.lastChild())
{
   oldRocks.removeChild(myNode.lastChild);
}

*/



function moveDodger(e) {
  /**
   * Calls `moveDodgerLeft()` if LEFT_ARROW pressed.
   * Calls `moveDodgerRight()` if RIGHT_ARROW pressed.
  */
  if ( e.which === LEFT_ARROW ) {
      e.preventDefault();
      e.stopPropagation();
    if (positionToInteger(DODGER.style.left) > 0) {
      moveDodgerLeft();
    }
  } else if ( e.which === RIGHT_ARROW ) {
    e.preventDefault();
    e.stopPropagation();
    if (positionToInteger(DODGER.style.left) < (GAME_WIDTH - DODGER_WIDTH)) {
      moveDodgerRight();
    }
  }
} // end function moveDodger.


function moveDodgerLeft() {
  // Moves DODGER to the left 4 pixels.
  if (positionToInteger(DODGER.style.left) > 0) {
    DODGER.style.left = `${positionToInteger(DODGER.style.left) - 4}px`;
  }
}

function moveDodgerRight() {
  // Moves DODGER to the right 4 pixels.
  if (positionToInteger(DODGER.style.left) < (GAME_WIDTH - DODGER_WIDTH)) {
      DODGER.style.left = `${positionToInteger(DODGER.style.left) + 4}px`;
  }
}

/**
 * @param {string} p The position property
 * @returns {number} The position as an integer (without 'px')
 */
function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0;
}

function start() {
  window.addEventListener('keydown', moveDodger);
DODGER.style.backgroundColor = 'yellow';

  START.style.display = 'none';
  gameInterval = setInterval(function() {
    createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)));
  }, 1000);
}
//end end 



