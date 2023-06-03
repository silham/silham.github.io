let initialY;
let finalY;
let action;
let isInGame = false;

document.addEventListener("touchstart", function (event) {
  initialY = event.touches[0].clientY;
});

document.addEventListener("touchend", function (event) {
  finalY = event.changedTouches[0].clientY;

  if (isInGame) {
    if (initialY - finalY > 75) {
      action = "jump";
    } else if (finalY - initialY > 75) {
      action = "slide";
    } else {
      action = "start";
    }
    console.log(action);
    actionHandler();
  }
});

function keyChecker(event) {
  if (isInGame) {
    switch (event.which) {
      case 13:
        action = "start";
        break;
      case 38:
        action = "jump";
        break;
      case 40:
        action = "slide";
        break;
      default:
        break;
    }
    console.log(action);
    actionHandler();
  }
}

function actionHandler() {
  switch (action) {
    case "start":
      if (runWorkerId == 0) {
        isStarted = true;
        document.getElementById("help").style.display = "none";
        document.getElementById("welcome").style.display = "none";
        runWorkerId = setInterval(run, 100);
        moveBackgroundId = setInterval(moveBackground, 25);
        moveBlocksId = setInterval(moveBlocks, 25);
        scoreWorkerId = setInterval(updateScore, 100);
        runSound.play();
        music.play();
      }
      break;
    case "jump":
      if (jumpWorkerId == 0 && isStarted && !isSliding && !isHurting) {
        isJumping = true;
        clearInterval(runWorkerId);
        runWorkerId = -1;
        jumpWorkerId = setInterval(jump, 100);
        if (moveBackgroundId == 0) {
          moveBackgroundId = setInterval(moveBackground, 25);
        }
        runSound.pause();
        jumpSound.play();
      }
      break;
    case "slide":
      if (slideWorkerId == 0 && isStarted && !isJumping && !isHurting) {
        isSliding = true;
        clearInterval(runWorkerId);
        runWorkerId = -2;
        slideWorkerId = setInterval(slide, 200);
        if (moveBackgroundId == 0) {
          moveBackgroundId = setInterval(moveBackground, 25);
        }
        runSound.pause();
        jumpSound.play();
      }
      break;
    default:
      break;
  }
}

var isStarted = false;

var runner = document.getElementById("runner");
var runImageNumber = 1;
var runWorkerId = 0;

//run animation
function run() {
  runImageNumber++;
  //run image number resetting
  if (runImageNumber == 9) {
    runImageNumber = 1;
  }
  runner.src = "assets/Run (" + runImageNumber + ").png";
}

var jumpImageNumber = 1;
var jumpWorkerId = 0;
var runnerMarginTop = 46.9208;
var isJumping = false;

//jump animation
function jump() {
  jumpImageNumber++;
  if (jumpImageNumber <= 7) {
    runnerMarginTop -= 3.6657;
    runner.style.marginTop = runnerMarginTop + "vh";
  } else {
    runnerMarginTop += 3.6657;
    runner.style.marginTop = runnerMarginTop + "vh";
  }
  if (jumpImageNumber == 13) {
    jumpImageNumber = 1;
    clearInterval(jumpWorkerId);
    isJumping = false;
    jumpWorkerId = 0;
    runSound.play();

    runWorkerId = setInterval(run, 100);
  }
  runner.src = "assets/Jump (" + jumpImageNumber + ").png";
}

var slideImageNumber = 0;
var slideWorkerId = 0;
var isSliding = false;

//slide animation
function slide() {
  slideImageNumber++;

  if (slideImageNumber == 6) {
    slideImageNumber = 1;
    clearInterval(slideWorkerId);
    isSliding = false;
    slideWorkerId = 0;
    runSound.play();

    runWorkerId = setInterval(run, 100);
  }
  runner.src = "assets/Slide (" + slideImageNumber + ").png";
}

//hurt animation
var hurtImageNumber = 1;
var hurtWorkerId = 0;
var isHurting = false;

function hurt() {
  hurtImageNumber++;

  if (hurtImageNumber == 9) {
    hurtImageNumber = 1;
    clearInterval(hurtWorkerId);
    isHurting = false;
    hurtWorkerId = 0;

    runWorkerId = setInterval(run, 100);
  }
  runner.src = "assets/Hurt (" + hurtImageNumber + ").png";
}

//dead animation
var deadImageNumber = 1;
var deadWorkerId = 0;
var isAlive = true;

function dead() {
  deadImageNumber++;

  if (deadImageNumber == 10) {
    clearInterval(deadWorkerId);
    document.getElementById("gameOver").style.display = "flex";
    deadWorkerId = 0;
  }
  runner.src = "assets/Dead (" + deadImageNumber + ").png";
}

