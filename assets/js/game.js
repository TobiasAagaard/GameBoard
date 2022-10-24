import { GoalModal } from "./modal.js";

const gameborad = document.getElementById("gameBorad");
const numCards = 10;
let cardList = GoalModal();
cardList.sort(() => Math.random() - 0.5);
cardList = cardList.slice(0, numCards);
cardList = cardList.concat(cardList);
cardList.sort(() => Math.random() - 0.5);

for (let card of cardList) {
  let div = document.createElement("div");
  div.innerHTML = card.goal;
  gameborad.append(div);
}
