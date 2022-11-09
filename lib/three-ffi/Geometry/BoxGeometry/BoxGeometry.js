import { curry3 } from "ffi-utils";
import { BoxGeometry } from "three";

export const create = curry3(
  function(width, height, depth) {
    return new BoxGeometry(width, height, depth);
  }
)
