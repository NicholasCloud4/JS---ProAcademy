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
/*
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

*/

//JavaScript Promises
//producing code (Producing data)
/*
let promise = new Promise(function (resolved, rejected) {

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "data1.txt", true);

    xhr.send();

    xhr.onload = function () {
        if (xhr.status === 200) {
            resolved(xhr.responseText);
        } else {
            rejected("Something went wrong");
        }
    }
});

//consuming code (Consuming Data)
promise.then(function (data) {
    console.log(data)
})

promise.catch(function (error) {
    console.log(error)
})
*/


//The fetch API
//MOdern way of making AJAX request
/*
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
    */

// function getCountry(country) {
//     //Make AJAX Request
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(function (response) {
//             console.log(response)
//             //json method returns a promise
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//             displayCountry(data[0])
//         })
//         .catch(function (error) {
//             console.log(error)
//         })
// }

// getCountry("usa");
// getCountry("brazil");
// getCountry("south korea")



/*
// Avoid callback hell with Promises
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

//If the promise is resolved
//1. The then method will be called
//2. To the callback function of then method, promise will
//   pass the resolved data
//3. callback function of the then method is executed

function getCountry() {
    //Make AJAX Request
    fetch(`https://restcountries.com/v3.1/name/usa`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayCountry(data[0])
            return fetch(`https://restcountries.com/v3.1/name/brazil`)
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayCountry(data[0])
            return fetch(`https://restcountries.com/v3.1/name/south korea`)
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayCountry(data[0])
        })
        .catch(function (error) {
            console.log(error)
        })
}

getCountry();
*/



/*
// Handling Rejected Promises
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


function helperFunction(response) {
    if (!response.ok) {
        throw new Error(`Country not found ${response.status}`)
    }
}

//If the promise is resolved
//1. The then method will be called
//2. To the callback function of then method, promise will
//   pass the resolved data
//3. callback function of the then method is executed

function getCountry() {
    //Make AJAX Request
    fetch(`https://restcountries.com/v3.1/name/usa`)
        .then(function (response) {
            console.log(response)
            helperFunction(response);
            return response.json();
        })
        .then(function (data) {
            displayCountry(data[0])
            return fetch(`https://restcountries.com/v3.1/name/brazil`)
        })
        .then(function (response) {
            helperFunction(response);
            return response.json();
        })
        .then(function (data) {
            displayCountry(data[0])
            return fetch(`https://restcountries.com/v3.1/name/south korea`)
        })
        .then(function (response) {
            helperFunction(response);
            return response.json();
        })
        .then(function (data) {
            displayCountry(data[0])
        })
        .catch(function (error) {
            console.log(error)
            countriesContainer.insertAdjacentText("beforebegin", `Something went wrong: ${error.message} Please Try Again!`)
        })
        .finally(function () {
            console.log("Finally method called!")
        });
}

document.getElementById("btn-load")
    .addEventListener("click", function () {
        getCountry();
    })
*/


/*
//understanding Callback Queue VS. Microtask Queue
console.log("Program starts here.");
setTimeout(function () {
    console.log("setTimeout callback executed");
}, 0)
Promise.resolve("Promise resolved")
    .then(function (data) {
        console.log(data);
        for (let i = 0; i < 1000000000; i++) { }
    })
console.log("Program ends here.");
*/



//Promisifying geolocation API 
//Geolocation API gets the current cordinates of a user 
// navigator.geolocation.getCurrentPosition(
//     (position) => {
//         console.log(position);
//     },
//     (error) => {
//         console.log(error);
//     }
// );


/*
//Promisifying Geolocation API
//1. get the current coordinates of the user
//2. get the country in which the user is currently located
//3. display the information related to that country in webpage
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

let getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}
let displayUserCountry = async function () {

    //1. get the current coordinates of the user
    let position = await getPosition()
    console.log(position);
    let { latitude } = position.coords;
    let { longitude } = position.coords;

    //2. get the country in which the user is currently located
    let geoResponse = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
    let geoData = await geoResponse.json();

    //3. get the information related to that country
    let countryResponse = await fetch(`https://restcountries.com/v3.1/name/${geoData.country}`)
    let countryData = await countryResponse.json();

    //4. display the information related to that country in webpage
    displayCountry(countryData[0]);
    console.log(countryData[0])
}

displayUserCountry();
*/

/*
//JavaScript async await - LOOk at above code
// async - executes a function asynchronously & returns a promise
// await - waits for a promise to resolve

let getCountryInfo = async function () {
    let response = await fetch(`https://restcountries.com/v3.1/name/usa`)
    let data = await response.json();
    console.log(data)
}

getCountryInfo();
console.log("Program ends here");
*/


//Error handling with try... catch
/*
try {
    let x = 10;
    const y = "Hello World!";
    y = 99;
}
catch (error) {
    console.log(error);
}
console.log("HAVE A NICE DAY!")
*/


let getCountryInfo = async function () {
    try {
        let response = await fetch(`https://restcountries.com/v3.1/name/usa`)
        let data = await response.json();
        console.log(data)
    }
    catch (error) {
        console.log("Error occured: " + error);
    }
}

document.getElementById("btn-load").addEventListener("click", getCountryInfo);
