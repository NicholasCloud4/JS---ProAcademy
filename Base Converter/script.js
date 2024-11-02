let txtNumber = document.getElementById('txtNumber');
let baseDDL = document.getElementById('base');
let btnConvert = document.getElementById('btnConvert');
let spanE1 = document.getElementById('convertedValue');

btnConvert.addEventListener("click", function () {
    let num = parseInt(txtNumber.value);
    let base = parseInt(baseDDL.value);

    if (isNaN(num)) {
        spanE1.innerHTML = "Please enter a valid number";
        spanE1.style.color = "red";
    } else {
        let convertedNum = num.toString(base);
        spanE1.innerHTML = convertedNum;
    }
})