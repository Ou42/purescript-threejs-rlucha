// TODO: pass configuration 
import { curry1 } from "ffi-utils";
import { MeshBasicMaterial } from "three";

export const create = curry1(
  function(color) {
    return new MeshBasicMaterial({color: color});
  }
)
