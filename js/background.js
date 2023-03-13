import { getCurrentTabId } from './utils.js'
(() => {
  chrome.runtime.onInstalled.addListener(() => {
    getCurrentTabId((tabId) => {
      console.log(tabId)
    })
  });

  chrome.action.onClicked.addListener((tab) => {
    getCurrentTabId((tabId) => {
      console.log(tabId)

      chrome.scripting.executeScript({
        target: {tabId: tabId},
        files: ['js/autoView.js']
      });
    })
  });
})()