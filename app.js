var bowl = document.querySelector('.bowl');
var flushBtn = document.querySelector('.flush');
var alreadyBeen = false;

function handleBowlClick(event){
  if (!alreadyBeen){
    if (event.metaKey == true) {
      pee();
      alreadyBeen = true;
    } else {
      poop();
      alreadyBeen = true;
    }
  }
}

function poop() {
  bowl.classList.add('poop');
}

function pee() {
  bowl.classList.add('pee');
}

function flush() {
  bowl.classList.remove('poop');
  bowl.classList.remove('pee');
  alreadyBeen = false;
}

bowl.addEventListener('click', handleBowlClick);
flushBtn.addEventListener('click', flush);