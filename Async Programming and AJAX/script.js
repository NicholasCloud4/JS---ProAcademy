/*
*Synchronous & Asynchronous Programming
*
*/
//Get access to Get Data button

/*

let fetchBtn = document.getElementById("fetchbtn");
fetchBtn.addEventListener("click", getProducts);

let div = document.getElementById("products");

//Create getData function
function getProducts() {
    //1. Create an XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    //2. create the request
    // method, url, sync/async
    xhr.open("GET", "products.json", true)

    //3. Send the request
    xhr.send();

    //4. When data is not completely loaded yet
    xhr.onprogress = function () {
        div.textContent = "Loading...";
    }


    //5. When data is completely loaded
    xhr.onload = function () {

        let products = JSON.parse(xhr.responseText);
        let { arrayOfProducts } = products;

        arrayOfProducts.forEach((element) => {
            let { name, price, description } = element;
            div.innerHTML += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${price}</h6>
                    <p class="card-text">${description}</p>
                </div>
            </div>
            `
            div.insertAdjacentElement("afterbegin");

        });

        console.log(arrayOfProducts);
        // div.textContent = xhr.responseText;
    }
}
*/



//AJAX REQUEST TO WEB API
/*
let countriesContainer = document.querySelector(".countries")
function getCountry(countryName) {

    //1. Create an XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    //2. create the request
    xhr.open("GET", `https://restcountries.com/v3.1/name/${countryName}`, true);

    //3. Send the request
    xhr.send();

    //4. When data is not completely loaded yet
    xhr.addEventListener("load", function () {
        let data = JSON.parse(xhr.responseText);
        // can rewrite the above from: 
        // let data = JSON.parse(xhr.responseText);
        // to this: let countryData = data[0];
        let countryData = data[0];

        let html = `
        <article class="country">
        <div class="country_data">
          <h3 class="country_name">${Object.values(countryData.name)[0]}</h3>
          <h4 class="country_region">${countryData.region}</h4>
          <p class="country_row"><span>👫</span>${(countryData.population / 1000000).toFixed(2)} M people</p>
          <p class="country_row"><span>🗣️</span>${Object.values(countryData.languages)[0]}</p
          <p class="country_row"><span>💰</span>${Object.values(countryData.currencies)[0].name}</p
        </div>
      </article>
        `

        countriesContainer.insertAdjacentHTML("beforeend", html);
        console.log(countryData);
        console.log(countryData.flags.png);


    })

}

getCountry("usa");
getCountry("brazil");
getCountry("south korea")
*/


//WHAT is callback hell
let countriesContainer = document.querySelector(".countries")
function displayCountry(data) {
    let html = `
        <article class="country">
        <div class="country_data">
          <h3 class="country_name">${Object.values(data.name)[0]}</h3>
          <h4 class="country_region">${data.region}</h4>
          <p class="country_row"><span>👫</span>${(data.population / 1000000).toFixed(2)} M people</p>
          <p class="country_row"><span>🗣️</span>${Object.values(data.languages)[0]}</p
          <p class="country_row"><span>💰</span>${Object.values(data.currencies)[0].name}</p
        </div>
      </article>
        `

    countriesContainer.insertAdjacentHTML("beforeend", html);

}

function makeAjaxRequest(countryName) {
    //1. Create an XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    //2. create the request
    xhr.open("GET", `https://restcountries.com/v3.1/name/${countryName}`, true);

    //3. Send the request
    xhr.send();

    return xhr;

}

function getCountry() {

    //Make an ajax request for usa
    let req1 = makeAjaxRequest("usa")
    req1.addEventListener("load", function () {
        let [data] = JSON.parse(req1.responseText);
        displayCountry(data);


        //Make another request for brazil
        let req2 = makeAjaxRequest("brazil");
        req2.addEventListener("load", function () {
            let [data] = JSON.parse(req2.responseText);
            displayCountry(data);

            //Make another request for south korea
            let req3 = makeAjaxRequest("south korea");
            req3.addEventListener("load", function () {
                let [data] = JSON.parse(req3.responseText);
                displayCountry(data);
            })
        })
    })
}

getCountry();