//parallax background animation
var background1 = document.getElementById("layer-1");
var background2 = document.getElementById("layer-2");
var background3 = document.getElementById("layer-3");
var background4 = document.getElementById("layer-4");
var background5 = document.getElementById("layer-5");
var backgroundX = 0;
var moveBackgroundId = 0;
function moveBackground() {
  backgroundX -= gameSpeed;
  //background1.style.backgroundPositionX = backgroundX * 0.75 + "px";
  background2.style.backgroundPositionX = backgroundX * 1.25 + "px";
  background3.style.backgroundPositionX = backgroundX * 2.5 + "px";
  background4.style.backgroundPositionX = backgroundX * 3.75 + "px";
  background5.style.backgroundPositionX = backgroundX * 5 + "px";
}

var blockMarginLeft = 600;
var blockId = 4;
var firstBlockId = 1;
function createBlock() {
  var block = document.createElement("div");
  var blockTypePicker = Math.random();
  if (blockTypePicker <= 0.5) {
    block.className = "block fire";
  } else if (blockTypePicker <= 0.95) {
    block.className = "block bird";
  } else {
    block.className = "block heart";
  }
  block.id = "block" + blockId;
  blockId++;

  var gap = Math.random() * (1000 - 400) + 300;
  blockMarginLeft = 1500 + gap;
  block.style.marginLeft = blockMarginLeft + "px";
  document.getElementById("background").appendChild(block);
}

var moveBlocksId = 0;
var touchedBlocks = [];
function moveBlocks() {
  for (var i = firstBlockId; i < blockId; i++) {
    var currentBlock = document.getElementById("block" + i);
    var currentMarginLeft = currentBlock.style.marginLeft;
    var newMarginLeft = parseInt(currentMarginLeft) - 5 * gameSpeed;
    if (
      newMarginLeft < 0.308 * window.innerHeight &&
      newMarginLeft > 0.205 * window.innerHeight &&
      !touchedBlocks.includes(i)
    ) {
      if (currentBlock.classList.contains("fire")) {
        if (runnerMarginTop > 42.521) {
          console.log("burn");
          touchedBlocks.push(i);
          clearInterval(runWorkerId);
          clearInterval(slideWorkerId);
          clearInterval(jumpWorkerId);
          runner.style.marginTop = "46.9208vh";
          jumpWorkerId = 0;
          slideWorkerId = 0;
          isSliding = false;
          runWorkerId = -3;
          isHurting = true;
          if (lifeCount > 1) {
            hurtWorkerId = setInterval(hurt, 50);
            hurtSound.play();
          } else {
            isAlive = false;
          }
          lifeCountDecrement();
        }
      } else if (currentBlock.classList.contains("bird")) {
        if (!isSliding) {
          console.log("hit");
          touchedBlocks.push(i);
          clearInterval(runWorkerId);
          clearInterval(jumpWorkerId);
          clearInterval(slideWorkerId);
          slideWorkerId = 0;
          jumpWorkerId = 0;
          isJumping = false;
          runner.style.marginTop = "47vh";
          isHurting = true;
          runWorkerId = -3;
          if (lifeCount > 1) {
            hurtWorkerId = setInterval(hurt, 50);
            hurtSound.play();
          } else {
            isAlive = false;
          }
          lifeCountDecrement();
        }
      } else {
        if (parseInt(runner.style.marginTop) < 41 && lifeCount < 3) {
          touchedBlocks.push(i);
          currentBlock.style.visibility = "hidden";
          lifeSound.play();
          lifeCountIncrement();
        }
      }
    }
    if (newMarginLeft < -70) {
      document.getElementById("background").removeChild(currentBlock);
      firstBlockId = i + 1;
    }
    currentBlock.style.marginLeft = newMarginLeft + "px";
  }
  var lastBlockMarginLeft = parseInt(
    document.getElementById("block" + (blockId - 1)).style.marginLeft
  );
  if (lastBlockMarginLeft < 1500) {
    createBlock();
  }
}

//Life counter
var heart1 = document.getElementById("heart1");
var heart2 = document.getElementById("heart2");
var heart3 = document.getElementById("heart3");
let lifeCount = 3;

function lifeCountIncrement() {
  lifeCount++;
  switch (lifeCount) {
    case 2:
      heart2.setAttribute("fill", "#df0e25");
      break;
    case 3:
      heart1.setAttribute("fill", "#df0e25");
      break;
    default:
      break;
  }
}

