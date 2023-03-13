/**
 * @description: 插入脚本
 * @param {*} jsPath
 * @param {*} cb
 * @return {*}
 */
export function injectCustomJs(jsPath, cb) {
  var temp = document.createElement('script');
  temp.setAttribute('type', 'text/javascript');
  temp.src = jsPath;
  temp.onload = function () {
    if (cb) cb();
  };
  document.head.appendChild(temp);
}

export function getCurrentTabId(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (callback) {
      callback(tabs.length ? tabs[0].id : null);
    }
  });
}