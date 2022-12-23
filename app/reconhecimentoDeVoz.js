const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(evento) {
    chute = evento.results[0][0].transcript;
    exibeChuteNaTela(chute);
    chuteValido(chute);
    
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

// Quando o reconhecimento de voz parar, ele começa novamente, para o jogo continuar funcionando.
recognition.addEventListener('end', () => {
    recognition.start();
})