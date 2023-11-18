// change 105 to the number of students on the roster
for(k=1; k<=105; k++) {
r=document.getElementById("trCLASS_ROSTER_VW$0_row"+k).children;
if (r[10].textContent.indexOf("WD")!=-1) {
document.getElementById("DERIVED_AA2_SELECT$"+(k-1)).click();
}}
