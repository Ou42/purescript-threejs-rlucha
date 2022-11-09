import { curry4 } from "ffi-utils";
import { PlaneGeometry } from "three";

export const create = curry4(
  function(width, height, width_segments, height_segments) {
    return new PlaneGeometry(width, height, width_segments, height_segments);
  }
)