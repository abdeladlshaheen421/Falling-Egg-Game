import Egg from "./egg.js";

//take player name from url
function getPlayerName() {
  let URLdata = document.location.href;
  let userData = URLdata.split("?")[1];
  let userName = userData.split("=")[1];
  return userName;
}

//display name on screen
function ViewPlayerName(nameOFplayer) {
  let spanOfName = document.getElementById("playerName");
  spanOfName.innerText = nameOFplayer;
}

let eggs = [];
//function of creating eggs per Level
function levelfallingeggs(seconds) {
  //create egg every 2 seconds
  let Timer = seconds;
  let dateCounterParagraph = document.getElementById("Timer");
  let GameEnd = setInterval(() => {
    if (Timer >= 0) dateCounterParagraph.innerText = --Timer;
  }, 1000);
  let fallingeggs = setInterval(() => {
    let egg = new Egg();
    eggs.push(egg);

    egg.FallingEgg();
  }, 1000);
  //
  setTimeout(() => {
    clearInterval(GameEnd);
    clearInterval(fallingeggs);
    eggs.forEach((egg) => egg.destroy());
    previewFinalScore();
  }, seconds * 1000);
}

function saveDate(url, playername) {
  let data = { name: playername };
  try {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.log("couldn't find");
  }
}

function getDate() {
  try {
    fetch(
      `https://node-monge-iti-project.herokuapp.com/games/${getPlayerName()}`
    )
      .then((response) => response.json())
      .then((data) => {
        let dateSpan = document.getElementById("Date");
        if (data.date) {
          let formatDate = new Date(data.date).toLocaleString("en-US");
          dateSpan.innerText = formatDate;
        } else dateSpan.innerText = "This Is first Game";
      })
      .catch(() => {
        return 0;
      });
  } catch (err) {
    console.log("error");
  }
}

//
function previewFinalScore() {
  let finalScore = document.getElementById("counter");
  let PopUpMsg = document.getElementsByClassName("PopUp")[0];
  let ScoreSpan = document.getElementsByClassName("finalScore")[0];
  ScoreSpan.innerText = finalScore.innerText;
  PopUpMsg.style.display = "initial";
}

//caling Functions
saveDate("https://node-monge-iti-project.herokuapp.com/games", getPlayerName());

levelfallingeggs(60);
ViewPlayerName(getPlayerName());
getDate();
