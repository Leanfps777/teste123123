const btc = document.getElementById('btc');

function toggle() {
const nav = document.getElementById('nav');
nav.classList.toggle('active');
}

btc.addEventListener('click', toggle); 