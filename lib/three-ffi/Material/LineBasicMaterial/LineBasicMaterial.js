// TODO: pass configuration 
import { curry1 } from "ffi-utils";
import { LineBasicMaterial } from "three";

export const create = curry1(
  function(color) {
    return new LineBasicMaterial({color: color, linewidth: 10});
  }
)
