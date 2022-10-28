import { GoalModal } from "./modal.js";

const gameBorad = document.getElementById("gameBorad");
let cardList = GoalModal();

const numCards = 8;
let delay = 1000;

// Genrate card

const cardGenerate = () => {
  cardList.sort(() => Math.random() - 0.5);
  cardList = cardList.slice(0, numCards);
  cardList = cardList.concat(cardList);
  cardList.sort(() => Math.random() - 0.5);

  console.log(cardList);
  // Html
  cardList.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("img");

    card.classList.add("card");
    face.classList.add("face");
    back.classList.add("back");
    // Giver card info med billeder
    card.setAttribute("name", item.name);
    face.src = item.imgSrc;
    back.src = "/assets/images/FN-Verdensmaal-ikon-logo.png";

    // lægger cards sammen med gameBorad
    gameBorad.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (tog) => {
      card.classList.toggle("toggleCard");
      checkCards(tog);
    });
  });
};

// checker om at cards macher

const checkCards = (tog) => {
  console.log(tog);
  const clickedCard = tog.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  // if section

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), delay);
      });
    }
  }
};

// reset
const restart = () => {
  let card;
};

// Timer

const startTimer = (duration, display) => {
  let timer = duration,
    minutes,
    seconds;

  setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      alert("Tiden er gået");
    }
  }, delay);
};

window.onload = () => {
  let oneMin = 60 * 1,
    display = document.getElementById("timeLeft");
  startTimer(oneMin, display);
};

cardGenerate();
