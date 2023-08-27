/*MÉTODO PARA SABER SE TA FUNCIONANDO O JAVASCRIPT

const convertButton = document.querySelector(".convert-button")

function convertValues(){
    console.log("funcionou!")
}

convertButton.addEventListener("click", convertValues)

/////////////////////////////////////////////////////*/

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() 

{
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//valor em real
    const currencyValueConverted = document.querySelector(".currency-value")//outras moedas


    const dolarToday = 5.2
    const euroToday = 6.2
    const yenToday = 0.033
    const ausToday = 3.13
    const bitcoinToday = 127.704 


    if (currencySelect.value == "dolar") // se o select estiver selecionado o valor de dolar, entre aqui
    {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"})
        .format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro")// se o select estiver selecionado o valor de euro, entre aqui
    {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency",currency: "EUR"})
        .format(inputCurrencyValue / euroToday)
    }
        
    if (currencySelect.value == "yen") // se o select estiver selecionado o valor de euro, entre aqui
    {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {style: "currency",currency: "JPY"})
        .format(inputCurrencyValue / yenToday)
    }

    if (currencySelect.value == "aus") // se o select estiver selecionado o valor de euro, entre aqui
    {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-AU", {style: "currency",currency: "AUD"})
        .format(inputCurrencyValue / ausToday)
    }

    if (currencySelect.value == "bit") // se o select estiver selecionado o valor de euro, entre aqui
    {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("", {style: "currency",currency: "BTC"})
        .format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency",currency: "BRL"})
    .format(inputCurrencyValue)//valor indo para debaixo da bandeira do brasil
    
    console.log(convertValues)

}


function changeCurrency(){
    const currencyName = document.getElementById("currency-name")//no get não vai ponto
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src="./assets/estados-unidos (1) 1.png"
    }

    if (currencySelect.value =="euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src="./assets/Euro.png"
    }

    if (currencySelect.value =="yen"){
        currencyName.innerHTML = "Yen"
        currencyImage.src="./assets/Euro.png"
    }

    if (currencySelect.value =="aus"){
        currencyName.innerHTML = "Dólar Australiano"
        currencyImage.src="./assets/Euro.png"
    }

    if (currencySelect.value =="bit"){
        currencyName.innerHTML = "BitCoin"
        currencyImage.src="./assets/Euro.png"
    }

    convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)