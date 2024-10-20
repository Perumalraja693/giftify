var incButton = document.getElementsByClassName("inc");
var decButton = document.getElementsByClassName("dec");
//increment
console.log(incButton, "bllll");
for (var i = 0; i < incButton.length; i++) {
    var button = incButton[i];
    button.addEventListener('click', function (event) {
        var btnClicked = event.target;
        var input = btnClicked.parentElement.children[1];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) + 1;
        input.value = newValue;
    })
}


//decrement
for (var i = 0; i < decButton.length; i++) {
    var button = decButton[i];
    button.addEventListener('click', function (event) {
        var btnClicked = event.target;
        var input = btnClicked.parentElement.children[1];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) - 1;
        if (inputValue == 1) {
            input.value = 1;
        }
        else {
            input.value = newValue;
        }
    })
}

// cart UserAggrement
function userAgreementApply(){
    document.getElementById("userAgreement").style="display:none;"
}
function UserAggrement(){
    document.getElementById("userAgreement").style="display:block;"


}