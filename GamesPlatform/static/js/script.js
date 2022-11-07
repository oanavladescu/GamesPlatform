// Challenge 1: Your Age in Days

function ageInDays() {
  var year = prompt("What year were you born?");
  var days = (2022 - year) * 365;

  var h2 = document.createElement("h2");
  var textAnswer = document.createTextNode(`You are ${days} days old.`);
  h2.setAttribute("id", "ageInDays");
  h2.setAttribute("style", "color:blue; font-style:italic; font-size:30px");
  h2.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h2);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// Challenge 2: Cat Generator

function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  image.src =
    "https://gobrandgo.com/wp-content/uploads/2013/10/cutest-cat-gifs-kitten-heads.gif";
  image.id = "cat";
  div.appendChild(image);
}

function deleteCats() {
  while (document.getElementById("cat")) {
    document.getElementById("cat").remove();
  }
}

// Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice) {
  let humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = generateChoice();

  let results = chooseWinner(humanChoice, botChoice); // [0, 1] ---  human lost | bot won
  let message = finalMessage(results); // {'message':'You won!', 'color': 'green'}
  rpsFrontEnd(humanChoice, botChoice, message);
}

function generateChoice() {
  const number = Math.floor(Math.random() * 3);
  return ["rock", "paper", "scissors"][number];
}

function chooseWinner(yourChoice, computerChoice) {
  const rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { paper: 0.5, rock: 1, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };
  const yourScore = rpsDatabase[yourChoice][computerChoice];
  const computerScore = rpsDatabase[computerChoice][yourChoice];
  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 1 && computerScore === 0) {
    WIN_SOUND.play();
    return { message: "You won!", color: "green" };
  } else if (yourScore === 0 && computerScore === 1) {
    LOSS_SOUND.play();
    return { message: "You lost!", color: "red" };
  } else if (yourScore === 0.5 && computerScore === 0.5) {
    HIT_SOUND.play();
    return { message: "You tie!", color: "yellow" };
  }
  return "Error...";
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  const imagesDatabase = {
    rock: "http://images.clipartpanda.com/rock-clipart-clipart-harvestable-resources-rock.png",
    paper:
      "https://images.onlinelabels.com/images/clip-art/nexxuz/nexxuz_Loose_Leaf_Paper.png",
    scissors:
      "https://wpclipart.com/dl.php?img=/tools/scissors/scissors_2/scissors_clip_art_T.png",
  };

  // remove all images from div
  document.getElementById("rock")
    ? document.getElementById("rock").remove()
    : console.log("no element with that id");
  document.getElementById("paper")
    ? document.getElementById("paper").remove()
    : console.log("no element with that id");
  document.getElementById("scissors")
    ? document.getElementById("scissors").remove()
    : console.log("no element with that id");

  const humanDiv = document.createElement("div");
  const botDiv = document.createElement("div");
  const messageDiv = document.createElement("div");

  humanDiv.setAttribute("id", "humanImg");
  botDiv.setAttribute("id", "botImg");
  messageDiv.setAttribute("id", "msgText");

  humanDiv.innerHTML = `<img src='${imagesDatabase[humanImageChoice]}' height= '150' width= '150' style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1); cursor: auto;'>`;
  messageDiv.innerHTML = `<h1 style='color: ${finalMessage["color"]}; font-style: italic; font-size: 45px; padding: 30px;'>${finalMessage["message"]}</h1>`;
  botDiv.innerHTML = `<img src='${imagesDatabase[botImageChoice]}' height= '150' width= '150' style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1); cursor: auto;'>`;

  document.getElementById("flex-box-rps").appendChild(humanDiv);
  document.getElementById("flex-box-rps").appendChild(messageDiv);
  document.getElementById("flex-box-rps").appendChild(botDiv);
}

