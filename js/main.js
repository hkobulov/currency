var elForm = document.querySelector('.form');
var elChooseCurrency = document.querySelector('.form__currency-choose');
var elUserMoney = document.querySelector('.user__value');

// Choose currency

var elChooseUZS = document.querySelector('.form_currency-type-uzs');
var elChooseRUBL = document.querySelector('.form_currency-type-rubl');
var elChooseUSD = document.querySelector('.form_currency-type-usd');
var elChooseEURO = document.querySelector('.form_currency-type-euro');


// Result Currency
var elCurrencyUZS = document.querySelector('.form-list__item-sum');
var elCurrencyRUBL = document.querySelector('.form-list__item-rubl');
var elCurrencyUSD = document.querySelector('.form-list__item-usd');
var elCurrencyEURO = document.querySelector('.form-list__item-euro');

// VALUE

// UZS
var UZS_TO_RUBL = 0.0069;
var UZS_TO_USD = 0.000094;
var UZS_TO_EURO = 0.000079;

// RUBL
var RUBL_TO_UZS = 145.74;
var RUBL_TO_USD = 0.096;
var RUBL_TO_EURO = 0.012;

// USD
var USD_TO_UZS = 10666.47;
var USD_TO_RUBL = 73.19; 
var USD_TO_EURO = 0.85;

// EURO
var EURO_TO_UZS = 12602.11;
var EURO_TO_RUBL = 86.47;
var EURO_TO_USD = 1.18;

elForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    var chooseCurrency = elChooseCurrency.value;
    var userValue = elUserMoney.value;
    
    // Selecting
    var selectUzs = elChooseUZS.value;
    var selectUsd = elChooseUSD.value;
    var selectEuro = elChooseEURO.value;
    var selectRubl = elChooseRUBL.value;
    
    
    if(chooseCurrency === selectUzs){
        elCurrencyUZS.textContent = userValue + ' UZS';
        elCurrencyRUBL.textContent = userValue * UZS_TO_RUBL + ' RUBL';
        elCurrencyUSD.textContent = userValue * UZS_TO_USD + ' USD';
        elCurrencyEURO.textContent= userValue * UZS_TO_EURO + 'EURO';
    } else if (chooseCurrency === selectRubl){
        elCurrencyRUBL.textContent = userValue + ' RUBL';
        elCurrencyUZS.textContent = userValue * RUBL_TO_UZS + ' UZS';
        elCurrencyUSD.textContent = userValue * RUBL_TO_USD + ' USD';
        elCurrencyEURO.textContent= userValue * RUBL_TO_EURO + ' EURO';
    } else if (chooseCurrency === selectUsd){
        elCurrencyUSD.textContent = userValue + ' USD';
        elCurrencyUZS.textContent = userValue * USD_TO_UZS + ' UZS';
        elCurrencyRUBL.textContent = userValue * USD_TO_RUBL + 'RUBL';
        elCurrencyEURO.textContent= userValue * USD_TO_EURO + ' EURO';
    } else if(chooseCurrency === userValue){
        elCurrencyEURO.textContent= userValue + ' EURO';
        elCurrencyUZS.textContent = userValue * EURO_TO_UZS + ' UZS';
        elCurrencyRUBL.textContent = userValue * EURO_TO_RUBL + ' RUBL';
        elCurrencyUSD.textContent = userValue * EURO_TO_USD + ' USD';   
    }
})