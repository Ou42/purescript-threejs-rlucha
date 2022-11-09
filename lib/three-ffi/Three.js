// Debug only
import THREE from "three";
window.THREE = THREE;
// EO Debug only

import { Color } from "three";
import { AxesHelper } from "three";
import { Geometry } from "three";
import { Vector3 } from "three";
import { Vector2 } from "three";

// Simple string implementation for color, no checks...
export function createColor(color) {
  return function() {
    return new Color(color)
  }
}

export function createAxesHelper(size) {
  return function() {
    return new AxesHelper(size)
  }
}

export function createGeometry() {
  return new Geometry()
} 

export function createVector2 (x) {
  return function(y) {
    return function() {
      return new Vector2(x, y)
    }
  }
}

// Vector3
export function createVector3 (x) {
  return function(y) {
    return function(z) {
      return function() {
        return new Vector3(x, y, z)
      }
    }
  }
}

export function getVector3Position(vs) {
  return function() {
    return {
      x:vs.x,
      y:vs.y,
      z:vs.z
    }
  }
}

export function updateVector3Position(x) {
  return function(y) {
    return function(z) {
      return function(v3) {
        return function() {
          v3.x = x
          v3.y = y
          v3.z = z
        }
      }
    }
  }
}

// how to make this actually inmutable, manage this ref handling from PS instead of JS
export function pushVertices(geometry) {
  return function(vector3) {
    return function() {
      geometry.vertices.push(vector3)
      return geometry
    }
  }
} 

// Todo use DOM to abstract this to any event and use it directly from PS
export function onDOMContentLoaded(cb) {
  return function() {
    document.addEventListener("DOMContentLoaded", cb)
  }
}

export function onResize(cb) {
  return function() {
    window.addEventListener("resize", cb)
  }
}

// debug function
export function voidEff() {
  return function() {
  }
}
