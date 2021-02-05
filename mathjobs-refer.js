let comm=['xxx','yyy'];//committee
for (ch of document.getElementById('rfacs').children) {if (comm.indexOf(ch.value)>-1) {ch.selected='selected'}}
document.getElementsByName('reml')[0].checked='';
