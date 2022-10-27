import { GoalModal } from "./modal.js";
const gameBorad = document.getElementById("gameBorad");
const numCards = 10;
let cardList = GoalModal();

cardList = cardList.slice(0, numCards);
cardList = cardList.concat(cardList);

const randommize = () => {
  const cardData = cardList;
  cardData.sort(() => Math.random() - 0.5);
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

// Genrate card

const cardGenerate = () => {
  const cardData = randommize();
  console.log(cardData);
  // Html
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");

    card.classList.add("card");
    face.classList.add("face");
    back.classList.add("back");
    // Giver card info med billeder
    face.src = item.imgSrc;
    // lægger cards sammen med gameBorad
    gameBorad.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
  });
};

cardGenerate();
