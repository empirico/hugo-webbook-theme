var tloc=[]
function indexToc(argument) {
    let cnt = document.getElementById("cnt")?.children
    let ordr = ["H1", "H2", "H3", "H4", "H5", "H6"]
    for (let i = 0; i < cnt.length; i++) {
        let idx = ordr.indexOf(cnt[i].tagName)
        if (idx >= 0) {
            tloc.push(cnt[i])
        }
    }
}
function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function toc_onscroll(up){
    let winY = document.getElementById("main").scrollTop
    let appbr = convertRemToPixels(3)
    let nwelm;
    for (var i = 0; i < tloc.length; i++) {
        let y =  tloc[i].getBoundingClientRect().top - appbr
        if (y > 0 && y < window.innerHeight*.5) {
            nwelm = document.getElementById("tco-"+i);
            break
        }
    }
    if(nwelm!==undefined){
        tloc.forEach((itm, idx)=>{document.getElementById("tco-"+idx).classList?.remove('t-cur')});
        nwelm.classList.add('t-cur')
        nwelm.scrollIntoView()
        }
    }

loadListen(indexToc)
scrollListeners.push(toc_onscroll)