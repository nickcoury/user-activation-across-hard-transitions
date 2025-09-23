const inputBox = document.querySelector('input');
const focusButton = document.querySelector('#focus');
const vibrateButton = document.querySelector('#vibrate');
function focusinput() {
  inputBox.focus();
  inputBox.select();
}
function vibrate() {
  navigator.vibrate([100, 100, 100, 100, 100]);
}
focusButton.onclick = focusinput;
vibrateButton.onclick = vibrate;
