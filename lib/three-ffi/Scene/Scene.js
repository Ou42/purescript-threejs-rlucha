import { Scene } from "three"
import { Color } from "three"
import { Fog } from "three"

var create = function() {
  return new Scene()
}

// Color has to be a Three.Color
var setBackground = function(color) {
  return function(scene) {
    return function() {
      // scene.fog = new Fog(new Color( 0x000000), 1800, 3000)
      scene.background = color
      return scene
    }
  }
}

var add = function(scene) {
  return function(object) {
    return function() {
      scene.add(object)
      return scene
    }
  }
}

var debug = function(scene) {
  return function() {
    window.scene = scene
  }
}

export const create = create
export const setBackground = setBackground
export const add = add
export const debug = debug
