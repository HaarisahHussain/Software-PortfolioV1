// Function to open the modal
function openCalcFuncModal() {
    document.getElementById('modalOverlayCalcFunc').style.display = 'flex';
}

// Function to close the modal
function closeConversionModal() {
    document.getElementById('modalOverlayCalcFunc').style.display = 'none';
    // Clear input and result message when modal is closed
    document.getElementById('inputValue').value = '';
    document.getElementById('resultMessage').textContent = '';
}

// Function to handle conversions
function convertValue() {
    const conversionType = document.getElementById('conversionType').value;
    const value = parseFloat(document.getElementById('inputValue').value);
    const resultMessage = document.getElementById('resultMessage');

    if (isNaN(value)) {
        resultMessage.textContent = 'Please enter a valid number!';
        resultMessage.style.color = 'red';
        return;
    }

    let result;

    switch (conversionType) {
        case 'cmToInch':
            result = value / 2.54; // Convert cm to inches
            resultMessage.textContent = `${value} cm is equal to ${result.toFixed(2)} inches.`;
            resultMessage.style.color = 'green';
            break;
        case 'kgToPounds':
            result = value * 2.205; // Convert kg to pounds
            resultMessage.textContent = `${value} kg is equal to ${result.toFixed(2)} pounds.`;
            resultMessage.style.color = 'green';
            break;
        case 'gramsToOunces':
            result = value / 28.3495; // Convert grams to ounces
            resultMessage.textContent = `${value} grams is equal to ${result.toFixed(2)} ounces.`;
            resultMessage.style.color = 'green';
            break;
        default:
            resultMessage.textContent = 'Invalid conversion type!';
            resultMessage.style.color = 'red';
            break;
    }
}
