var input = document.getElementById("input-text");
var btn_translate = document.getElementById("btn");
var outputdiv = document.getElementById("output");


var serverURL = "https://api.funtranslations.com/translate/minion.json";

function translateURL(text){
    return serverURL  + "?" + "text=" + text;
}
function clickHandler(text) {

    var inputText = input.value;
    fetch(translateURL(inputText))
        .then((response) => response.json())
        .then((data) => {
          var translatedText = data.contents.translated;
          outputdiv.innerText = translatedText;
        })
        .catch((error) => console.log("can't fetch data"));
}

btn_translate.addEventListener("click", clickHandler)