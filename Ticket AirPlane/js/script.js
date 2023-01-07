

let countrySelectBox = document.querySelector(".countrySelect");
let citySelect = document.querySelector(".citySelect");

let countriesData = {
  Iran: ["تبریز", "تهران", "اردبیل", "خلخال", "گیلان"],
  Turkey: ["آلانیا", "انتالیا", "ازمیر", "استانبول"],
  US: ["لاس وگاس", "سان فرانسیسکو", "نیویورک"],
};

countrySelectBox.addEventListener("change",function(){
  if(countrySelectBox.value === "انتخاب"){
    citySelect.innerHTML = "";
    citySelect.innerHTML += "<option>انتخاب</option>";
  }else{
    let mainCountryName = countrySelectBox.value;
    let mainCountryCities = countriesData[mainCountryName];
    citySelect.innerHTML = "";
 
    mainCountryCities.forEach(function(city){
      citySelect.innerHTML += "<option> "+city+ "</option>"
    });

  }
});
