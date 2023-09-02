
function inputFunction(inputId){

    const inputElement = document.getElementById(inputId);
    const inputValue = inputElement.value;
    const input = parseFloat(inputValue);
    inputElement.value = '';
    return input;
}

function setValuefunction(setId,setValue){

    const finalValue = document.getElementById(setId);
    finalValue.innerText = setValue;

}