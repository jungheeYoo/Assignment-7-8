const rangeForm = document.querySelector('.rangeForm');
const rangeNumberInput = document.querySelector('.rangeNumber');
const guessNumberInput = document.querySelector('.guessNumber');
const playBtn = document.querySelector('.playBtn');
const gameBoard = document.querySelector('.gameBoard');
const result = document.querySelector('.result');

// 입력한 숫자 범위
function setMaxNumber() {
  guessNumberInput.setAttribute('max', parseInt(rangeNumberInput.value, 10));
}

// 게임 플레이
function playGame(event) {
  event.preventDefault();
  const rangeNum = parseInt(rangeNumberInput.value, 10);
  const guessNum = parseInt(guessNumberInput.value, 10);

  // 유효성 검사
  if (
    isNaN(rangeNum) ||
    isNaN(guessNum) ||
    guessNum < 1 ||
    guessNum > rangeNum
  ) {
    return;
  }

  // 랜덤 숫자 생성
  const randomNum = Math.ceil(Math.random() * rangeNum);
  console.log(randomNum);

  // 게임 상황
  gameBoard.innerHTML = `You chose: ${guessNum}, the machine chose: ${randomNum}.`;

  // 게임 결과
  result.innerHTML = guessNum === randomNum ? 'You won!' : 'You Lost!';
}

rangeForm.addEventListener('input', setMaxNumber);
playBtn.addEventListener('click', playGame);
