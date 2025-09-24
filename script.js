const inputBox = document.querySelector('input');
const keyboardButton = document.querySelector('#keyboard');
const vibrateButton = document.querySelector('#vibrate');
function showKeyboard() {
  inputBox.focus();
  inputBox.select();
}
function vibrate() {
  window.navigator.vibrate(200);
}
keyboardButton.onclick = showKeyboard;
vibrateButton.onclick = vibrate;
