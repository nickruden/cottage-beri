// СКРИПТ ДЛЯ ПЕРЕКЛЮЧЕНИЯ КНОПКОК В БЛОКАХ: КАК ЗАКАЗАТЬ СТРОИТЕЛЬСТВО 
    let hiddenInput = document.getElementById('selected-tab-input');
    console.log('Updated hidden input value:', hiddenInput.value)

    document.querySelectorAll('.how-buy__button').forEach(button => {
        button.addEventListener('click', function (event) {
            const tab = event.target.getAttribute('data-tab');

            hiddenInput.value = tab;

            // Обновляем отображение описания выбранного типа оплаты
            document.querySelectorAll('.how-buy__payment-type-descriprion').forEach(desc => {
                desc.style.display = desc.id === tab ? 'block' : 'none';
            });

            // Обновляем активный класс на кнопках
            document.querySelectorAll('.how-buy__button').forEach(btn => {
                btn.classList.remove('how-buy__button_active');
            });
            
            event.target.classList.add('how-buy__button_active');
            console.log('Updated hidden input value:', hiddenInput.value);
        });
    });