let textBox = document.querySelectorAll(".textbox");
let percButt = document.querySelectorAll(".buttLabel");
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




for (let i = 0; i < percButt.length; i++){
    percButt[i].addEventListener("click", () => {
        percText.value = '';

        if (i === 0)
            percentage = 0.05;
        else if (i === 1)
            percentage = 0.10;
        else if (i === 2)
            percentage = 0.15;
        else if (i === 3)
            percentage = 0.25;
        else if (i === 1)
            percentage = 0.50;
    });
}


percText.addEventListener("input", () => {
    percentage = parseFloat(percText.value / 100);
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
    for (let tb of textBox)
        tb.value = '';
    percText.value = '';

    bill = 0;
    nop = 0;
    percentage = 0;
    totalAmountPerP = 0;
    tipAmountPerP = 0;
    total = 0;
    tipTotal = 0;

    tipNum.innerHTML = '0.00';
    totalNum.innerHTML = '0.00';
});