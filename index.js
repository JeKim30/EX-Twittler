const tweetButton = document.querySelector('.tweet-button');
const refreshButton = document.querySelector('.refresh-button');
const inputName = document.querySelector('.input-name');
const inputMessage = document.querySelector('.input-message');
const boxContainer = document.querySelector('.box-container');
const nullBox = document.querySelector('.null-box');

let date = new Date();
let now = date.format();

const NEW_DATA = DATA.slice();


function makeBox(user, message, date) {
  const divBox = document.createElement('div');
  divBox.className = 'divBox'
  const nameBox = document.createElement('button');
  nameBox.addEventListener('click', handleFilter);
  const msgBox = document.createElement('p');
  const dateBox = document.createElement('p');

  nameBox.innerHTML = user;
  msgBox.innerHTML = message;
  dateBox.innerHTML = date;

  [nameBox, msgBox, dateBox].forEach(item => {
    divBox.appendChild(item);
  })

  boxContainer.appendChild(divBox);
}

function handleTweet() {
  let iName = inputName.value;
  let iMessage = inputMessage.value;
  makeBox(iName, iMessage, now)
  let newObj = {user: iName, message: iMessage, created_at: now}
  NEW_DATA.push(newObj);
}

function handleRefresh() {
  let randomData = generateNewTweet();
  makeBox(randomData.user, randomData.message, now);
  let newObj = {user: randomData.user, message: randomData.message, created_at: now}
  NEW_DATA.push(newObj);
}

function handleFilter() {
  boxContainer.innerHTML = '';
  NEW_DATA
    .filter(data => data.user === (this.textContent))
    .forEach(data => {
      makeBox(data.user, data.message, data.created_at)
    })
}


function pageOnLoad() {
  DATA.forEach(item => {
    makeBox(item.user, item.message, item.created_at)
  })
}



function init() {
  pageOnLoad();
  tweetButton.addEventListener('click', handleTweet);
  refreshButton.addEventListener('click', handleRefresh);
}

init()