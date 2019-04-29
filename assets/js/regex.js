$(function(){
    var regexName = /^[A-Za-z-](([- ]?)[A-Za-z])*$/;
    var regexPhone = /^0[67][0-9]{8}/
    var regexMail = /^[a-zA-b][a-zA-Z0-9_\.-]+([_\.-]?[a-z])@[a-zA-Z0-9][a-zA-Z0-9_\.-]+\.[a-z]{2,5}/

    $('form').submit(function(){
        var nameTest = $('#frstName').val();
        var prenomTest = $('#lastName').val();
        var adresseTest = $('#adresse').val();
        var phoneTest = $('#cellPhone').val();
        if(name ==''){
            var small = $('<small></small>');
            small.addClass('alert alert-danger');
            small.text('Veuillez remplir le champ');
            $('#firstName').after(small) ;
        }
        else if (!regexName.test(nameTest)){
            var small = $('<small></small>');
            small.addClass('alert alert-danger');
            small.text('Saisie incorrecte');
            $('#firstName').after(small) ;
        }
          event.preventDefault();
        })
    });
