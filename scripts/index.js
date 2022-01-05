function displayTipTotal(){
    // grab the inputted value of the bill total
    let billTotal = document.getElementById('bill-total').value;
    // grab the value of the selected radio button
    let tipSelected = document.querySelector('input[name="tip-selected"]:checked').value;
    // do the math to find the tip amount
    let tipAmount = billTotal*tipSelected;
        document.getElementById("tip-total").innerHTML
        // round to the nearest 2 decimals
                = "You should tip your server $"+tipAmount.toFixed(2)+"!";
}