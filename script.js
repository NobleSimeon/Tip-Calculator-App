console.log("It is working")

const totalBill = document.getElementById("total-bill");
const tipsBtn = document.querySelectorAll(".tips");
const customTip = document.querySelector(".custom-tip");
const numOfPeopleInput = document.getElementById("number-of-people");
const errorMsg = document.querySelector(".error")
const tipPerPerson = document.querySelector(".tip-per-person");
const totalPerPerson = document.querySelector(".total-per-person");
const reset = document.querySelector(".reset");

tipsBtn.forEach(item => {
    item.addEventListener("click", handleclick)
})

let tipvalue = 0
let billValue = 0
let totalPeople = 0
let tipAmount = 0
let total = 0

totalBill.addEventListener("input", function(item) {
    billValue = parseFloat(item.target.value)
    calculate()
})


customTip.addEventListener("input", function(item){
    tipvalue = parseFloat(item.target.value)/100;
    tipsBtn.forEach(val => val.classList.remove("active"));
    calculate()
})

numOfPeopleInput.addEventListener("input", function(item) {
    totalPeople = parseInt(item.target.value);

    if(totalPeople < 1) {
        errorMsg.style.display = "flex";
        numOfPeopleInput.classList.add("error-alert")
    } else {
        errorMsg.style.display = "none";
        numOfPeopleInput.classList.remove("error-alert")
    }
    calculate()
})




function handleclick(e) {
    tipsBtn.forEach(val => {
        
        val.classList.remove("active")
        if (val.innerText == e.target.innerText) {
            val.classList.add("active")
            tipvalue = parseFloat(val.innerText)/100;
            customTip.value = "";
        }
    })
    calculate()
}


function calculate() {
    if (tipvalue && billValue && totalPeople) {
        reset.classList.remove("not-active")
        tipAmount = (tipvalue * billValue) / totalPeople;
    
        total = billValue / totalPeople + tipAmount;
    }

    tipPerPerson.innerText = `$${tipAmount.toFixed(2)}`
    totalPerPerson.innerText = `$${total.toFixed(2)}`
}


reset.addEventListener("click", () => {
    totalBill.value = "";
    tipsBtn.forEach(val => val.classList.remove("active"));
    customTip.value = "";
    numOfPeopleInput.value = "";
    tipPerPerson.innerText = "$0.00";
    totalPerPerson.innerText = "$0.00";
    reset.classList.add("not-active");
    reset.blur();
})