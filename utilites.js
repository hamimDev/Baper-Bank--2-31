function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldNumber ;
}


function getElementValueById(elementId){
    const elementField = document.getElementById(elementId);
    const elementString = elementField.innerText;
    const elementNumber = parseFloat(elementString);
    return elementNumber;

}

function shoeAll(elementId , newValue){
    const shoeElement = document.getElementById(elementId);
    shoeElement.innerText = newValue ;
}