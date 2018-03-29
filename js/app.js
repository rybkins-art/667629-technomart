'use strict';

document.ready = (function() {
    // Вешаем обработчик на открытие модального окна
    let $modalBtn = document.querySelectorAll('[data-modal-target]');
    if ($modalBtn) {
        $modalBtn.forEach($this => {
            $this.addEventListener('click', function(evt) {
                if (evt) {
                    evt.preventDefault();
                }
                let $modal = document.querySelector(`[data-modal=${$this.dataset.modalTarget}]`);
                if ($modal) {
                    $modal.classList.add("modal-visible");
                }
            });
        });
    }

    // Вешаем обработчик закрытия модального окна
    let $modalClose = document.querySelectorAll('[data-modal-close]');
    if ($modalClose) {
        $modalClose.forEach($this => {
            $this.addEventListener('click', function(evt) {
                if (evt) {
                    evt.preventDefault();
                }
                let $modal = document.querySelector('.modal-visible');
                if ($modal) {
                    $modal.classList.remove("modal-visible");
                }
            });
        });
    }
})();

function addToBasket(evt) {
    if (evt) {
        evt.preventDefault();
    }
    let $modal = document.querySelector('[data-modal=basket-modal]');
    if ($modal) {
        $modal.classList.add("modal-visible");
    }
}

//Карта
var yandexMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    yandexMap = new ymaps.Map('ya-map', {
        center: [59.938631, 30.323055],
        zoom: 15,
    }, {
        searchControlProvider: 'yandex#search'
    });
    let myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
        hintContent: 'ул. Б. Конюшенная, д. 19/8'
    });
    yandexMap.geoObjects.add(myPlacemark);
}