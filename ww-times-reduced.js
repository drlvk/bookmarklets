function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
async function main() {
e=document.getElementsByClassName("form-control input");
d=[', 8:00 AM',', 11:59 PM',', 11:59 PM',', 11:59 PM'];
k=0;for (f of e) {f.value=f.value.replace(/, .*/,d[k]); f.focus(); k=(k+1)%4; await sleep(500); }
}
main();
