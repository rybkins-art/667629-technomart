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