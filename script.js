document.querySelectorAll('.disabled').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        alert("Эта кнопка временно отключена.");
    });
});