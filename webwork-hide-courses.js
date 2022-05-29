let courses = document.querySelector("select").children;
for (const c of courses) {
c.selected = (c.textContent.indexOf("hidden") == -1) && (c.textContent.indexOf("Summer_2022") == -1); // in Summer 2022
}
