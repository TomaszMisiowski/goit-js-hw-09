let timeoutId;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeBackgroudColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  timeoutId = setTimeout(changeBackgroudColor, 1000);
  return timeoutId;
}
const startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', function () {
  this.disabled = true;
  stopBtn.disabled = false;
  changeBackgroudColor();
});
console.log(startBtn);
const stopBtn = document.querySelector('[data-stop]');
stopBtn.addEventListener('click', function () {
  this.disabled = true;
  startBtn.disabled = false;
  clearTimeout(timeoutId);
});
