import { GoalModal } from "./modal.js";
const gameBorad = document.getElementById("gameBorad");
const numCards = 8;
let cardList = GoalModal();

cardList.sort(() => Math.random() - 0.5);
cardList = cardList.slice(0, numCards);
cardList.sort(() => Math.random() - 0.5);
cardList = cardList.concat(cardList);

// Genrate card

const cardGenerate = () => {
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
    card.setAttribute("title", item.title);
    face.src = item.imgSrc;
    back.src = "/assets/images/FN-Verdensmaal-ikon-logo.png";

    // lægger cards sammen med gameBorad
    gameBorad.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

// checker om at cards macher

const checkCards = (e) => {
  console.log(e);
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  // if section

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("title") ===
      flippedCards[1].getAttribute("title")
    ) {
      console.log("match");
    } else {
      console.log("wrong");
    }
  }
};

cardGenerate();
