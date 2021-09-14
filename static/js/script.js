//index html


//arena html variables
//actions elements
const actionMenu = document.getElementById('actions');
const attackButton = document.getElementById('attack');
const abilitiesButton = document.getElementById('abilities');
let character_data = []
let enemy_data = []
let hp = 0
//abilitiesMenu elements
const abilitiesMenu = document.getElementById('abilitiesMenu');


//player elements

//button actions
attackButton.addEventListener('click', attack);
abilitiesButton.addEventListener('click', goAbilitiesMenu);

function attack() {
  // get_character_info()
  // get_enemy_info()
  // console.log(enemy_data)
  // console.log("HP: " + enemy_data[1] - character_data[2] + enemy_data[3])
  //  - playerHP.innerHTML.slice(4) + enemyArmor.innerHTML.slice(7)
  enemyHP.innerHTML = `HP: ${enemyHP.innerHTML.slice(4) - playerDMG.innerHTML.slice(8) + enemyArmor.innerHTML.slice(8)}`
  enemyAttack()
}

function enemyAttack() {
  playerHP.innerHTML = `HP: ${playerHP.innerHTML.slice(4) - enemyDMG.innerHTML.slice(8) + playerArmor.innerHTML.slice(8)}`
}


// function get_character_info() {
//   fetch(`/character/info?element=${playerName.innerHTML}`)
//   .then( result => result.json())
//   .then( data => {
//     return character_data.push(data)
//   });
// }



// function get_enemy_info() {
//   fetch(`/character/info?element=${enemyName.innerHTML}`)
//   .then( result => result.json())
//   .then( data => {
//     return enemy_data.push(data)
//   });
// }


function goAbilitiesMenu() {
  actionMenu.parentNode.removeChild(actionMenu)
  abilitiesMenu.style.display = "flex"
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