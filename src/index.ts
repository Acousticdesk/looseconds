import { resetCanvas } from './Canvas';
import { drawMap, initMap, map } from './Map';
import { detectKeyboardActions } from './Keyboard';
import { drawPlayer, movePlayer, updatePlayerGravityForce } from './Player';
import { renderCollisions } from './Collision';
import { drawUI } from './UI';
import { Timer } from './Timer'

function animate() {
  resetCanvas()
  drawMap(map)
  updatePlayerGravityForce()
  movePlayer()
  drawPlayer()
  drawUI()
  renderCollisions(true)
  window.requestAnimationFrame(animate)
}

async function main() {
  detectKeyboardActions()
  try {
    await initMap()
  } catch (e) {
    console.error(e)
  }
  Timer.init()
  animate()
}

main()
