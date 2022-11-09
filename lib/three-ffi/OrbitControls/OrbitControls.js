import { curry2 } from "ffi-utils"
var OrbitControls = require('three-orbit-controls')(require("three"))

export function create(camera) {
  return function() {
    return new OrbitControls(camera)
  }
}

export function toggle(status) {
  return function(controls) {
    return function() {
      controls.enabled = status
      // controls.autoRotate = true //remove
      controls.enableZoom = true //remove
    }
  }
}

export const setAutoRotate = curry2(
  function(status, controls) {
    controls.autoRotate = status
  }
)

// Had to force this to take a number that doesn't use
export function update(controls) {
  return function() {
    controls.update()
  }
}
