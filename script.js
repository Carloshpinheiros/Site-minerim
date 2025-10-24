let bte = document.getElementById('bte');
let body = document.body;

bte.addEventListener('click', () => {
  bte.classList.toggle('escuro');
  body.classList.toggle('escuro');
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = modal.querySelector('.modal-close');

    function showModal(message) {
        modalText.textContent = message || '';
        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');
        // trap focus if needed (basic)
        closeBtn.focus();
    }

    function hideModal() {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
    }

    // Open modal when clicking images that have data-msg or .open-modal class
    document.querySelectorAll('[data-msg].open-modal, .open-modal[data-msg]').forEach(el => {
        el.addEventListener('click', function (e) {
            const msg = e.currentTarget.dataset.msg;
            showModal(msg);
        });
    });

    // Close events
    closeBtn.addEventListener('click', hideModal);

    // click outside modal content to close
    modal.addEventListener('click', function (e) {
        if (e.target === modal) hideModal();
    });

    // Esc key closes modal
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            hideModal();
        }
    });
});
