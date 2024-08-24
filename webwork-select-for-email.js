let students = document.getElementById("classList").children;
let entered = document.getElementById("email-body").value;
let listSelect = entered.replace(/\s/g, ",").split(',');
for (const s of students) {
s.selected = (listSelect.indexOf(s.value) !== -1);
}
