import './style.css';
import gamelist from './Modules/score.js';
import games from './Modules/store.js';

const btn = document.querySelector('.btn');
const name = document.querySelector('#name');
const score = document.querySelector('#score');
const submit = document.querySelector('#submit');

function list(i) {
  i.preventDefault();
  const play = name.value;
  const playScore = score.value;

  gamelist(play, playScore);
  name.value = '';
  score.value = '';
}

submit.addEventListener('click', list);
btn.addEventListener('click', games);
