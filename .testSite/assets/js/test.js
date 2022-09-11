const tags = document.getElementsByTagName('meta');
const title = document.getElementsByTagName('title')[0];

const debug = document.createElement('div');
debug.style = 'padding: 0 3rem;';
document.body.appendChild(debug);

const escapeHtml = (unsafe) => {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

if (debug) {
  debug.innerHTML += '<h2>Meta Tags</h2>';
  debug.innerHTML += `<div>${escapeHtml(title.outerHTML)}</div>`;
  for (let item of tags) {
    debug.innerHTML += `<div>${escapeHtml(item.outerHTML)}</div>`;
  }
}
