var w = document.querySelector('a[href*="webwork.syr.edu"]').href.split("?")[0];
var u = document.querySelector('a[href*="mailto:"]');
if (u) {  // Works in Gmail 
  u = u.href.split("@")[0].split(":")[1];
}
else {    // Works in Outlook Web Access
  u = document.querySelector('img[src*="service.svc"]');
  u = u.src.split("%")[0].split("email=")[1];
}
window.open(w + "?showCorrectAnswers=1&effectiveUser=" + u);
