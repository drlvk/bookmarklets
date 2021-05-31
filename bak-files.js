f = document.getElementById('files');
for (e of f.children) {
if (/\.bak$/.test(e.value)) {e.selected='selected';}
}
