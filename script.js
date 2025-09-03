const phrases = ["Meus Projetos !", "PolusSeven", "Calmind", "Até o Sim","Telegram Bot","Aro Contabilidade"];
  
let phraseIndex = 0;
let charIndex = 0; 
const textElement = document.getElementById("text");

function typeText() {
  if (charIndex < phrases[phraseIndex].length) {
    textElement.innerHTML += phrases[phraseIndex][charIndex];
    charIndex++;
  } else {
    phraseIndex++;
    charIndex = 0;
    
    setTimeout(() => {
      textElement.innerHTML = ''; 
      
      if (phraseIndex >= phrases.length) {
        phraseIndex = 0;
      }

      typeText();
    }, 1000);
    return;
  }

  setTimeout(typeText, 150);
}
window.onload = function() {
  typeText();
};

