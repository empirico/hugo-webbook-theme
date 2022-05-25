var scrollListeners=[]
var resizeListeners=[]
var prevscroll = 0
function logic(w) {
    let st = document.getElementById("main").scrollTop;
    scrollListeners.forEach((e)=>{e(st<prevscroll)})
    prevscroll=st
}
function logicR(w) {
    resizeListeners.forEach((e)=>{e()})
}

var loadListen = (_function) =>{document.addEventListener("DOMContentLoaded",_function)}
var byId = (id) => document.getElementById(id);

loadListen(function(e) {
    document.getElementById("main")?.addEventListener('scroll',logic)
    window.addEventListener('resize',logicR)
});