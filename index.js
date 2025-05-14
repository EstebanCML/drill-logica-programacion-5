let secretNumber = Math.floor(Math.random() * 100) + 1; // Cambia const por let
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const messageDiv = document.getElementById('message');
const historyDiv = document.getElementById('history');
const resetBtn = document.getElementById('resetBtn'); // Nuevo
let attempts = [];

guessBtn.addEventListener('click', () => {
  const value = guessInput.value.trim();
  const number = Number(value);

  if (!value || isNaN(number) || !Number.isInteger(number)) {
    messageDiv.textContent = 'Por favor, ingresa un número válido.';
    console.log('Por favor, ingresa un número válido.');
    return;
  }
  if (number < 1 || number > 100) {
    messageDiv.textContent = 'El número debe estar entre 1 y 100.';
    console.log('El número debe estar entre 1 y 100.');
    return;
  }

  attempts.push(number);

  if (number === secretNumber) {
    messageDiv.textContent = '¡Felicidades, adivinaste el número secreto!';
    historyDiv.textContent = 'Números introducidos: ' + attempts.slice(0, -1).join(', ');
    console.log('¡Felicidades, adivinaste el número secreto!');
    console.log('Números introducidos:', attempts.slice(0, -1));
    guessBtn.disabled = true;
    guessInput.disabled = true;
  } else {
    messageDiv.textContent = 'Ups, el número secreto es incorrecto, vuelve a intentarlo.';
    historyDiv.textContent = 'Números introducidos: ' + attempts.join(', ');
    console.log('Ups, el número secreto es incorrecto, vuelve a intentarlo.');
    console.log('Números introducidos:', attempts);
    if (number < secretNumber) {
      console.log('El número secreto es mayor que tu intento.');
    } else {
      console.log('El número secreto es menor que tu intento.');
    }
    guessInput.value = '';
    guessInput.focus();
  }
});

// Permitir enviar con Enter
guessInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    guessBtn.click();
  }
});

// Reiniciar juego
resetBtn.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = [];
  messageDiv.textContent = '';
  historyDiv.textContent = '';
  guessInput.value = '';
  guessInput.disabled = false;
  guessBtn.disabled = false;
  guessInput.focus();
  console.log('Juego reiniciado. Nuevo número secreto generado.');
});

