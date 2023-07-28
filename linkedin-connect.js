var countOfPagesScrolled = 3;

function scrollDown(height, countOfPagesScrolled) {
  scroll(0, document.body.clientHeight);
  setTimeout(function () {
    if (height !== document.body.clientHeight && countOfPagesScrolled > 0) {
      scrollDown(document.body.clientHeight, --countOfPagesScrolled);
    } else {
      sendRequest();
    }
  }, 1500);
}

function sendRequest() {
  var contactsNum = 0;
  var buttons = document.querySelectorAll('.artdeco-button');
  for (var i = 0; i < buttons.length; i++) {
    contactsNum++;
    buttons[i].click();
    console.log(buttons[i].getAttribute('aria-label') + ' ' + contactsNum);
  }
  console.log('Just added contacts: ' + contactsNum);
}

scrollDown(document.body.clientHeight, countOfPagesScrolled);