const pipBtn = document.querySelector('.ytp-pip-button');
const miniPlayerBtn = document.querySelector('.ytp-miniplayer-button');

if (typeof pipBtn !== 'undefined' || typeof miniPlayerBtn !== 'undefined') {
    pipBtn.style.display = '';
    miniPlayerBtn.style.display = 'none';
}