// Set reduced, due, answer dates by based on the open dates
function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
async function main() {
e=document.getElementsByClassName("form-control input");
for (k=0;k<e.length;k++) {
if (k%4==0) {
m=e[k].value.match(/^(\d+)\/(\d+)\/(\d+)(.*)$/);
m[4]=', 11:59 PM';
d=new Date('20'+m[3],m[1]-1,m[2]);
d.setDate(d.getDate()+7);
e[k+1].value=d.toLocaleDateString()+m[4];
e[k+1].focus(); await sleep(800); 
d.setDate(d.getDate()+3);
e[k+2].value=d.toLocaleDateString()+m[4];
e[k+2].focus(); await sleep(800); 
d.setDate(d.getDate()+0);
e[k+3].value=d.toLocaleDateString()+m[4];
e[k+3].focus(); await sleep(800); 
}}}
main();