function lifeCountDecrement() {
  lifeCount--;
  switch (lifeCount) {
    case 2:
      heart1.setAttribute("fill", "#808080");
      break;
    case 1:
      heart2.setAttribute("fill", "#808080");
      break;
    case 0:
      heart3.setAttribute("fill", "#808080");
      break;
    default:
      break;
  }
  if (lifeCount == 0) {
    console.log("dead");
    clearInterval(runWorkerId);
    clearInterval(moveBackgroundId);
    clearInterval(moveBlocksId);
    clearInterval(scoreWorkerId);
    clearInterval(jumpWorkerId);
    clearInterval(slideWorkerId);
    runSound.pause();
    music.pause();
    deadSound.play();
    deadWorkerId = setInterval(dead, 100);
    runWorkerId = -4;
    isAlive = false;
    setHighScore();
  }
}

//update score
var score = 0;
var scoreWorkerId = 0;
var newScore = document.getElementById("score");
var speedUpdateLimit = 1000;

function updateScore() {
  score += 5;
  newScore.innerHTML = score;
  if (score == speedUpdateLimit && score <= 15000) {
    speedControl();
    speedUpdateLimit += 1000;
  }
}

// controlling speed of the game
var gameSpeed = 1;
function speedControl() {
  gameSpeed += 0.1;
}

//High Score
var savedHighScore = localStorage.getItem("highScore");
function setHighScore() {
  if (savedHighScore == null) {
    savedHighScore = 0;
  }
  if (score > savedHighScore) {
    var highScore = score;
    localStorage.setItem("highScore", highScore);
    savedHighScore;
    document.getElementById("highScore").style.display = "flex";
    document.getElementById("highScoreText").innerHTML = highScore;
  } else {
    document.getElementById("scoreLeft").innerHTML = savedHighScore - score;
    document.getElementById("notHighScore").style.display = "flex";
  }
}

var runSound = new Audio("assets/run.mp3");
runSound.loop = true;
var jumpSound = new Audio("assets/jump.mp3");
var hurtSound = new Audio("assets/hurt.mp3");
var deadSound = new Audio("assets/dead.mp3");
var lifeSound = new Audio("assets/life.mp3");
var music = new Audio("assets/music.mp3");
music.loop = true;

var soundVolumeSlider = document.getElementById("soundVolume");
soundVolumeSlider.addEventListener("input", function () {
  runSound.volume = this.value;
  jumpSound.volume = this.value;
  hurtSound.volume = this.value;
  deadSound.volume = this.value;
  lifeSound.volume = this.value;
});

// Add event listener to music volume slider
var musicVolumeSlider = document.getElementById("musicVolume");
musicVolumeSlider.addEventListener("input", function () {
  music.volume = this.value;
});

const backgrounds = document.querySelectorAll(".bgSelector");
let activeDiv = null;
backgrounds.forEach((div) => {
  div.addEventListener("click", () => {
    activeDiv = div;
    if (div.classList.contains("bg1")) {
      background1.style.backgroundImage = 'url("assets/background_city_1.png")';
      background2.style.backgroundImage = 'url("assets/background_city_2.png")';
      background3.style.backgroundImage = 'url("assets/background_city_3.png")';
      background4.style.backgroundImage = 'url("assets/background_city_4.png")';
      background5.style.backgroundImage = 'url("assets/background_city_5.png")';
    }
    if (div.classList.contains("bg2")) {
      background1.style.backgroundImage =
        'url("assets/background_mountain_1.png")';
      background2.style.backgroundImage =
        'url("assets/background_mountain_2.png")';
      background3.style.backgroundImage =
        'url("assets/background_mountain_3.png")';
      background4.style.backgroundImage =
        'url("assets/background_mountain_4.png")';
      background5.style.backgroundImage =
        'url("assets/background_mountain_5.png")';
    }
    if (div.classList.contains("bg3")) {
      background1.style.backgroundImage = 'url("assets/background_dark_1.png")';
      background2.style.backgroundImage = 'url("assets/background_dark_2.png")';
      background3.style.backgroundImage = 'url("assets/background_dark_3.png")';
      background4.style.backgroundImage = 'url("assets/background_dark_4.png")';
      background5.style.backgroundImage = 'url("assets/background_dark_5.png")';
    }
    if (div.classList.contains("bg4")) {
      background1.style.backgroundImage = 'url("assets/background1.png")';
      background2.style.backgroundImage = 'url("assets/background2.png")';
      background3.style.backgroundImage = 'url("assets/background3.png")';
      background4.style.backgroundImage = 'url("assets/background4.png")';
      background5.style.backgroundImage = 'url("assets/background5.png")';
    }
  });
});

function welcomeOk() {
  document.getElementById("welcome").style.display = "none";
  isInGame = true;
}

function welcomeHelp() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("help").style.display = "flex";
}

function helpOk() {
  document.getElementById("help").style.display = "none";
  isInGame = true;
}

function helpBack() {
  document.getElementById("help").style.display = "none";
  document.getElementById("welcome").style.display = "flex";
}
