'use strict';

const cssFixedVideoClassName = 'fixed-video';
const cssFixedScriptClassName = 'fixed-script';

const apply = function () {
  $('.rc-VideoMiniPlayer').addClass(cssFixedVideoClassName);
  $('.rc-VideoHighlightingManager').addClass(cssFixedScriptClassName);
};

const reset = function () {
  $('.rc-VideoMiniPlayer').removeClass(cssFixedVideoClassName);
  $('.rc-VideoHighlightingManager').removeClass(cssFixedScriptClassName);
};

const init = function () {
  $(
    '<style> .fixed-video { position: fixed; width: 40%; } .fixed-script { position: fixed; top: 65%; overflow-y: auto; height: 40%; } </style>'
  ).appendTo('head');
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.command) {
    case 'apply':
      apply();
      break;
    case 'reset':
      reset();
      break;
  }
  sendResponse({ result: 'success' });
});

window.onload = function () {
  init();
};
