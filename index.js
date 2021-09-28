var input = document.getElementById("text-input");

var output = document.getElementById("text-output");

var button = document.getElementById("btn");



function errorHandler(error){
    console.log(error,"Some error occured");
    alert("Some error occured please try after some time ");
}
function fetching(){

    var inputText = input.value;

        fetch("https://api.funtranslations.com/translate/minion.json"+"?"+"text="+inputText)
        .then((response) => response.json())
        .then((data) => output.innerText = data.contents.translated)
        .catch((error) => errorHandler(error));
};
button.addEventListener("click",fetching);
