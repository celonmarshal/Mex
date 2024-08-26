
   const d = new Date("2024-8-26");
    document.getElementById("demo").innerHTML = d;

        // code to disable right-click
		document.addEventListener('contextmenu', event => event.preventDefault());
		document.addEventListener('keydown', function(event) {
			if (event.keyCode == 123 || // F12
				(event.ctrlKey && event.shiftKey && event.keyCode == 73)) { // Ctrl+Shift+I
				event.preventDefault();
			}
		});

		//  exchange rates conversion
		const exchangeRates = {
            "NGN": { "NGN": 1, "GHS":0.00985 },
            "GHS": { "GHS": 1, "NGN": 96.0},
        };

        function convert() {
            const fromCurrency = document.getElementById('fromCurrency').value;
            const toCurrency = document.getElementById('toCurrency').value;
            const amount = parseFloat(document.getElementById('amount').value);
            
            if (isNaN(amount)) {
                document.getElementById('result').innerText = "Please enter a valid amount.";
                return;
            }
            
            const rate = exchangeRates[fromCurrency][toCurrency];
            const convertedValue = amount * rate;
            document.getElementById('result').innerText = 
                `You will receive: ${convertedValue.toFixed(2)} ${toCurrency}`;
        }
    
