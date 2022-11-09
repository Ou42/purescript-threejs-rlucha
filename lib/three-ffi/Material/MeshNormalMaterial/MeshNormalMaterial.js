// TODO: pass configuration 
import { curry2 } from "ffi-utils";
import { MeshNormalMaterial } from "three";

export const create = curry2(
  function(color, lights) {
    return new MeshNormalMaterial({color: color, lights: lights});
  }
)
