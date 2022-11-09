import { curry4, curry2, curry1 } from "ffi-utils"
import { PerspectiveCamera } from "three"

export const create = curry4(
  function(fov, aspect, near, far) {
    var camera = new PerspectiveCamera(fov, aspect, near, far)
    return camera
  }
)

export const setAspect = curry2(
  function(aspect, camera) {
    camera.aspect = aspect
  }
);

export const setPosition = curry4(
  function(x, y, z, camera) {
    camera.position.set(x, y, z)
  }
)

export const lookAt = curry4(
  function(x, y, z, camera) {
    camera.lookAt(x, y, z)
  }
)

export const debug = curry1(
  function(camera) {
    window.camera = camera
  }
)

export const updateProjectionMatrix = curry1(
  function(camera) {
    camera.updateProjectionMatrix()
  }
)
