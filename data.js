var DATA = [
  { user: 'Abraham Lincoln', message: '무력은 모든 것을 정복하지만, 그 승리는 오래가지 못한다.', created_at: '2019-01-03 12:30:20' },
  { user: 'Amy Dacyczyn', message: '창의성 없는 절약은 결핍이다.', created_at: '2019-01-04 18:30:20' },
  { user: 'Aristotle', message: '모든 것을 가졌다 해도 친구가 없다면, 아무도 살길 원치 않을 것이다.', created_at: '2019-01-05 07:30:20' },
  { user: 'Aristotle', message: '어떤 생각에 동의하지 않고도 그 생각을 해볼 수 있는 것이 교육받은 사람의 특징이다.', created_at: '2015-01-03 12:30:20' },
  { user: 'Shakespeare', message: '강력한 이유는 강력한 행동을 낳는다.', created_at: '2019-01-04 18:30:20' }
];

var randomUser = ['Abraham Lincoln', 'Amy Dacyczyn', 'Aristotle', 'William Shakespeare', 'Friedrich Nietzsche', 'Albert Einstein'];
var randomMessage = [
  '모든 것을 가졌다 해도 친구가 없다면, 아무도 살길 원치 않을 것이다.',
  '집을 가장 아름답게 꾸며주는 것은 자주 찾아오는 친구들이다.',
  '한 시간 독서로 누그러지지 않은 걱정은 결코 없다.',
  '좋은 책을 읽지 않는 사람은 책을 읽을 수 없는 사람보다 나을 바 없다.',
  '우정에서 가장 소중한 장식을 없애는 것은 바로 우정에서 존경심을 제거하는 것이다.',
  '절망은 마약이다. 절망은 생각을 무관심으로 잠재울 뿐이다.',
  '제우스신은 모든 인간의 계획을 성취시키지 않는다.',
  '나는 똑똑한 것이 아니라 단지 문제를 더 오래 연구할 뿐이다.'
]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateNewTweet() {
  var tweet = {};
  tweet.user = randomUser[getRandomInt(0, randomUser.length)];
  tweet.message = randomMessage[getRandomInt(0, randomMessage.length)];
  const d = new Date();
  tweet.created_at = d.format; // 어떻게 하면 보기 좋은 형태로 나타낼 수 있을까요?
  return tweet;
}

Number.prototype.padLeft = function() {
  if(this < 10) {
    return '0' + String(this);
  }
  else {
    return String(this);
  }
}

Date.prototype.format = function() {
  var yyyy = this.getFullYear();
  var month = (this.getMonth() + 1).padLeft();
  var dd = this.getDate().padLeft();
  var HH = this.getHours().padLeft();
  var mm = this.getMinutes().padLeft();
  var ss = this.getSeconds().padLeft();

  var format = [yyyy, month, dd].join('-') + ' ' + [HH, mm, ss].join(':');
  return format;
}