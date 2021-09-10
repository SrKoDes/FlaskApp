
//arena html
//actions elements
const actionMenu = document.getElementById('actions');
const attackButton = document.getElementById('attack');
const abilitiesButton = document.getElementById('abilities');

//abilitiesMenu elements
const abilitiesMenu = document.getElementById('abilitiesMenu');


//player elements
const playerPic = document.getElementById('playerPic');
const roleName = "Bear"


//buttons
attackButton.addEventListener('click', populatePlayerDiv);
abilitiesButton.addEventListener('click', goAbilitiesMenu);

// function getPlayer() {
//   playerResult.innerHTML = `<img src = "${'https://random.dog/cf730b6b-1810-4a1a-a2f3-583ee28dce4b.jpg'}"/>`
// }

function getRandomDog() {
  fetch('https://random.dog/woof.json')
  .then(result => result.json())
  .then( data => {
    if(data.url.includes('.mp4')) {
      getRandomDog();
    }
    else{
      playerPic.innerHTML = `<img src = "${data.url}"/>`
    }
  });
}

function populatePlayerDiv() {
  fetch(`/player/info?element=${roleName}`)
  .then( result => result.json())
  .then( data => {
      playerPic.innerHTML = data
  });
}

function goAbilitiesMenu() {
  actionMenu.parentNode.removeChild(actionMenu)
  abilitiesMenu.style.display = "flex"
}