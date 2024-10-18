/*
    Make a function that converts RGB Decimal values into a Hexadecimal representation
*/
document.addEventListener("DOMContentLoaded", function() {
    const changeNumberButton = document.getElementById('change-numbers-button');

    alert("Esto es un conversor de RGB en Hexadecimal");

    

    changeNumberButton.addEventListener('click', pedirDatos);

    pedirDatos();
})

function pedirDatos() {
    alert("Introduce uno a uno los valores del color en RGB (Los valores mayores a 255 se pondran en 255, los menores a 0 y los omitidos se pondran a 0)");

    let rgbValues = [];

    let hexColor = "";
    
    rgbValues[0] = +prompt("Introduce el valor decimal del color rojo", 0);
    rgbValues[1] = +prompt("Introduce el valor decimal del color verde", 0);
    rgbValues[2] = +prompt("Introduce el valor decimal del color azul", 0);

    for (let i = 0; i < rgbValues.length; i++) {
        if (rgbValues[i] > 255) {
            rgbValues[i] = 255;
        }else if(rgbValues[i] < 0){
            rgbValues[i] = 0;
        }
        hexColor += convertToHex(rgbValues[i]);
    }

    updateDOM(rgbValues, hexColor);
}

function updateDOM(rgbArray, hexColor) {
    const RGBField = document.getElementById('numbers-introduced');
    const hexField = document.getElementById('number-in-hex');
    const showColorField = document.getElementById('show-color');

    RGBField.innerHTML = rgbArray[0] + ", " + rgbArray[1] + ", " + rgbArray[2];
    hexField.innerHTML = "#" + hexColor;
    showColorField.style.backgroundColor = "#" + hexColor;
}

function convertToHex(number) {
    
    number = number.toString(16);

    number = number.padStart(2, "0");

    number = number.toUpperCase();

    return number;
}