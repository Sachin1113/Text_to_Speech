let speech =new SpeechSynthesisUtterance();
let voices=[];
let startbutton=document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let voiceSelect=document.querySelector("select");
let textarea=document.querySelector("textarea");
let charCount=document.getElementById("charCount");

window.speechSynthesis.onvoiceschanged=()=> {
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];

    voices.forEach((voice,i)=> (voiceSelect.options[i])=new Option(voice.name,i));
};

voiceSelect.addEventListener("change",()=> {
    speech.voice=voices[voiceSelect.value];
});

startbutton.addEventListener("click",()=>{
    speech.text=textarea.value;
    window.speechSynthesis.speak(speech);
    if(textarea.value.length>100){
        stopButton.style.display="inline";
    }
});


  stopButton.addEventListener("click", () => {
    window.speechSynthesis.cancel();
  });


   textarea.addEventListener("input", () => {
    let count=textarea.value.length;
    charCount.textContent=count;
     if (count> 100) {
       stopButton.style.display = "inline";
     } else {
       stopButton.style.display = "none";
     }
   });