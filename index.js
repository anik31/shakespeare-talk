var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var btnReset = document.querySelector("#btn-reset");

var apiURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getFinalURL(text){
    return apiURL+"?text="+text;
}

function errorHandler(err){
    console.log("error:", err);
    alert("Something is wrong!!");
}

function clickHandler(){
    if(txtInput.value != ""){
        fetch(getFinalURL(txtInput.value))
        .then(response => response.json())
        .then(data => outputDiv.innerText = data.contents.translated)
        .catch(errorHandler)
    }
    else {
        outputDiv.innerText = "Please enter something to translate";
    }
}

btnTranslate.addEventListener("click",clickHandler);
btnReset.addEventListener("click",()=>{
    outputDiv.innerText = "";
    txtInput.value = "";
})