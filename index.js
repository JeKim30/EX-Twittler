const tweetButton = document.querySelector('.tweet-button');
const refreshButton = document.querySelector('.refresh-button');
const inputName = document.querySelector('.input-name');
const inputMessage = document.querySelector('.input-message');
const boxContainer = document.querySelector('.box-container')

let date = new Date();
let now = date.format();

function handleTweet() {
  let iName = inputName.value;
  let iMessage = inputMessage.value;
  
  const divBox = document.createElement('div');

  const nameBox = document.createElement('button');
  nameBox.innerHTML = iName;
  const msgBox = document.createElement('p');
  msgBox.innerHTML = iMessage;
  const dateBox = document.createElement('p');
  dateBox.innerHTML = now;

  [nameBox, msgBox, dateBox].forEach(item => {
    divBox.appendChild(item);
  })

  boxContainer.appendChild(divBox);
}

function handleRefresh() {
  alert('refresh');
}

function pageOnLoad() {
  
}

function init() {
  pageOnLoad();
  tweetButton.addEventListener('click', handleTweet);
  refreshButton.addEventListener('click', handleRefresh);
}

init()