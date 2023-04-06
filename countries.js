let searchBtn = document.getElementById("search-btn");
let countryinput = document.getElementById("countryInput");
searchBtn.addEventListener("click", () => {
   let countryName = countryinput.value;
   let URL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
   console.log(URL);
   fetch(URL)
   .then((response) => response.json())
   .then((data) => {
    //  console.log(data[0]);
    //  console.log(data[0].capital[0]);
    //  console.log(data[0].flags.svg);
    //  console.log(data[0].name.common);
    //  console.log(data[0].continents[0]);
    //  console.log(Object.keys(data[0].currencies)[0]);
    //  console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
    //  console.log(Object.values(data[0].languages).toString().split(", ").join(", "));

    results.innerHTML = `<img src = "${data[0].flags.svg}"
    id = "flag-img">
    <h2>${data[0].name.common}</h2>
    <div class = "wrapper">
    <div id = "data-wrapper">
    <h4>Capital City:</h4>
    <span>${data[0].capital[0]}</span>
    </div>
    </div>
    <div class = "wrapper">
    <div id = "data-wrapper">
    <h4>Continent:</h4>
    <span>${data[0].continents[0]}</span>
    </div>
    </div>
   <div class = "wrapper">
   <div id = "data-wrapper">
   <h4>Currency:</h4>
   <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
   </div>
   </div>
   <div class = "wrapper">
   <div id = "data-wrapper">
   <h4>Languages:</h4>
   <span>${Object.values(data[0].languages).toString().split( " , " ).join( " , " )}</span>
   </div>
   </div>
   `;
   }).catch(() => {
    if (countryName.length == 0){
      results.innerHTML = `<h3>Please input a country name!</h3>`
    }else{
      results.innerHTML = `<h3>Sorry, ${countryName} is not a country. Try again!</h3>`
    }
   })
});