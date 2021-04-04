'use strict';

(() => {
  const applyElement = document.getElementById('apply');
  const resetElement = document.getElementById('reset');
  applyElement.addEventListener('click', () => apply());
  resetElement.addEventListener('click', () => reset());
})();

function apply() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { command: 'apply' },
      function (response) {
        console.log(response.result);
      }
    );
  });
  window.close();
}

function reset() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { command: 'reset' },
      function (response) {
        console.log(response.result);
      }
    );
  });
  window.close();
}
