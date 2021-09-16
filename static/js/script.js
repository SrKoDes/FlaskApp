//index html

//arena html variables
let enemyCounter = 1
//actions elements
const actionMenu = document.getElementById('actions');
const attackButton = document.getElementById('attack');
const abilitiesButton = document.getElementById('abilities');
//abilitiesMenu elements
const abilitiesMenu = document.getElementById('abilitiesMenu');
//player elements
//button actions
attackButton.addEventListener('click', attack);
abilitiesButton.addEventListener('click', goAbilitiesMenu);


function attack() {
    if (parseInt(enemyHP.innerHTML[4]) <= 0) {
        fightInfo.innerHTML = "Congratulations You Won!"
        enemyHP.innerHTML = "HP: 0"
    }
    else {
        enemyHP.innerHTML = `HP: ${enemyHP.innerHTML.slice(4) - playerDMG.innerHTML.slice(8) + enemyArmor.innerHTML.slice(8)}`
        if (parseInt(enemyHP.innerHTML[4]) <= 0) {
            fightInfo.innerHTML = "Congratulations you won!"
            enemyHP.innerHTML = "HP: 0"
            getNextEnemy()
        }
        else{enemyAttack()}
    }
}


function enemyAttack() {
    playerHP.innerHTML = `HP: ${playerHP.innerHTML.slice(4) - enemyDMG.innerHTML.slice(8) + playerArmor.innerHTML.slice(8)}`
    if (parseInt(playerHP.innerHTML[4]) <= 0) {
        fightInfo.innerHTML = "Oh no! You Lost!"
        playerHP.innerHTML = "HP: 0"
    }
}


function getNextEnemy() {
    fetch(`/enemy/info?element=${enemyCounter}`)
        .then( result => result.json())
        .then( data => {
            enemyName.innerHTML = data[1]
            enemyHP.innerHTML = `HP: ${data[2]}`
            enemyDMG.innerHTML = `Damage: ${data[3]}`
            enemyArmor.innerHTML = `Armor: ${data[4]}`
            enemySpecial.innerHTML = `SPECIAL ${data[5]}`
            enemyPic.innerHTML = `<img src = ${data[6]}/>`
        });
    enemyCounter ++
}

// function get_character_info() {
//     fetch(`/character/info?element=${playerName.innerHTML}`)
//     .then( result => result.json())
//     .then( data => {
//         return character_data.push(data)
//     });
// }



// function get_enemy_info() {
//     fetch(`/character/info?element=${enemyName.innerHTML}`)
//     .then( result => result.json())
//     .then( data => {
//         return enemy_data.push(data)
//     });
// }

function levelUpMenu() {
    actionMenu.parentNode.removeChild(actionMenu)
    levelUpMenu.style.display = "flex"
}

function goAbilitiesMenu() {
    actionMenu.parentNode.removeChild(actionMenu)
    abilitiesMenu.style.display = "flex"
}


// function populatePlayerDiv() {
//     fetch(`/character/info?element=${roleName}`)
//     .then( result => result.json())
//     .then( data => {
//         console.log(data)
//         console.log(data[0])
//             playerHP.innerHTML = `HP: ${data[0][1]}`
//             playerDMG.innerHTML = `Damage: ${data[0][2]}`
//             playerArmor.innerHTML = `Armor: ${data[0][3]}`
//             playerSpecial.innerHTML = `SPECIAL ${data[0][4]}`
//     });
//     playerPic.innerHTML = `<img src = ${playerPicUrl}/>`
// }



// function getRandomDog() {
//     fetch('https://random.dog/woof.json', )
//     .then(result => result.json())
//     .then( data => {
//         if(data.url.includes('.mp4')) {
//             getRandomDog();
//         }
//         else{
//             playerPic.innerHTML = `<img src = "${data.url}"/>`
//         }
//     });
// }