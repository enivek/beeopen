var urls = [
  '*://www.beestar.org/js/no_show.js',
  '*://www.beestar.org/js/exercise.js',
  '*://www.beestar.org/css/exam_web.css',
  '*://www.beestar.org/css/print_blank.css'
];

var response = function() {
  return { cancel: true };
}

chrome.webRequest.onBeforeRequest.addListener(response, { urls: urls }, ['blocking'] );