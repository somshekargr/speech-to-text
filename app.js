window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let rec = new SpeechRecognition();

rec.interimResults = true;

let template = document.getElementById('template');

let p = document.createElement('p')

template.appendChild(p);

rec.addEventListener('result' , (e) => {
    let transcript = [...e.results].map(result => result[0]).map(result => result.transcript).join(' ');
if(e.results[0].isFinal){
    p = document.createElement('p')
    template = document.getElementById('template');
    template.appendChild(p).innerHTML = transcript;
}
console.log(transcript);
});
    rec.addEventListener('end' , rec.start);
    rec.start();  

    
