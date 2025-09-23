const input = document.querySelector('input');
const button = document.querySelector('button');
function focusinput() {
  input.focus();
  input.select();
}
function vibrate() {
  navigator.vibrate([100, 100, 100, 100, 100]);
}
button.onclick = focusinput;
