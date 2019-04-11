const pipBtn = document.querySelector('.ytp-pip-button');
const miniPlayerBtn = document.querySelector('.ytp-miniplayer-button');

if (typeof pipBtn !== 'undefined') {
    pipBtn.style.display = '';
}

if (typeof miniPlayerBtn !== 'undefined') {
    miniPlayerBtn.style.display = 'none';
}