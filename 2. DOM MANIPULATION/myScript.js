// let p = document.getElementById("intro");
// p.textContent = "HELLO"
// console.log(p.textContent);


// let p = document.querySelector("#intro");
// console.log(p);

// let h2 = document.querySelector("h2");
// h2.textContent = "JOKER"


// let strong = document.querySelector(".home-page-banner h1 strong");
// document.querySelector(".home-page-banner h1 strong").innerHTML = "WAKAKAK"
// console.log(strong);
// strong.textContent = "You have been hacked";

// let input = document.querySelector("#fname");
// input.value = "MY NAME";
// // console.log(input.value);

// let bannerDiv = document.querySelector(".home-page-banner");
// console.log(bannerDiv.style);
// bannerDiv.style.backgroundColor = "green";
// bannerDiv.style.color = "Orange"

let mainSectionArea = document.querySelector(".main-section-area");
// let selectedTab = "emi-calculator-page"

let homeContent = document.querySelector(".home-page");
let calcContent = document.querySelector(".emi-calculator-page");
let loanContent = document.querySelector(".apply-loan-page");

function calculateEMI() {
    let principal = document.getElementById('amount').value;
    let duration = document.getElementById('duration').value;
    let rate = document.getElementById('roi').value / 100 / 12;

    //calculate emi
    const emi = ((principal * rate * Math.pow(1 + rate, duration)) / (Math.pow(1 + rate, duration) - 1)).toFixed(2);

    //Total payable amount
    const paybleAmount = (emi * duration).toFixed(2);

    //alert('EMI: ' + emi + '. Total payable amount: ' + paybleAmount);

    showModal(emi, paybleAmount);
}

function showModal(emi, payableAmount) {
    const modalDiv = document.querySelector("#calculate-emi-modal");
    document.querySelector("#calculated-emi-cell").textContent = "$" + emi;

    document.querySelector("#calculated-payable-amount-cell").textContent = "$" + payableAmount;
    modalDiv.classList.remove("hide");
}
function hideModal() {
    const modalDiv = document.querySelector("#calculate-emi-modal");
    modalDiv.classList.add("hide");
}
document.querySelector(".close-modal-btn").addEventListener("click", hideModal);


function renderSelectedSection(selectedTab) {
    mainSectionArea.innerHTML = "";

    switch (selectedTab) {
        case "home-page":
            mainSectionArea.innerHTML = homeContent.outerHTML;
            console.log(homeContent);
            break;
        case "emi-calculator-page":
            mainSectionArea.innerHTML = calcContent.outerHTML;
            break;
        case "apply-loan-page":
            mainSectionArea.innerHTML = loanContent.outerHTML;
            break;
    }
}

renderSelectedSection("home-page")

//EVENT HANDLER PROPERTIES
let applyButton = document.querySelector(".apply-now-button");
applyButton.onclick = function () {
    alert("You have clicked apply now");
}

applyButton.onmouseover = function () {
    applyButton.style.backgroundColor = "transparent";
    applyButton.style.border = "2px solid orange";
}
applyButton.onmouseout = function () {
    applyButton.style.backgroundColor = "orange";
    applyButton.style.borderColor = "transparent"
}

//The addEventListener() method
let header = document.querySelector("header");

header.addEventListener("mouseover", function () {
    header.style.color = "black"
})

header.addEventListener("mouseout", function () {
    header.style.color = "white"
})

function ApplyForLoan(event) {
    event.preventDefault();
    console.log("button clicked")
    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    let email = document.querySelector("#email ").value;

    let occupation = document.querySelector("#occupation").value;

    let dob = document.querySelector("#dob").value;

    let gender = document.querySelector("input[name='gender']:checked").value;


    console.log(gender);
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        hideModal();
    }


})