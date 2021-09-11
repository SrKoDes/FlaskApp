//index html


//arena html variables
//actions elements
const actionMenu = document.getElementById('actions');
const attackButton = document.getElementById('attack');
const abilitiesButton = document.getElementById('abilities');

//abilitiesMenu elements
const abilitiesMenu = document.getElementById('abilitiesMenu');


//player elements
const roleName = "Bear"
const playerPicUrl= "/static/images/Bear.jpg"

//buttons
attackButton.addEventListener('click', populatePlayerDiv);
abilitiesButton.addEventListener('click', goAbilitiesMenu);

function getRandomDog() {
  fetch('https://random.dog/woof.json', )
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
  fetch(`/character/info?element=${roleName}`)
  .then( result => result.json())
  .then( data => {
    console.log(data)
    console.log(data[0])
      playerHP.innerHTML = `HP: ${data[0][1]}`
      playerDMG.innerHTML = `Damage: ${data[0][2]}`
      playerArmor.innerHTML = `Armor: ${data[0][3]}`
      playerSpecial.innerHTML = `SPECIAL ${data[0][4]}`
  });
  playerPic.innerHTML = `<img src = ${playerPicUrl}/>`
}


function goAbilitiesMenu() {
  actionMenu.parentNode.removeChild(actionMenu)
  abilitiesMenu.style.display = "flex"
}