const modal        = document.querySelector('.focus-modal');
const modalButton  = document.querySelector('.focus-modal-button');
const modalOverlay = document.querySelector('.focus-modal-overlay');
const cancelButton = document.querySelector('.focus-modal-cancel');

modalButton.addEventListener('click', open);
cancelButton.addEventListener('click', close);

const [firstTabStop, , , lastTabStop] = modal.querySelectorAll('form > *')

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

// When modal is open, the tab key only selects focusable elements within the modal
function tabTrap(e) {
  // Tab Key Pressed
  if (e.keyCode === 9) {
    // Forwards
    if (document.activeElement === lastTabStop && !e.shiftKey) {
      e.preventDefault();
      firstTabStop.focus();
    // Backwards
    } else if (document.activeElement === firstTabStop && e.shiftKey) {
      e.preventDefault();
      lastTabStop.focus();
    }
  }
}