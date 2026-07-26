import { boardCoordinates } from "./Data/boardCoordinates.js";

let position = 1;
let followers = 0;

const token = document.getElementById("player");
const rollBtn = document.getElementById("rollBtn");

movePlayer(position);
updateFollowers();

rollBtn.addEventListener("click", () => {

  const dice = Math.floor(Math.random() * 6) + 1;

  position += dice;

  if (position > 20) {

    position -= 20;

    followers += 500;

    showCard(
      "🏁 Новый круг",
      "+500 подписчиков за полный круг"
    );
  }

  movePlayer(position);

  setTimeout(() => {
    handleCell(position);
  }, 300);

});

function movePlayer(pos) {

  const cell = boardCoordinates[pos];

  if (!cell) {
    console.log("Нет координат для клетки:", pos);
    return;
  }

  token.style.position = "absolute";
  token.style.left = cell.x + "px";
  token.style.top = cell.y + "px";
}

function handleCell(pos) {

  switch (pos) {

    case 1:
      followers += 1000;
      showCard(
        "🚀 Старт",
        "+1000 подписчиков"
      );
      break;

    case 2:
    case 4:
    case 5:
    case 7:
    case 8:
    case 9:
    case 11:
    case 13:
    case 14:
    case 16:
    case 18:

      followers += 500;

      showCard(
        "📷 Стрим",
        "+500 подписчиков"
      );
      break;

    case 3:

      followers += 25000;

      showCard(
        "🎬 Клип",
        "Твой Reels залетел в рекомендации. +25000 подписчиков"
      );
      break;

    case 6:

      followers -= 10000;

      showCard(
        "💀 Отмена",
        "Чат не понял шутку. -10000 подписчиков"
      );
      break;

    case 10:

      followers += 100000;

      showCard(
        "🔥 Вирус",
        "Видео стало вирусным. +100000 подписчиков"
      );
      break;

    case 12:

      followers += 10000;

      showCard(
        "🍔 За едой",
        "Удачный перекус на стриме. +10000 подписчиков"
      );
      break;

    case 15:

      followers += 25000;

      showCard(
        "🐺 Коллаб",
        "Совместный стрим принёс +25000 подписчиков"
      );
      break;

    case 17:

      followers -= 20000;

      showCard(
        "🤡 Кринж",
        "Неудачный момент попал в нарезки. -20000 подписчиков"
      );
      break;

    case 19:

      followers += 20000;

      showCard(
        "🎁 Донат",
        "Щедрый донат-марафон. +20000 подписчиков"
      );
      break;

    case 20:

      followers += 150000;

      showCard(
        "⭐ Джекпот",
        "Ты попал во все рекомендации. +150000 подписчиков"
      );
      break;
  }

  if (followers < 0) {
    followers = 0;
  }

  updateFollowers();
  checkWin();
}

function updateFollowers() {

  const followersElement = document.getElementById("followers");

  followersElement.innerText =
    "Подписчики: " +
    followers.toLocaleString("ru-RU");
}

function showCard(title, text) {

  const card = document.getElementById("eventCard");

  document.getElementById("cardTitle").innerText = title;
  document.getElementById("cardText").innerText = text;

  card.classList.remove("hidden");
}

window.closeCard = function () {

  document
    .getElementById("eventCard")
    .classList.add("hidden");
};

function checkWin() {

  if (followers >= 1000000) {

    showCard(
      "🏆 Победа!",
      "Ты набрал 1 000 000 подписчиков!"
    );

    rollBtn.disabled = true;
  }
}
