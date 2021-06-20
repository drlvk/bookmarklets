let u = window.location.href.split('/');
u[2] = u[2].replace(/\./g, '-') + '.libezproxy2.syr.edu';
window.location.replace(u.join('/'));
