// Variables for each element we we add the event value to
const eventKey = document.getElementById('event-key');
const eventLocation = document.getElementById('event-location');
const eventCode = document.getElementById('event-code');
const eventWhich = document.getElementById('code-which');

// For hiding or unhiding text to make it look nicer, maybe
const keyCodeMessageText = document.getElementsByClassName('keycode-message-text')[0];
const whichText = document.getElementById('info-text');
const keyCodeHeader = document.getElementById('keycode-header-text');

// I changed keypress to keydown so it can take input for more than just text keys and number pad (0 and 3 on event.location)

document.addEventListener('keydown', (event) => {
  // Assign event. values to the textContent of their paragraphs.
  eventKey.textContent = event.key;
  eventLocation.textContent = event.location;
  eventCode.textContent = event.code;

  // Switch statement checks the value of event.location and for each number adds the string into the paragraph of eventLocation
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
  
  // Add text display for when the user presses spacebar, currently shows empty
  if (event.which == 32) {
    eventKey.textContent = "spacebar"
  }


  // Hides or unhides text when we first press the key
  keyCodeMessageText.style.display = 'none';
  eventWhich.style.display = 'block';
  eventWhich.textContent = event.which;
  whichText.style.display = 'block';
  keyCodeHeader.style.display = 'block';
});