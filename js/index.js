const modalWindow = document.querySelector('.modal');
const modalButtons = document.querySelectorAll('.modal__button');
const modalClose = modalWindow.querySelector('.modal__close');

const sendForm = (name, phone, email) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({
            name: name,
            phone: phone,
            email: email,
        }),
    })
    .then(response => response.json())
    .then(json => console.log("OK"))
    .catch(err => console.log(err))
    .finally(modalWindow.style.display = 'none');
}


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

modalWindow.addEventListener('submit', (event) => {
    event.preventDefault();
    sendForm(modalWindow.name.value, modalWindow.phone.value, modalWindow.email.value);
});