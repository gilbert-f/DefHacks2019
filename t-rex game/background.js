chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "t-rex game/index.html";
  chrome.tabs.create({ url: newURL });
});