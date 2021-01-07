var modal        = document.querySelector('.focus-modal');
var modalButton  = document.querySelector('.focus-modal-button');
var modalOverlay = document.querySelector('.focus-modal-overlay');
var cancelButton = document.querySelector('.focus-modal-cancel');

modalButton.addEventListener('click', open);
cancelButton.addEventListener('click', close);

const [firstTabStop, , , lastTabStop] = document.querySelectorAll('form > *')
console.log(firstTabStop, lastTabStop);

// firstTabStop.addEventListener('keydown', this.tabTrap);
modal.addEventListener('keydown', this.tabTrap);

function open() {
  // Show the modal and overlay
  modal.style.display = 'block';
  modalOverlay.style.display = 'block';
}

function close() {
  // Hide the modal and overlay
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
}

function tabTrap(e) {
  if (e.keyCode === 9 && document.activeElement === lastTabStop) {
    e.preventDefault();
    firstTabStop.focus();
  }
}