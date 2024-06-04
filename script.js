const eventKey = document.getElementById('event-key');
const eventLocation = document.getElementById('event-location');
const eventCode = document.getElementById('event-code');
const eventWhich = document.getElementById('code-which');

const keyCodeMessageText = document.getElementsByClassName('keycode-message-text')[0];
const whichText = document.getElementById('info-text');
const keyCodeHeader = document.getElementById('keycode-header-text');

document.addEventListener('keypress', (event) => {
  console.log(event.key);
  console.log(event.which);
  console.log(event.code)
  eventKey.textContent = event.key;
  eventLocation.textContent = event.location;
  eventCode.textContent = event.code;

  keyCodeMessageText.style.display = 'none';
  eventWhich.style.display = 'block';
  eventWhich.textContent = event.which;
  whichText.style.display = 'block';
  keyCodeHeader.style.display = 'block';
});