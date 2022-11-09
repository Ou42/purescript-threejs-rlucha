import { curry2 } from "ffi-utils";
import { ExtrudeGeometry } from "three";

export const create = curry2(
  function(depth, shape) {
    return new ExtrudeGeometry(shape, {
      steps: 1,
      depth: depth,
      bevelEnabled: false
    });
  }
)
