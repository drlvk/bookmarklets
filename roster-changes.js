r = []; // replace by current roster
n = []; 
s = document.getElementsByTagName("span");
for (e of s) {
  t = e.textContent;
  if (/\d{9}/.test(t)) {
    n.push(t);
    if (r.indexOf(t)==-1) {
	    console.log(t);   // added 
	  }
  }
}
console.log(n); // new roster, for Line 1
