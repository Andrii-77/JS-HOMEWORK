let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let choiceCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            choiceCurrency = item;
        }
    }
    let result = sumUAH / choiceCurrency.value;
    return result;
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));