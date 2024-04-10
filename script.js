$(document).ready(function() {
    $('#calculate-btn').click(function() {
        var income = parseFloat($('#income').val());
        var taxRate = parseFloat($('#tax-rate').val());

        if (isNaN(income) || isNaN(taxRate)) {
            $('#result').text('Please enter valid numbers.');
        } else {
            var taxAmount = income * (taxRate / 100);
            var netIncome = income - taxAmount;
            $('#result').html('<p class="font-weight-bold">Tax Amount: $' + taxAmount.toFixed(2) + '</p>' +
                '<p class="font-weight-bold">Net Income: $' + netIncome.toFixed(2) + '</p>');
        }
    });
});