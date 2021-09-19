let textBox = document.getElementsByClassName("textbox");
let percButt = document.getElementsByClassName("buttLabel");
let percText = document.getElementById("percText");
let tipNum = document.getElementsByClassName("tipNum");
let totalNum = document.getElementsByClassName("totalNum");
let resetButt = document.getElementsByClassName("restButt");

let percentage = 0, bill = 0, nop = 0, totalAmount, tipAmount;

for (let i = 0; i < percButt.length; i++){
    percButt[i].addEventListener("click", function(){
        percButt[i].classList.add("clicked");
    
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
    update();
}


percText.addEventListener('input', function(){
    percentage = parseInt(this.value);
    update();
});

for (let i = 0; i < textBox.length; i++){
    textBox[i].addEventListener('input', function(){
        if(i == 0)
            bill = textBox[i].value;
        else if(i == 1)
            nop = textBox[i].value;
    });
    update();
} 


function update() {
	tipAmount = (parseFloat(bill) * percentage) / parseInt(nop);
	tipNum[0].innerText = tipAmount.toFixed(2);

	totalAmount = (parseFloat(bill) + parseFloat(bill) * percentage) / parseInt(nop);
	totalNum[0].innerText = totalAmount.toFixed(2);
}