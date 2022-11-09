// TODO: pass configuration 
import { curry1 } from "ffi-utils";
import { PointsMaterial } from "three";

export const create = curry1(
  function(/*cfg*/) {
    return new PointsMaterial({ size: 1, sizeAttenuation: false, lights: false, fog: true } );    
  }
)
