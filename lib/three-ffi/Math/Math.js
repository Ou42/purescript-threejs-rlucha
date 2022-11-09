import { curry1 } from "ffi-utils"
import { Math as ThreeMath } from "three"

export const degToRad = curry1(
  function(deg) {
    return ThreeMath.degToRad(deg)
  }
)