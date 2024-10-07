// JavaScript для валидации формы и отображения сообщения под формой
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault(); // Предотвращаем стандартное поведение формы

            if (!form.checkValidity()) {
                event.stopPropagation()
            } else {
                showSuccessMessage(form);
            }

            const checkbox = form.querySelector('.feedback-form__agree-checkbox');
            const customCheckbox = form.querySelector('.feedback-form__custom-checkbox');
            const agreeText = form.querySelector('.feedback-form__agree-text');

            if (!checkbox.checked) {
                customCheckbox.classList.add('is-invalid');
                agreeText.classList.add('is-invalid');
            } else {
                customCheckbox.classList.remove('is-invalid');
                agreeText.classList.remove('is-invalid');
            }

            form.classList.add('was-validated')
        }, false)
    })

    function showSuccessMessage(form) {
        const formId = form.id;
        const responseDiv = document.getElementById(`resp-${formId}`);
        responseDiv.textContent = 'Спасибо за ваше обращение. Мы свяжемся с вами в ближайшее время ';
        responseDiv.style.color = "#83B32B";

        // Очищаем поля ввода
        form.reset();

        // Удаляем класс was-validated, чтобы скрыть сообщения об ошибках
        form.classList.remove('was-validated');
        console.log(form)
    }
})()
