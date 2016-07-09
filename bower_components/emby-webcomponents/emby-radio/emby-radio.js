﻿define(['css!./emby-radio', 'registerElement'], function () {

    var EmbyRadioPrototype = Object.create(HTMLInputElement.prototype);

    function onKeyDown(e) {

        // Don't submit form on enter
        if (e.keyCode == 13) {
            e.preventDefault();

            this.checked = true;

            return false;
        }
    }

    EmbyRadioPrototype.attachedCallback = function () {

        if (this.getAttribute('data-radio') == 'true') {
            return;
        }

        this.setAttribute('data-radio', 'true');

        this.classList.add('mdl-radio__button');

        var labelElement = this.parentNode;
        //labelElement.classList.add('"mdl-radio mdl-js-radio mdl-js-ripple-effect');
        labelElement.classList.add('mdl-radio');
        labelElement.classList.add('mdl-js-radio');
        labelElement.classList.add('mdl-js-ripple-effect');

        var labelTextElement = labelElement.querySelector('span');
        labelElement.insertAdjacentHTML('beforeend', '<span class="mdl-checkbox__focus-helper"></span><span class="checkboxOutline"><span class="mdl-checkbox__tick-outline"></span></span>');

        labelTextElement.classList.add('radioButtonLabel');

        this.addEventListener('keydown', onKeyDown);
    };

    document.registerElement('emby-radio', {
        prototype: EmbyRadioPrototype,
        extends: 'input'
    });
});