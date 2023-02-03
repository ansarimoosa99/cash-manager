const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-amount");

const checkButton = document.querySelector("#check");
const message = document.querySelector("#message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillandCashAmount(){
    console.log("fdkjfdf");
    hideMessage();
    if(billAmount.value > 0){
            if(cashGiven.value > billAmount.value){
                const remainingAmount = cashGiven.value - billAmount.value;
                notesToBePaid(remainingAmount);
            }
            else{
                showMessage("Do you want to wash dishes?");
            }
    }else{
        showMessage("Bill value should be greater than 0");
    }
});

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText=msg;
}

function notesToBePaid(remainingAmount){
    for( let i = 0; i < availableNotes.length; i++){
        const notesCount = Math.trunc(remainingAmount / availableNotes[i]);
       // console.log(notesCount);
        remainingAmount = remainingAmount % availableNotes[i];      
        noOfNotes[i].innerText = notesCount;
    }
}
