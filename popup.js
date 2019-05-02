chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var fmDebuggerData = request.fmDebuggerData;
    if(fmDebuggerData.scriptExits){
      document.getElementById('code-content').innerHTML="Present";
    }
    else{
      document.getElementById('code-content').innerHTML="Absent";
    }
    document.getElementById('org-id-content').innerHTML=fmDebuggerData.orgId || "Null";

    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });

chrome.tabs.executeScript(null, {file: 'page_loading_script.js'});
//https://stackoverflow.com/questions/4976996/tabs-executescript-passing-parameters-and-using-libraries
//https://developer.chrome.com/apps/messaging
