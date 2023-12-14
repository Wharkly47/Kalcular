// script.js
let display = document.getElementById('display');

function appendCharacter(character) {
  display.value += character;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    // Remplacer les caractères spéciaux avant d'évaluer l'expression
    let expression = display.value
      .replace(/sqrt\(/g, 'Math.sqrt(')
      .replace(/sin\(/g, 'Math.sin(')
      .replace(/cos\(/g, 'Math.cos(')
      .replace(/tan\(/g, 'Math.tan(')
      .replace(/\^/g, '**'); // Remplacer ^ par ** pour l'exposant

    // Utiliser eval pour évaluer l'expression
    display.value = eval(expression);
  } catch (error) {
    display.value = 'Error';
  }
}