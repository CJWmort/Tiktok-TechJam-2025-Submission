//code written by Chin Jun Wen
const checkBtn = document.getElementById('checkBtn');
const resetBtn = document.getElementById('reset');
//accessing the prompt textarea
const prompt = document.getElementById('prompt');
const result = document.getElementById('result');

checkBtn.addEventListener('click', function(){
    const promptResult = prompt.value;
    const warning = document.getElementById("warning");
    result.value = promptResult
    //Check for phone number info
    .replaceAll(/[689]{1}\d{7}/g, "*[PHONE]*") 
    //Check for nric info
    .replaceAll(/[FGST]{1}\d{7}[A-Z]{1}/ig, "*[NRIC]*")
    //Check for email info
    .replaceAll(/([A-Z0-9_\.\-\+])+\@(([A-Z0-9\-])+\.)+([A-Z0-9]{2,4})+/ig, "*[EMAIL]*")
    //Check for credit card number info
    .replaceAll(/(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})/g, "*[$CARD]*")
    if (promptResult != result.value){
        warning.style.visibility = "visible"
        result.style.borderColor = "red"
    } else{
        warning.style.visibility = "hidden"
        result.style.borderColor = "green"
    }
})
//refresh the page
resetBtn.addEventListener('click', function(){
    location.reload();
})
//copy to clipboard for user to paste to GenAI
copyBtn.addEventListener('click', function(){
    var copyText = document.getElementById('result');
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    // Copy the prompt text inside the redacted text field
    navigator.clipboard.writeText(copyText.value);
    alert("Redacted Prompt Copied to Clipboard.")
})