let textBox = document.querySelectorAll(".textbox");
let percButt = document.querySelectorAll("input[name='percentage']");
let percText = document.querySelector("#percText");
let tipNum = document.querySelector(".tipNum");
let totalNum = document.querySelector(".totalNum");
let calcButt = document.querySelector(".calcButt");
let resetButt = document.querySelector(".resetButt");

let bill = 0, nop = 0, percentage = 0, totalAmountPerP = 0, tipAmountPerP = 0, total = 0, tipTotal = 0;


        // CALCULATE BUTTON FUNCTIONS

const calculate = () => {
    tipTotal = bill * percentage;
    tipAmountPerP = tipTotal / nop;
    total = bill + tipTotal;
    totalAmountPerP = total / nop; 
}

const update = (tipAmountPerP, totalAmountPerP) =>{
    tipNum.innerText = `${tipAmountPerP.toFixed(2)}`;
    totalNum.innerHTML = `${totalAmountPerP.toFixed(2)}`;
}

        // RESET BUTTON FUNCTIONS   

const resetRadioButt = () => {
    for (let pb of percButt)
        pb.checked = false;
}

const resetTB = () => {
    for (let tb of textBox)
        tb.value = '';
    percText.value = '';
}

const resetValue = () => {
    bill = 0;
    nop = 0;
    percentage = 0;
    totalAmountPerP = 0;
    tipAmountPerP = 0;
    total = 0;
    tipTotal = 0;
}

const resetPage = () => {
    tipNum.innerHTML = '0.00';
    totalNum.innerHTML = '0.00';
}

const checkInputs = () => {
    if (bill > 0 && nop > 0 && percentage > 0){
        calcButt.disabled = false;
        resetButt.disabled = false;
    }
}


for (let percValue of percButt) {
    percValue.onchange = function() {
        percentage = parseFloat(percValue.value);
    }
}

percText.addEventListener("input", () => {
    percentage = parseFloat(percText.value / 100);
    resetRadioButt()
});


for (let i = 0; i < textBox.length; i++){
    textBox[i].addEventListener("input", () => {
        if (i === 0)
            bill = parseFloat(textBox[i].value);
        else if (i === 1)
            nop = parseFloat(textBox[i].value);
    });
}

calcButt.addEventListener("click", () => {
    calculate();
    update(tipAmountPerP, totalAmountPerP);
});

resetButt.addEventListener("click", () => {
    resetTB();
    resetRadioButt();
    resetValue();
    resetPage();
});