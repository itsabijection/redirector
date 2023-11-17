var replacements = [
"https://math.unm.edu/~buium/syll5200.html",
"https://pro.openstudiojazz.com/home",
"https://scirate.com/",
"https://www.duolingo.com/learn",    
"https://leetcode.com/"
]
//TODO: add weightings for where i redirect to, maybe add timers, add a way to add new entries to banned/redirect lists without modifying this file
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: replacements[Math.floor(Math.random() * replacements.length)]};
    },
    {
        urls: [
            "*://www.reddit.com/*",
            "*://*.reddit.com/*",
            "*://dominion.games/*",
            "*://agar.io/*",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
