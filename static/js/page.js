function inav(){
	let e=document.getElementsByName("fold-but"),
	t=document.getElementsByName("fold-icon"),
	nav=document.getElementsByClassName("s-bt"),
	l=document.getElementsByName("fold-cont");
	for(let n=0;n<e.length;n++){
		let o=n+"-fold";
		""===e[n].href?
		e[n].onclick=function(){rfld(o)}:
		t[n].onclick=function(e){e.preventDefault(),rfld(o)}
		,t[n].id=o+"ic",l[n].id=o}
	for (let i = 0; i < nav.length; i++) {
		if(nav[i].href==window.location.href){
			nav[i].classList.add("s-cur");
			nav[i].scrollIntoView();
		}
	}
}
function rfld(e){
	let t=byId(e);
	if(null!==t){
		let l=byId(e+"ic").children[0],
		n="unfold",
		o="fold";
		console.log(l)
		"0px"==t.style.height?
		(t.style.height="auto",l.setAttribute("src",l.src.replace(o,n)))
		:(t.style.height=0,l.setAttribute("src",l.src.replace(n,o)))}}

function copylink() {
  navigator.clipboard.writeText(window.location.href);
  var x = document.getElementById("snackbar");
  x.innerHTML = "Hecho!"
  x.classList.add("show");
  setTimeout(function(){ x.classList.remove("show")}, 2000);
  
}

loadListen(inav)

function hidenav(force) {
	if (window.innerWidth<1200)byId("toc1").classList.remove('s-mwr');

	byId("sidebar").classList.toggle('s-mwr2',force);
	byId("sidebar2").classList.toggle('reflow',force);
	byId("main").classList.toggle('navmrg',force);
}

function hidetoc(force) {

	if (window.innerWidth<1200 && 
		!byId("toc1").classList.contains("s-mwr")) {hidenav(true&&window.innerWidth>750)}
	byId("toc1").classList.toggle('s-mwr',force);
}