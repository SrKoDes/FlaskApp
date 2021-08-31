const catButton = document.getElementById('catButton');
const dogButton = document.getElementById('dogButton');
const catResult = document.getElementById('catPic');
const dogResult = document.getElementById('dogPic');

dogButton.addEventListener('click', getRandomDog);
catButton.addEventListener('click', getRandomCat);

function getRandomDog() {
  fetch('https://random.dog/woof.json')
  .then(result => result.json())
  .then( data => {
    if(data.url.includes('.mp4')) {
      getRandomDog();
    }
    else{
      dogResult.innerHTML = `<img src = "${data.url}"/>`
    }
  });
}

function getRandomCat() {
  fetch('https://aws.random.cat/meow')
  .then(result => result.json())
  .then( data => {
    if(data.file.includes('.mp4')) {
      getRandomCat();
    }
    else{
      catResult.innerHTML = `<img src = "${data.file}"/>`
    }
  });
}