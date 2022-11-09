import rlite from "rlite-router";

import { main } from "./output/Projects.CircleStuff.Main";
import { main as _main } from "./output/Projects.Sealike.Main";
import { main as __main } from "./output/Projects.FrameBound.Main";
import { main as ___main } from "./output/Projects.Foo.Main";

import { editor as _editor } from "./src/Editor/main";

const route = rlite(notFound, {
  "": function() {
    main();
  },
  "01": function() {
    document.body.className = "theme02";
    _main();
  },
  "02": function({ editor }) {
    document.body.className = "theme01";
    main();
    if (editor === "true") {
      _editor();
    }
  },
  "03": function() {
    document.body.className = "theme01";
    __main();
  },
  "04": function() {
    document.body.className = "theme04";
    ___main();
  }
});

function notFound() {
  document.body.className = "theme01";
  __main();
}

// Hash-based routing
function processHash() {
  const hash = location.hash || "#";
  route(hash.slice(2));
}

function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen =
    docEl.requestFullscreen ||
    docEl.mozRequestFullScreen ||
    docEl.webkitRequestFullScreen ||
    docEl.msRequestFullscreen;
  var cancelFullScreen =
    doc.exitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen ||
    doc.msExitFullscreen;

  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
}

window.go = () => {
  setTimeout(() => window.location.reload(true), 200);
};

document.addEventListener("dblclick", toggleFullScreen);
window.addEventListener("hashchange", processHash);
processHash();
