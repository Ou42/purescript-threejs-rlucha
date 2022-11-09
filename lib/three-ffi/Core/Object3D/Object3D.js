import { curry2 } from "ffi-utils";

export function setPosition_(x) {
  return function(y) {
    return function(z) {
      return function(object3D) {
        return function() {
          object3D.position.set(x, y, z);
        };
      };
    };
  };
}

export function setRotation_(x) {
  return function(y) {
    return function(z) {
      return function(object3D) {
        return function() {
          object3D.rotation.set(x, y, z);
        };
      };
    };
  };
}

export function setScale_(x) {
  return function(y) {
    return function(z) {
      return function(object3D) {
        return function() {
          object3D.scale.set(x, y, z);
        };
      };
    };
  };
}

export function rotateOnAxis_(v3) {
  return function(angle) {
    return function(object3D) {
      return function() {
        object3D.rotateOnAxis(v3, angle);
      };
    };
  };
}

// TODO change for a generic Object3D
export function forceVerticesUpdate_(g) {
  return function() {
    // remove .geometry and make access direct from PS
    g.geometry.verticesNeedUpdate = true;
  };
}

export function getPosition_(object3D) {
  return function() {
    return object3D.position;
  };
}

export const setReceiveShadow_ = curry2(function(bool, object3D) {
  object3D.receiveShadow = bool;
});

export const setCastShadow_ = curry2(function(bool, object3D) {
  object3D.castShadow = bool;
});
