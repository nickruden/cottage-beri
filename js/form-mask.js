// СКРИПТ ДЛЯ МАСКИ В ФОРМЕ
const elements = document.querySelectorAll('#phone-input');
console.log(elements)
const maskOptions = {
    mask: '+{7} (000) 000-00-00',
}

for (let i = 0; i < elements.length; i++) {
    const originalPlaceholder = elements[i].placeholder;

    elements[i].addEventListener('mouseover', function () {
        this.placeholder = '+7 (999) 999-99-99'
    })

    elements[i].addEventListener('mouseout', function () {
        this.placeholder = originalPlaceholder;
    })


    elements[i].addEventListener('focus', function () {
        maskOptions.lazy = false;

        if (!this.mask) {
            this.mask = new IMask(this, maskOptions);
        }
    });

    elements[i].addEventListener('blur', function () {
        if (this.mask) {
            this.mask.destroy();
            this.mask = null;
        }

        let valueWithoutPrefix = this.value.replace(/^\+7|^\8/, '');

        if (/[0-9]/.test(valueWithoutPrefix)) {
            return;
        } else {
            this.value = "";
        }
    });
}