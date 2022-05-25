var hsearch = false
var _lngb;

function initializeappbar(e) {
    _lngb = byId("abtn")
    let modal = byId("myModal");
    byId("myBtn").onclick = function() {
        modal.style.display = "block";
        if (hsearch === false && typeof _gcx !== 'undefined') {
            hsearch = true
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = false;
            gcse.src = 'https://cse.google.com/cse.js?cx=' + _gcx;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);
        }
    }
    byId("clsis").onclick =  function() {
        modal.style.display = "none";
    }
}
function onscroll(up) {
    if(_lngb===undefined || getComputedStyle(_lngb).position !=="absolute")return;
    if (up) {
        _lngb.style.opacity = 1;
        _lngb.style.pointerEvents  = "auto";
    } else {
        _lngb.style.opacity = 0;
        _lngb.style.pointerEvents  = "none";
    }
}
scrollListeners.push(onscroll)
resizeListeners.push(()=>{if(_lngb!==undefined){_lngb.style.opacity = 1;_lngb.style.pointerEvents  = "auto";}})
loadListen(initializeappbar)