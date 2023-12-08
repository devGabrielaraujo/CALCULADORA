function calculateIMC() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if (isNaN(weight) || isNaN(height) || height === 0) {
    document.getElementById('result').innerText = 'Por favor, insira valores válidos.';
    return;
  }

  const imc = weight / (height * height);
  const formattedIMC = imc.toFixed(2);

  let message = `Seu IMC é ${formattedIMC}.`;

  if (imc < 18.5) {
    message += ' Abaixo do peso.';
  } else if (imc >= 18.5 && imc < 25) {
    message += ' Peso normal.';
  } else if (imc >= 25 && imc < 30) {
    message += ' Sobrepeso.';
  } else {
    message += ' Obeso.';
  }

  document.getElementById('result').innerText = message;
}

