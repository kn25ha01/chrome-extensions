const URL_NEXT = "https://www.google.co.jp/";
const URL_BACK = "https://www.google.co.jp/";

chrome.commands.onCommand.addListener(function(command){
    run();
})

function run() {
    console.log("--- STARTED ---");
    let data;
    changeTab(data);
}

function changeTab(data) {
    let url = !data ? URL_NEXT : URL_BACK;
    chrome.tabs.query({url: url}, function (tabs) {
        var tab = tabs[0];
        chrome.tabs.update(tab.id, {active: true}, function(tab) {
            //console.log(`changed tab -> ${url}`);
            sendMessage(tab, data);
        });
    })
}

function sendMessage(tab, data) {
    chrome.tabs.sendMessage(tab.id, {data: data}, function(response) {
        checkResponse(response);
    })
}

function checkResponse(response) {
    if (response.data) {
        console.log(`getted data -> ${response.data}`);
        changeTab(response.data);
    } else {
        console.log("--- COMPLETED ---");
    }
}
