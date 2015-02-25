$(document).ready(function() {
    'use strict';

    $(function() {
        $('.planprices').formset({
            prefix: 'plans',
            deleteText: 'Remove price',
            addCssClass: 'btn btn-default',
            addText: 'Add another price',
            deleteCssClass: 'btn btn-default',
            added: changeCurrency,
      });
    });

    function displayLocationForm () {
        var choice = $('#id_is_online:checked').val();

        if (choice === 'on') {
            $('#location').hide();
            $('#onlineshop').show();
        } else {
            $('#location').show();
            $('#onlineshop').hide();
        }
    }

    function changeCurrency () {
        var currency = $('.formset-currency:first').val();
        $('.formset-currency:not(:first)').val(currency);
    }

    $(document).on('click', '.hasplan-check', function () {
        var n = $(this.checked).length;

        if (n === 0) {
            $(this).closest('.planprices').find('.hasplan').hide();
        } else {
            $(this).closest('.planprices').find('.hasplan').show();
        }
    });

    $('#id_is_online').on('change', displayLocationForm);
    displayLocationForm();
});
