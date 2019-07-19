const onInstalledURL = ""
chrome.runtime.onInstalled.addListener((object)=>{
    chrome.tabs.create({url: onInstalledURL}, (tab)=>{
        console.log(`New tab launched with ${onInstalledURL}`);
    });
});