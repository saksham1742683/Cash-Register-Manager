const billAmount = document.querySelector("#bill-amount");
console.log("🚀 ~ billAmount:", billAmount)
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const out_message = document.querySelector("#message");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

const noOfNotes =document.querySelectorAll(".no-of-notes")

// const tableElements = document.querySelectorAll('.table-element')
checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();

  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      // calculating notes to be given
      calculateChange(amountToBeReturned);

    } else {
      showMessage(
        "the cash provided should atleast be equal to the bill amount"
      );
    }
  } else {
    showMessage("invalid bill amount");
  }
});

function hideMessage() {
  out_message.style.display = "none";
}
function calculateChange(amount) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amount/availableNotes[i]);
    amount %=availableNotes[i];
    console.log(numberOfNotes);
    noOfNotes[i].innerText=numberOfNotes;
  }
}

function showMessage(message) {
  out_message.style.display = "block";
  out_message.innerText = message;
}

