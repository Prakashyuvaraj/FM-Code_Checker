var fmDebuggerData = {};
var fmscriptEL= document.querySelector("script[src*='cdn.freshmarketer.com']"); 
var zargetEL= document.querySelector("script[src*='cdn.zarget.com']");
var scriptEL = fmscriptEL || zargetEL;
if(scriptEL){
	fmDebuggerData.scriptExits = true;
	fmDebuggerData.orgId = scriptEL.src.split('/')[3];//https://stackoverflow.com/questions/41515234/extract-a-specific-word-from-string-in-javascript
}
else{
	fmDebuggerData.scriptExits = false;	
}
window.postMessage({ type: "FM_DEBUGGER_DATAUPDATE", fmDebuggerData:fmDebuggerData}, "*");
chrome.runtime.sendMessage({ type: "FM_DEBUGGER_DATAUPDATE", fmDebuggerData:fmDebuggerData});