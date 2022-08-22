e=document.getElementsByClassName("hasDatepicker");
for (k=0;k<e.length;k++) {
if (k%4==1) {
m=e[k+1].value.match(/^(\d{2})\/(\d{2})\/(\d{4})(.*)$/);
d=new Date(m[3],m[1]-1,m[2]);
d.setDate(d.getDate()-7);
e[k].value=d.toLocaleDateString()+m[4];
}}
