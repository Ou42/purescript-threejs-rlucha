// TODO: pass configuration 
import { curry2 } from "ffi-utils";
import { MeshPhongMaterial } from "three";

export const create = curry2(
  function(color, lights) {
    return new MeshPhongMaterial({color: color, lights: lights});
  }
)
