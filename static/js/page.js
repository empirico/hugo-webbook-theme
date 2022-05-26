function inav(){
	let e=document.getElementsByName("fold-but"),
	t=document.getElementsByName("fold-icon"),
	l=document.getElementsByName("fold-cont");
	for(var n=0;n<e.length;n++){
		let o=n+"-fold";
		""===e[n].href?
		e[n].onclick=function(){rfld(o)}:
		t[n].onclick=function(e){e.preventDefault(),rfld(o)}
		,t[n].id=o+"ic",l[n].id=o}
	}
function rfld(e){
	let t=document.getElementById(e);
	if(null!==t){
		let l=document.getElementById(e+"ic"),
		n="fold",
		o="unfold";
		"0px"==t.style.height?
		(t.style.height="auto",l.setAttribute("src",l.src.replace(o,n)))
		:(t.style.height=0,l.setAttribute("src",l.src.replace(n,o)))}}
loadListen(inav)