function restartRps() {
  const imgDB = {
    rockSrc:
      "http://images.clipartpanda.com/rock-clipart-clipart-harvestable-resources-rock.png",
    paperSrc:
      "https://images.onlinelabels.com/images/clip-art/nexxuz/nexxuz_Loose_Leaf_Paper.png",
    scissorsSrc:
      "https://wpclipart.com/dl.php?img=/tools/scissors/scissors_2/scissors_clip_art_T.png",
  };

  let img1 = document.createElement("img");
  img1.setAttribute("id", "rock");
  img1.src = imgDB["rockSrc"];
  img1.setAttribute("height", "150");
  img1.setAttribute("width", "150");
  img1.setAttribute("onclick", "rpsGame(this)");

  let img2 = document.createElement("img");
  img2.setAttribute("id", "paper");
  img2.src = imgDB["paperSrc"];
  img2.setAttribute("height", "150");
  img2.setAttribute("width", "150");
  img2.setAttribute("onclick", "rpsGame(this)");

  let img3 = document.createElement("img");
  img3.setAttribute("id", "scissors");
  img3.src = imgDB["scissorsSrc"];
  img3.setAttribute("height", "150");
  img3.setAttribute("width", "150");
  img3.setAttribute("onclick", "rpsGame(this)");

  let div = document.getElementById("flex-box-rps");

  // remove all images from div
  document.getElementById("rock")
    ? document.getElementById("rock").remove()
    : console.log("no element with that id");
  document.getElementById("paper")
    ? document.getElementById("paper").remove()
    : console.log("no element with that id");
  document.getElementById("scissors")
    ? document.getElementById("scissors").remove()
    : console.log("no element with that id");

  document.getElementById("humanImg")
    ? document.getElementById("humanImg").remove()
    : console.log("no element with that id");
  document.getElementById("msgText")
    ? document.getElementById("msgText").remove()
    : console.log("no element with that id");
  document.getElementById("botImg")
    ? document.getElementById("botImg").remove()
    : console.log("no element with that id");

  div.appendChild(img1);
  div.appendChild(img2);
  div.appendChild(img3);
}

// Challenge 4: Change the Color of All Buttons
const all_buttons = document.getElementsByTagName("button");
const copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  const index = all_buttons[i].classList.length - 1;
  copyAllButtons.push(all_buttons[i].classList[index]);
}

function buttonColorChange(option) {
  switch (option.value) {
    case "red":
      buttonsRed();
      break;
    case "green":
      buttonsGreen();
      break;
    case "reset":
      buttonsReset();
      break;
    case "random":
      buttonsRandom();
  }
}

function buttonsRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    console.log(all_buttons[i].classList);
    const index = all_buttons[i].classList.length - 1;
    all_buttons[i].classList.remove(all_buttons[i].classList[index]);
    all_buttons[i].classList.add("btn-danger");
    console.log(all_buttons[i].classList);
  }
}

function buttonsGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    const index = all_buttons[i].classList.length - 1;
    all_buttons[i].classList.remove(all_buttons[i].classList[index]);
    all_buttons[i].classList.add("btn-success");
  }
}

function buttonsReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    const index = all_buttons[i].classList.length - 1;
    all_buttons[i].classList.remove(all_buttons[i].classList[index]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function buttonsRandom() {
  const choices = [...new Set(copyAllButtons)];

  for (let i = 0; i < all_buttons.length; i++) {
    const index = all_buttons[i].classList.length - 1;
    let randomNr = Math.floor(Math.random() * choices.length);

    all_buttons[i].classList.remove(all_buttons[i].classList[index]);
    all_buttons[i].classList.add(choices[randomNr]);
  }
}

// Challenge 5: Blackjack

///////// Hit /////////

let blackjackGame = {
  you: {
    scoreSpan: "#your-blackjack-result",
    divId: "#your-box",
    score: 0,
  },
  dealer: {
    scoreSpan: "#dealer-blackjack-result",
    divId: "#dealer-box",
    score: 0,
  },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  cardsMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10,
    A: [1, 11],
  },
  wins: 0,
  losses: 0,
  draws: 0,
  isStand: false,
  turnsOver: false,
};

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];

const HIT_SOUND = new Audio("../static/sounds/swish.m4a");
const WIN_SOUND = new Audio("../static/sounds/cash.mp3");
const LOSS_SOUND = new Audio("../static/sounds/aww.mp3");

//////////// HIT ///////
document.querySelector("#hit-button").addEventListener("click", blackjackHit);

function blackjackHit() {
  if (!blackjackGame["isStand"]) {
    let card = generateRandomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
  }
}

//////// Stand /////////

document
  .querySelector("#stand-button")
  .addEventListener("click", blackjackStand);

function blackjackStand() {
  dealerLogic();
}

//////// Deal //////////

document.querySelector("#deal-button").addEventListener("click", blackjackDeal);

function blackjackDeal() {
  if (blackjackGame["turnsOver"]) {
    blackjackGame["isStand"] = false;

    // for 2 players uncomment this
    // showResult(decideWinner());
    removeCards();
    resetScore();

    document.querySelector("#blackjack-result").textContent = `Let's play`;
    document.querySelector("#blackjack-result").style.color = "black";

    blackjackGame["turnsOver"] = false;
  }
}
///// functions /////

function showCard(card, activePlayer) {
  if (activePlayer["score"] <= 21) {
    let cardImage = document.createElement("img");
    cardImage.src = `../static/images/cards/${card}.png`;
    document.querySelector(activePlayer["divId"]).appendChild(cardImage);
    HIT_SOUND.play();
  }
}

