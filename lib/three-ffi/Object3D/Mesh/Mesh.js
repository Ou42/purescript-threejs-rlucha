import { curry2 } from "ffi-utils";
import { Mesh } from "three";

export const create_ = curry2(
  function(geometry, material) {
    return new Mesh(geometry, material);
  }
)
