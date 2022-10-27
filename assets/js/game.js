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
  const cardData = cardList;
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

    card.addEventListener("click", (tog) => {
      card.classList.toggle("toggleCard");
    });
  });
};

cardGenerate();
