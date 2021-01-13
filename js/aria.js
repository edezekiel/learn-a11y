let count = document.querySelector('#count');
const inc = document.querySelector('#inc');
const dec = document.querySelector('#dec');
inc.addEventListener('click', _increment);
dec.addEventListener('click', _decrement);

function _increment() {
  count.innerHTML = parseInt(count.innerHTML) + 1;
};

function _decrement() {
  count.innerHTML = parseInt(count.innerHTML) - 1;
};