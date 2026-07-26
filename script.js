let position = 1;
let followers = 0;

const token = document.getElementById("player");

const cells = {
  1:{x:60,y:700},
  2:{x:180,y:700},
  3:{x:300,y:700}
};

movePlayer();

document.getElementById("rollBtn").addEventListener("click",()=>{

  const dice = Math.floor(Math.random()*6)+1;

  position += dice;

  if(position > 3){
    position = 1;
  }

  movePlayer();

  handleCell(position);

});

function movePlayer(){

  token.style.left = cells[position].x + "px";
  token.style.top = cells[position].y + "px";

}

function handleCell(pos){

  if(pos === 2){

    followers += 500;

    updateFollowers();

    showCard(
      "📷 Стрим",
      "+500 подписчиков"
    );

  }

  if(pos === 3){

    followers += 25000;

    updateFollowers();

    showCard(
      "🎥 Клип",
      "Твой Reels залетел в рекомендации. +25000 подписчиков"
    );

  }

}

function updateFollowers(){

  document.getElementById("followers").innerText =
    "Подписчики: " + followers;

}

function showCard(title,text){

  document.getElementById("cardTitle").innerText = title;

  document.getElementById("cardText").innerText = text;

  document.getElementById("eventCard").classList.remove("hidden");

}

function closeCard(){

  document.getElementById("eventCard").classList.add("hidden");

}
