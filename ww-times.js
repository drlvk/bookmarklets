e=document.getElementsByClassName("hasDatepicker");
d=['at 09:00am','at 11:59pm','at 11:59pm'];
k=0;for (f of e) {f.value=f.value.replace(/at.*/,d[k]);k=(k+1)%3;}
