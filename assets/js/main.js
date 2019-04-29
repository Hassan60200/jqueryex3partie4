$(function () {

    $('form').submit(function(){
        var inputs = $('input'); // on selectionne les éléments des inputs


        $.each(inputs, function(){
        let input = this;
        $('small').remove();
            if (!input.validity.valid){
            var small = $('<small></small>');
            small.addClass('alert alert-danger');
            small.text(input.validationMessage);
            $(input).after(small) ;
        event.preventDefault();
        };
    },false);
});
});
