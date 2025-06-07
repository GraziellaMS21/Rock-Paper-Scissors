let imgLeft = document.getElementById("closeLeft");
let imgRight = document.getElementById("closeRight");
const btnRockL = document.getElementById("btnRockL");
const btnPaperL = document.getElementById("btnPaperL");
const btnScissorsL = document.getElementById("btnScissorsL");
let wordResult = document.getElementById("result");
let display = document.getElementById("display");
let winsDisplay = document.getElementById("wins");
let losesDisplay = document.getElementById("loses");
let btnRematch = document.getElementById("rematch");
let btnRestart = document.getElementById("restart");
let randomNum;

const min = 1;
const max = 3;
let ansRight,
  wins = 0,
  loses = 0;

function computerAns(choice) {
  setTimeout(function () {
    display.textContent = "Let's Play!";
  }, 100);
  setTimeout(function () {
    wordResult.textContent = "The Opponent is Making Their Move!";
  }, 1000);
  setTimeout(function () {
    if (randomNum == 1) {
      ansRight = "Rock";
      imgRight.src = "/Projects/Images/rock.png";
    } else if (randomNum == 2) {
      ansRight = "Paper";
      imgRight.src = "/Projects/Images/paper.png";
    } else {
      ansRight = "Scissors";
      imgRight.src = "/Projects/Images/scissors.png";
    }
    result(choice, ansRight);
  }, 3000);
}

function result(choice, ansRight) {
  if (choice == ansRight) {
    wordResult.textContent = "It's a Tie!";
  } else if (
    (choice == "Rock" && ansRight == "Scissors") ||
    (choice == "Paper" && ansRight == "Rock") ||
    (choice == "Scissors" && ansRight == "Paper")
  ) {
    wordResult.textContent = "You Won!";
    wins++;
    winsDisplay.textContent = wins;
  } else {
    wordResult.textContent = "You Lost!";
    loses++;
    losesDisplay.textContent = loses;
  }
  btnRematch.style.display = "Block";
  btnRestart.style.display = "Block";
}
// document.getElementById("output").textContent = ansRight;

btnRematch.onclick = function () {
  imgLeft.src = "/Projects/Images/close.png";
  imgRight.src = "/Projects/Images/close.png";
  btnRematch.style.display = "None";
  btnRestart.style.display = "None";
  wordResult.textContent = "Make Your Move!";
  [btnPaperL, btnRockL, btnScissorsL].forEach((btn) => {
    btn.disabled = false;
    btn.style.backgroundColor = "";
    btn.style.transform = "";
  });
};

btnRestart.onclick = function () {
  imgLeft.src = "/Projects/Images/close.png";
  imgRight.src = "/Projects/Images/close.png";
  btnRematch.style.display = "None";
  btnRestart.style.display = "None";
  wordResult.textContent = "";
  display.textContent = "Let's Play!";
  wins = 0;
  loses = 0;
  winsDisplay.textContent = 0;
  losesDisplay.textContent = 0;
  [btnPaperL, btnRockL, btnScissorsL].forEach((btn) => {
    btn.disabled = false;
    btn.style.backgroundColor = "";
    btn.style.transform = "";
  });
};

btnRockL.onclick = function () {
  imgLeft.src = "/Projects/Images/rock.png";
  randomNum = Math.round(Math.random() * (max - min) + min);
  computerAns("Rock");
  [btnRockL, btnPaperL, btnScissorsL].forEach((btn) => {
    btn.style.transform = "translateY(0)";
    btn.style.backgroundColor = "rgb(3, 3, 61)";
    btn.disabled = true;
  });
  btnRockL.style.backgroundColor = "rgb(32, 168, 32)";
};

btnPaperL.onclick = function () {
  imgLeft.src = "/Projects/Images/paper.png";
  randomNum = Math.round(Math.random() * (max - min) + min);
  computerAns("Paper");
  [btnRockL, btnPaperL, btnScissorsL].forEach((btn) => {
    btn.style.transform = "translateY(0)";
    btn.style.backgroundColor = "rgb(3, 3, 61)";
    btn.disabled = true;
  });
  btnPaperL.style.backgroundColor = "rgb(32, 168, 32)";
};

btnScissorsL.onclick = function () {
  imgLeft.src = "/Projects/Images/scissors.png";
  randomNum = Math.round(Math.random() * (max - min) + min);
  computerAns("Scissors");
  [btnRockL, btnPaperL, btnScissorsL].forEach((btn) => {
    btn.style.transform = "translateY(0)";
    btn.style.backgroundColor = "rgb(3, 3, 61)";
    btn.disabled = true;
  });
  btnScissorsL.style.backgroundColor = "rgb(32, 168, 32)";
};
