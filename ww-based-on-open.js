// Set reduced, due, answer dates by based on the open dates
e=document.getElementsByClassName("hasDatepicker");
for (k=0;k<e.length;k++) {
if (k%4==0) {
m=e[k].value.match(/^(\d{2})\/(\d{2})\/(\d{4})(.*)$/);
m[4]=' at 11:59pm';
d=new Date(m[3],m[1]-1,m[2]);
d.setDate(d.getDate()+4);
e[k+1].value=d.toLocaleDateString()+m[4];
d.setDate(d.getDate()+7);
e[k+2].value=d.toLocaleDateString()+m[4];
d.setDate(d.getDate()+1);
e[k+3].value=d.toLocaleDateString()+m[4];
}}
