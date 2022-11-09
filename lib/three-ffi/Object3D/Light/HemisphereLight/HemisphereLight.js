import { curry3 } from "ffi-utils";
import { HemisphereLight } from "three";

export const create_ = curry3(
  function(skyColor, groundColor, intensity) {
    return new HemisphereLight(skyColor, groundColor, intensity);
  }
)
