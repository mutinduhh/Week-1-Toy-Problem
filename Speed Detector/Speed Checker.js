const speedSlider = document.getElementById('speed-slider');
const speedValueElement = document.getElementById('speed-value');
const submitButton = document.getElementById('submit-button');
const resultElement = document.getElementById('result');

let demeritPoints = 0;

speedSlider.addEventListener('input', () => {
  const speed = speedSlider.value;
  speedValueElement.textContent = `${speed} km/h`;
});

submitButton.addEventListener('click', () => {
  const speed = parseInt(speedSlider.value);
  if (speed < 70) {
    resultElement.textContent = 'Ok';
  } else {
    const excessSpeed = speed - 70;
    demeritPoints = Math.floor(excessSpeed / 5);
    if (demeritPoints > 12) {
      resultElement.textContent = 'License suspended';
    } else {
      resultElement.textContent = `You have ${demeritPoints} demerit points`;
    }
  }
});
