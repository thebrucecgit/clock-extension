const onInstalledURL = "https://clock.thebrucecweb.com/oninstall.html"
chrome.runtime.onInstalled.addListener((object)=>{
    chrome.tabs.create({url: onInstalledURL}, (tab)=>{
        console.log(`New tab launched with ${onInstalledURL}`);
    });
});