import { curry2 } from "ffi-utils";
import { AmbientLight } from "three";

export const create_ = curry2(
  function(color, intensity) {
    return new AmbientLight(color, intensity);
  }
)
