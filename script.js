const inputBox = document.querySelector('input');
const keyboardButton = document.querySelector('#keyboard');
const vibrateButton = document.querySelector('#vibrate');
function showKeyboard() {
  inputBox.focus();
  inputBox.select();
  inputBox.setAttribute('virtualkeyboardpolicy', 'manual');
  setTimeout(() => {
    window.navigator.virtualKeyboard?.show()
    inputBox.removeAttribute('virtualkeyboardpolicy');
  }, 20);
}
function vibrate() {
  window.navigator.vibrate(200);
}
keyboardButton.onclick = showKeyboard;
vibrateButton.onclick = vibrate;
