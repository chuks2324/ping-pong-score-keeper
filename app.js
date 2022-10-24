const player1Score = document.querySelector(".player-1");
const player2Score = document.querySelector(".player-2");

const winningScore = document.querySelector("#end-score");

console.log(winningScore);
const controls = document.querySelectorAll(".footer-button");
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let endScore = 3;

controls.forEach((control) =>
  control.addEventListener("click", (e) => {
    if (isGameOver === false) {
      if (e.target.id === "p1-score+1") {
        player1Scoresfunction();
      }
      if (e.target.id === "p2-score+1") {
        player2Scoresfunction();
      }
      if (p1Score === endScore || p2Score === endScore) {
        isGameOver = true;
        if (p1Score === endScore) {
          document.querySelector(".player-1").classList.add("text-success");
          document.querySelector(".player-2").classList.add("text-danger");
        } else {
          document.querySelector(".player-1").classList.add("text-danger");
          document.querySelector(".player-2").classList.add("text-success");
        }
      }
    }
    if (e.target.id === "reset") {
      toReset();
      isGameOver = false;
      document
        .querySelector(".player-1")
        .classList.remove("text-success", "text-danger");
      document
        .querySelector(".player-2")
        .classList.remove("text-success", "text-danger");
    }
  })
);
winningScore.addEventListener("change", (e) => {
  endScore = parseInt(winningScore.value);
  toReset();
  isGameOver = false;
});

const player1Scoresfunction = function () {
  p1Score += 1;
  player1Score.innerText = p1Score;
};

const player2Scoresfunction = function () {
  p2Score += 1;
  player2Score.innerText = p2Score;
};

const toReset = function () {
  p1Score = 0;
  p2Score = 0;
  player1Score.innerText = p1Score;
  player2Score.innerText = p2Score;
};
