const modalWindow = document.querySelector('.modal');
const modalButtons = document.querySelectorAll('.modal__button');
const modalClose = modalWindow.querySelector('.modal__close');

modalButtons.forEach((item) => {
    item.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
    });
});

modalWindow.addEventListener('click', (event) => {
    const isModal = event.target.closest('.modal__inner');

    if (!isModal) {
        modalWindow.style.display = 'none';
    }
});

modalClose.addEventListener('click', () => {
    modalWindow.style.display = 'none';
});

