// Evento de clic en el boton "decir"
document.getElementById("hablar").addEventListener("click", () => {
    decir(document.getElementById("texto").value);
});

//Funcion para realizar la sintesis de voz
function decir(texto){

    //crear un objeto de sintesis de voz y restablecer el texto a hablar
    const utterance = new SpeechSynthesisUtterance(texto);

    //Realizar la sintesis de voz 
    speechSynthesis.speak(utterance);

    //Ajustar el tono y la voz (nota: esta parte del codigo no funciona correctamente)
    texto.pitch = 2;
    texto.voices[7];

}
