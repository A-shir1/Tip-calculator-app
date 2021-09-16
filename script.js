let textBox = document.getElementsByClassName("textbox");
let percButt = document.getElementsByClassName("buttLabel");
let percText = document.getElementById("percText");
let tipNum = document.getElementsByClassName("tipNum");
let totalNum = document.getElementsByClassName("totalNum");
let resetButt = document.getElementsByClassName("restButt");

let percentage = 0, bill = 0, nop = 0, totalAmount = 0, tipAmount = 0;

for (let i = 0; i < percButt.length; i++){
    percButt[i].addEventListener("click", function(){
        percText.value = '';

        if (i == 0)
            percentage = 0.05;
        else if (i == 1)
            percentage = 0.10;
        else if (i == 2)
            percentage = 0.15;
        else if (i == 3)
            percentage = 0.25;
        else if (i == 4)
            percentage = 0.50;
        
    });
}


percText.addEventListener('input', function(){
    percentage = parseInt(this.value);
});

for (let i = 0; i < textBox.length; i++){
    let tb = textBox[i];
    tb.addEventListener('input', function(){
        if (i == 0)
            bill = parseFloat(this.value);
            nop = parseInt(this.value);
        });
} 


if ((textBox[0].value != "") && (textBox[1].value != "") && (percentage != 0)){
    tipAmount = bill * percentage * nop;
    totalAmount = (bill + tipNum) / nop;
    
    tipNum.innerHTML = toString(tipAmount);
    totalNum.innerHTML = toString(totalAmount);
}

