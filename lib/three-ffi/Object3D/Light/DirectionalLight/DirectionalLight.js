import { curry2 } from "ffi-utils"
import { DirectionalLight } from "three"

export const create_ = curry2(
  function(color, intensity) {
    return new DirectionalLight(color, intensity)
  }
)
 