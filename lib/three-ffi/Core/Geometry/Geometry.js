// TODO: pass configuration 
import ffi from "ffi-utils";
import { Geometry } from "three";

// this doesn't work with ffi.curry1... why?
export function create() {
    return new Geometry();
  }
