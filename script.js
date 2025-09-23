const inputBox = document.querySelector('input');
const focusButton = document.querySelector('#focus');
const vibrateButton = document.querySelector('#vibrate');
function focusinput() {
  inputBox.focus();
  inputBox.select();
}
function vibrate() {
  window.navigator.vibrate(200);
}
focusButton.onclick = focusinput;
vibrateButton.onclick = vibrate;
