// TODO: pass configuration 
import { curry1 } from "ffi-utils";
import { Shape } from "three";

export const create = curry1(
  function(v2s) {
    return new Shape(v2s);
  }
)
