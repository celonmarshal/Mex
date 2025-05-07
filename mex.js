document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', function(event) {
	if (event.keyCode == 123 || // F12
		(event.ctrlKey && event.shiftKey && event.keyCode == 73)) { 
		event.preventDefault();
	}
});


// Get the current date
const currentDate = new Date();
// Format the date as DD/MM/YYYY
const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const year = currentDate.getFullYear();

const formattedDate = `${day}/${month}/${year}`;
const dateElement = document.getElementById('currentDate');

dateElement.textContent = formattedDate;

// Exchange rates
const exchangeRates = {
    "NGN": { "NGN": 1, "GHS": 0.0086},
    "GHS": { "GHS": 1, "NGN": 106.0}
};

// Function to get the current date in readable format
function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
}

function convertCurrency() {
    const fromCurrency = document.getElementById('convertFromCurrency').value;
    const toCurrency = document.getElementById('convertToCurrency').value;
    const amountToConvert = parseFloat(document.getElementById('amountToConvert').value);

    if (isNaN(amountToConvert) || amountToConvert <= 0) {
        alert('Please enter a valid amount to convert');
        return;
    }
    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amountToConvert * rate;
    // Append the currency symbol and display the current date
    document.getElementById('convertedAmount').value = convertedAmount.toFixed(2) + ' ' + toCurrency;
    document.getElementById('conversionDate').innerText = `Conversion performed on: ${getCurrentDate()}`;
}

function calculateAmountToSend() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const desiredAmount = parseFloat(document.getElementById('desiredAmount').value);

    if (isNaN(desiredAmount) || desiredAmount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    const rate = exchangeRates[fromCurrency][toCurrency];
    const amountToSend = desiredAmount / rate;
    document.getElementById('amountToSend').value = amountToSend.toFixed(2) + ' ' + fromCurrency;
    document.getElementById('calculationDate').innerText = `Calculation performed on: ${getCurrentDate()}`;
}





