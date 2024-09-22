// СКРИПТ ДЛЯ ОТКРЫТИЯ МОДАЛЬНОГО ОКНА С ФОРМОЙ
// КАЖДОЙ КНОПКЕ, КОТОРАЯ ОТКРЫВАЕТ МОДАЛЬНОЕ ОКНО, ДОБАВЛЯЕТЕ DATA-FORM И УКАЗЫВАЕТЕ ID МОДАЛЬНОГО ОКНА 
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-form]').forEach(button => {
        button.addEventListener('click', function () {
            const formId = this.getAttribute('data-form');
            const modal = new bootstrap.Modal(document.getElementById(formId));
            modal.show();
        });
    });
});