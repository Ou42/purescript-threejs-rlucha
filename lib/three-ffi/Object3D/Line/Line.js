import { curry2 } from "ffi-utils";
import { Line } from "three";

export const create_ = curry2(
  function(geometry, material) {
    return new Line(geometry, material);
  }
)
