import { curry2 } from "ffi-utils";
import { Points } from "three";

export const create_ = curry2(
  function(geometry, material) {
    return new Points(geometry, material);
  }
)
