// СКРИПТ ДЛЯ ПЕРЕКЛЮЧЕНИЯ КНОПКОК В БЛОКАХ: КАК ЗАКАЗАТЬ СТРОИТЕЛЬСТВО 
document.querySelectorAll('.how-buy__button').forEach(button => {
    button.addEventListener('click', function () {
        const tab = this.getAttribute('data-tab');

        document.querySelectorAll('.how-buy__payment-type-descriprion').forEach(desc => {
            desc.style.display = desc.id === tab ? 'block' : 'none';
        }); // показываем блок, который по id совпадает с data-tab

        document.querySelectorAll('.how-buy__button').forEach(btn => {
            btn.classList.remove('how-buy__button_active');
        });

        this.classList.add('how-buy__button_active');
        document.getElementById('tab').value = tab;
    });
});