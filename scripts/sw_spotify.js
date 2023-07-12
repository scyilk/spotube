chrome.webNavigation.onHistoryStateUpdated.addListener(function () {
    setTimeout(() => {
        chrome.tabs.executeScript(null, { file: "scripts/spotify.js" });
    }, 7000)
});
