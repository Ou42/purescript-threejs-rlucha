export function setAnimationFrameBehaviour(fn) {
  return function() {
    window.requestAnimationFrame(fn)
  }
}

// TODO: This should always return an Int
export function unsafeGetGlobalValue(key) {
  return function() {
    return window[key] || 0;
  }
}

export function unsafeSetGlobalValue(key) {
  return function(value) {
    return function() {
      return window[key] = 0;
    }
  }
}
