function runTypingEffect() {
  const text =
    " <!DOCTYPE html><html><title> The truth is that I am just a travel agency </title></head><body> ";
  const typingElement = document.getElementById("p1");
  const typingDelay = 100; // Delay between each character (in milliseconds)

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

function runTypingEffect1() {
  const text =
    " p{ color:#00000 background: url /img/blackpink_is so good.jpg} ";
  const typingElement = document.getElementById("p2");
  const typingDelay = 100; // Delay between each character (in milliseconds)

  typeText1(text, typingElement, typingDelay);
}

function typeText1(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

function runTypingEffect2() {
  const text =
    " function I_am_die_ing(){ let i = 0 ;i<infintiy i++ console.log(JS is so difficult) } ";
  const typingElement = document.getElementById("p3");
  const typingDelay = 100; // Delay between each character (in milliseconds)

  typeText2(text, typingElement, typingDelay);
}

function typeText2(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

function runTypingEffect3() {
  const text = " print(I don't know anything about python) ";
  const typingElement = document.getElementById("p4");
  const typingDelay = 100; // Delay between each character (in milliseconds)

  typeText3(text, typingElement, typingDelay);
}

function typeText3(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}
document.addEventListener("DOMContentLoaded", runTypingEffect);
document.addEventListener("DOMContentLoaded", runTypingEffect1);
document.addEventListener("DOMContentLoaded", runTypingEffect2);
document.addEventListener("DOMContentLoaded", runTypingEffect3);
