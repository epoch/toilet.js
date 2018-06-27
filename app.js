var water = document.querySelector('.water');
var urine = document.querySelector('.urine');
var flushBtn = document.querySelector('.flush');
var isFlushing = false;
var flushingAudio = new Audio('flushing.mp3')

function pee() {
  water.classList.add('pee');
  urine.classList.add('pee');
  if (isFlushing) {
    setTimeout(() => {
      water.classList.remove('pee');
      urine.classList.remove('pee');
    }, 1500)
  }
}

function flush() {
  isFlushing = true;
  setTimeout(() => flushingAudio.play(), 300);
  water.classList.add('flushing');
  water.classList.remove('pee');
  urine.classList.remove('pee');
}

water.addEventListener('click', pee);
water.addEventListener('animationend', () => {
  water.classList.remove('flushing');
  isFlushing = false;
})

flushBtn.addEventListener('click', flush);