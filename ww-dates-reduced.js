e=document.getElementsByClassName("hasDatepicker");
days=[6,13,13];
times=['11:59pm','11:59pm','11:59pm'];
k=0;for (f of e) {if (k==0) {fv=f.value} else {x=new Date(fv.split(' ')[0]); x.setDate(x.getDate()+days[k-1]); f.value=(x.getMonth()+1)+'/'+x.getDate()+'/'+x.getFullYear()+' at '+times[k-1]; console.log(f.value)} k=(k+1)%4}
