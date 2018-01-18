
// Simpler code needed to get stuff working before building up to the complex crap.

/* this works to move the rocks, without checking for collisions

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

