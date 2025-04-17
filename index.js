const CURRENCY = {
  USD_TO_UAH: 37.37,
  EUR_TO_UAH: 40.0,
};

const converterForm = document.querySelector("#currency-converter-form");

converterForm.addEventListener('submit', converterHandler);

function converterHandler(event) {
  event.preventDefault();
  const amount = Number(document.querySelector('#amount').value);
  const currency = document.querySelector('#currency').value;

  let convertedAmount;
  if (currency === "USD") {
    convertedAmount = amount * CURRENCY.USD_TO_UAH;
  } else if (currency === "EUR") {
    convertedAmount = amount * CURRENCY.EUR_TO_UAH;
  }
  const resultDiv = document.querySelector('#result');
  resultDiv.innerHTML = `${amount} ${currency} = ${convertedAmount} UAH`;
}
