$(document).ready(function(){

    $.validator.addMethod(
        "standartNumberFormat",
        function(value, element) {
            return /^(?<!\s)[0-9_+()@.-]*?(?!\s)$/.test(value);
        },
        "Неправильный формат"
    );
    $.validator.addMethod(
        "standartFormat",
        function(value, element) {
            return /^(?<!\s)[a-zA-Zа-яА-Яё_@.-]*?(?!\s)$/.test(value);
        },
        "Неправильный формат"
    );


    // popupRequest{
    $("#popupRequest").validate({
        rules: {
            popupLogin: {
                required: true,
            },
            popupPassword: {
                required: true,
            }
        },
        messages: {
            popupLogin: {
                required: "Это поле обязательное",
            },
            popupPassword: {
                required: "Это поле обязательное",
            }
        },
        errorPlacement: function(error, element) {
            element.parent().addClass("form__item--invalid");
            
            if(element.parent().children(".form__invalid").children("span")[0].innerText != error[0].innerText){
                element.parent().children(".form__invalid").children("span")[0].innerText = error[0].innerText;
                element.parent().children(".form__invalid").children("span")[0].classList.remove("form__span");
                element.parent().children(".form__invalid").children("span")[0].offsetWidth;
                element.parent().children(".form__invalid").children("span")[0].classList.add("form__span");
            }
            return true;
        },
        errorClass: "input--red",
    });
    validationObligatoryCheck($('input[name="popupName"]'))
    validationObligatoryCheck($('input[name="popupPhone"]'))
    // }
    // popupRequest{
    $("#popupRegisterRequest").validate({
        rules: {
            popupRegisterLogin: {
                required: true,
            },
            popupRegisterPassword: {
                required: true,
            }
        },
        messages: {
            popupRegisterLogin: {
                required: "Это поле обязательное",
            },
            popupRegisterPassword: {
                required: "Это поле обязательное",
            }
        },
        errorPlacement: function(error, element) {
            element.parent().addClass("form__item--invalid");
            
            if(element.parent().children(".form__invalid").children("span")[0].innerText != error[0].innerText){
                element.parent().children(".form__invalid").children("span")[0].innerText = error[0].innerText;
                element.parent().children(".form__invalid").children("span")[0].classList.remove("form__span");
                element.parent().children(".form__invalid").children("span")[0].offsetWidth;
                element.parent().children(".form__invalid").children("span")[0].classList.add("form__span");
            }
            return true;
        },
        errorClass: "input--red",
    });
    validationObligatoryCheck($('input[name="popupName"]'))
    validationObligatoryCheck($('input[name="popupPhone"]'))
    // }


    function validationObligatoryCheck(object){
        object.on('keyup', function() {
            if(object.val().length >= 1){
                if (object.valid()) {
                    object.parent().removeClass('form__item--invalid');
                    console.log(object.parent());
                }
            };            
        });
    }

    
});
    function popupFormAuthSuccess(message){
        const leaveRequestForm = document.querySelector("#popupRequest");
        const leaveRequestSubmit = leaveRequestForm.querySelector(".form__submit");

        removeInvalidClass(leaveRequestSubmit.children);

        leaveRequestSubmit.children[0].classList.add("form--invalid")

        leaveRequestSubmit.children[0].childNodes[3].innerHTML = message
        
    }
    function popupFormAuthFail(message){
        const leaveRequestForm = document.querySelector("#popupRequest");
        const leaveRequestSubmit = leaveRequestForm.querySelector(".form__submit");

        removeInvalidClass(leaveRequestSubmit.children);

        leaveRequestSubmit.children[1].classList.add("form--invalid")

        leaveRequestSubmit.children[1].childNodes[3].innerHTML = message

    }
    function popupFormRegisterSuccess(message){
        const leaveRequestForm = document.querySelector("#popupRegisterRequest");
        const leaveRequestSubmit = leaveRequestForm.querySelector(".form__submit");

        removeInvalidClass(leaveRequestSubmit.children);

        leaveRequestSubmit.children[0].classList.add("form--invalid")

        leaveRequestSubmit.children[0].childNodes[3].innerHTML = message
        
    }
    function popupFormRegisterFail(message){
        const leaveRequestForm = document.querySelector("#popupRegisterRequest");
        const leaveRequestSubmit = leaveRequestForm.querySelector(".form__submit");

        removeInvalidClass(leaveRequestSubmit.children);

        leaveRequestSubmit.children[1].classList.add("form--invalid")

        leaveRequestSubmit.children[1].childNodes[3].innerHTML = message

    }

    function removeInvalidClass(element){
        element[0].classList.remove("form--invalid")
        element[1].classList.remove("form--invalid")

    }