function generateRandomCard() {
  let rndNr = Math.floor(Math.random() * blackjackGame["cards"].length);
  let randomCard = blackjackGame["cards"][rndNr];

  return randomCard;
}

function removeCards() {
  let yourImages = document.querySelector("#your-box").querySelectorAll("img");
  let dealerImages = document
    .querySelector("#dealer-box")
    .querySelectorAll("img");

  for (let i = 0; i < yourImages.length; i++) {
    yourImages[i].remove();
  }
  for (let i = 0; i < dealerImages.length; i++) {
    dealerImages[i].remove();
  }
}

function updateScore(card, activePlayer) {
  if (card === "A") {
    // if adding 11 keeps me below 21, add 11, otherwise, add 1
    if (activePlayer["score"] + blackjackGame["cardsMap"][card][1] <= 21) {
      activePlayer["score"] += blackjackGame["cardsMap"][card][1];
    } else {
      activePlayer["score"] += blackjackGame["cardsMap"][card][0];
    }
  } else {
    activePlayer["score"] += blackjackGame["cardsMap"][card];
  }
}

function showScore(activePlayer) {
  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      activePlayer["score"];
  }
}

function resetScore() {
  YOU["score"] = 0;
  DEALER["score"] = 0;

  document.querySelector(YOU["scoreSpan"]).textContent = YOU["score"];
  document.querySelector(YOU["scoreSpan"]).style.color = "white";

  document.querySelector(DEALER["scoreSpan"]).textContent = DEALER["score"];
  document.querySelector(DEALER["scoreSpan"]).style.color = "white";
}

/////////////////////////////////////
//// ASYNC PART - for boot player ///
/////////////////////////////////////

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function dealerLogic() {
  blackjackGame["isStand"] = true;

  while (DEALER["score"] < 16 && blackjackGame["isStand"]) {
    let card = generateRandomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    await sleep(500);
  }

  blackjackGame["turnsOver"] = true;
  let winner = decideWinner();
  showResult(winner);
}
// END of async part

/////////////////////////////////////
//// NORMAL PART - for multiplayer ///
/////////////////////////////////////

// function dealerLogic() {
//   blackjackGame['isStand'] = true;

//   let card = generateRandomCard();
//   showCard(card, DEALER);
//   updateScore(card, DEALER);
//   showScore(DEALER);

//   if(DEALER['score'] > 17) {
//     blackjackGame['turnsOver'] = true;
//     let winner = decideWinner();
//     showResult(winner);
//   }
// }
// END of normal part

function decideWinner() {
  let winner;

  if (YOU["score"] <= 21) {
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      blackjackGame["wins"]++;
      winner = YOU;
    } else if (YOU["score"] < DEALER["score"]) {
      blackjackGame["losses"]++;
      winner = DEALER;
    } else if (YOU["score"] === DEALER["score"]) {
      blackjackGame["draws"]++;
    }
  } else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    blackjackGame["losses"]++;
    winner = DEALER;
  } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    blackjackGame["draws"]++;
  }

  return winner;
}

function showResult(winner) {
  let message, messageColor;

  if (blackjackGame["turnsOver"]) {
    if (winner === YOU) {
      document.querySelector("#wins").textContent = blackjackGame["wins"];
      message = "You won!";
      messageColor = "green";
      WIN_SOUND.play();
    } else if (winner === DEALER) {
      document.querySelector("#losses").textContent = blackjackGame["losses"];
      message = "You lost!";
      messageColor = "red";
      LOSS_SOUND.play();
    } else {
      document.querySelector("#draws").textContent = blackjackGame["draws"];
      message = "You drew!";
      messageColor = "black";
    }

    document.querySelector("#blackjack-result").textContent = message;
    document.querySelector("#blackjack-result").style.color = messageColor;
  }
}

// Challenge 5: AJAX & API's with Javascript
makeCall();
function makeCall() {
  const url = "https://randomuser.me/api/?results=10"; // get 10 random users

  while (document.getElementById("ajax")) {
    document.getElementById("ajax").remove();
  }

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      let users = data.results;
      for (let i = 0; i < users.length; i++) {
        let div = document.createElement("div");
        div.id = "ajax";
        let image = document.createElement("img");
        let h6 = document.createElement("h6");

        h6.appendChild(
          document.createTextNode(
            `${users[i].name.first} ${users[i].name.last}`
          )
        );
        image.src = users[i].picture.large;
        div.appendChild(image);
        div.appendChild(h6);
        document
          .querySelector(".container-6 .flex-box-container-6")
          .appendChild(div);
      }
    });
}
