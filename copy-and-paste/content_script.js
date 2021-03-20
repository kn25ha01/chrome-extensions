const GET_CLASS = ".MV3Tnb";
const SET_CLASS = ".gLFyf";

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (!request.data) {
        data = getData();
        sendResponse({data: data});
    } else {
        setData(request.data);
        sendResponse({data: null});
    }
})

function getData() {
    return document.querySelector(GET_CLASS).innerText;
}

function setData(data) {
    document.querySelector(SET_CLASS).value = data;
}
