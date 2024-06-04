const eventKey = document.getElementById('event-key');
const eventLocation = document.getElementById('event-location');
const eventCode = document.getElementById('event-code');
const eventWhich = document.getElementById('code-which');

const keyCodeMessageText = document.getElementsByClassName('keycode-message-text')[0];
const whichText = document.getElementById('info-text');
const keyCodeHeader = document.getElementById('keycode-header-text');

document.addEventListener('keydown', (event) => {
  console.log(event.key);
  console.log(event.which);
  console.log(event.code);
  eventKey.textContent = event.key;
  eventLocation.textContent = event.location;
  eventCode.textContent = event.code;

  switch (event.location) {
    case 0:
      eventLocation.textContent = 'General Keys'
      break;
    case 1:
      eventLocation.textContent = 'Left (Modifier Keys)'
      break;
    case 2:
      eventLocation.textContent = 'Right (Modifier Keys)'
      break;
    case 3:
      eventLocation.textContent = 'Numpad Keys';
      break;
    default:
      eventLocation.textContent = 'Unknown'
      break;
  }

  keyCodeMessageText.style.display = 'none';
  eventWhich.style.display = 'block';
  eventWhich.textContent = event.which;
  whichText.style.display = 'block';
  keyCodeHeader.style.display = 'block';
});