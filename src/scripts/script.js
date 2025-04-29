document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("text");
  const text = "i'm Kelvyn, a Web Developer";

  let index = 0;

  function typeLetter() {
    if (index < text.length) {
      textElement.textContent += text[index];
      index++;
      setTimeout(typeLetter, 100);
    }
  }

  typeLetter();
});