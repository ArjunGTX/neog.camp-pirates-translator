const btnTranslate = document.getElementById('btn-translate');
const textInput = document.getElementById('text-input');
const textOutput = document.getElementById('text-output');

function translate() {
    let text = textInput.value;
    let textUrl = 'https://api.funtranslations.com/translate/pirate.json?text='+text;
    fetch(textUrl)
        .then(response => {
            return response.json();
        })
        .then(jsonText => {
            let translatedText = jsonText.contents.translated;
            textOutput.value = translatedText;
        })
        .catch(err =>{
            console.log("error occurred : ", err);
        } 
        );
}

btnTranslate.addEventListener('click',translate);