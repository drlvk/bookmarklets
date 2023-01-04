e=document.getElementsByClassName("hasDatepicker");
t=[e[0].value, e[1].value, e[2].value, e[3].value]; 
k=0;for (f of e) {f.value=t[k]; k=(k+1)%4}
