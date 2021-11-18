// Text to Speech

const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  let allVoice  = speechSynthesis.getVoices();
 
  voice.text = string;
  voice.lang = "en-US";
  voice.voice = allVoice[9];
  voice.volume = 1;
  voice.rate = 1;
  voice.pitch = 1; // Can be 0, 1, or 2
  synth.speak(voice);
}