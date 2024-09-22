// СКРИПТ ДЛЯ КАРТЫ БЛОКА КОНТАКТЫ 
ymaps.ready(function () {
    const contactsMap = new ymaps.Map("contacts-map", {
        center: [54.775006, 56.019577],
        zoom: 17,
        controls: [],
    },
        { suppressMapOpenBlock: true },
        {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemarkWithContent2 = new ymaps.Placemark(
            [54.775179, 56.022966], {
            balloonContent: "г. Уфа, ул. Блюхера, 2/1"
        }, {
            // Опции
            preset: "islands#blueFactoryIcon",
            iconColor: '#ff0000',

            // Размеры метки
            iconImageSize: [50, 65],
            // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки)
            iconImageOffset: [-20, -57],

        });
    // блокировка передвижения карты
    contactsMap.behaviors.disable('drag');
    contactsMap.geoObjects.add(myPlacemarkWithContent2);

    function updateMapCenter() {
        const windowWidth = window.innerWidth;
        let newCenterContactsMap, newZoomContactsMap, newCenterMyMap, newZoomMyMap;

        if (windowWidth <= 847) {
            newCenterContactsMap = [54.777279, 56.022686];
            newZoomContactsMap = 16;
        }
        else if (windowWidth <= 500) {
            newCenterContactsMap = [54.775979, 56.022966];
        } else {
            newCenterContactsMap = [54.775006, 56.019577];
            newZoomContactsMap = 17;
        }

        contactsMap.setCenter(newCenterContactsMap, newZoomContactsMap);
    }

    // Обновление центра карты при загрузке страницы
    updateMapCenter();

    // Обновление центра карты при изменении размера окна
    window.addEventListener('resize', updateMapCenter);
});