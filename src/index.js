import './style.css';
import STORE from './Modules/store.js';

const { v4: uuidv4 } = require('uuid');

const pieces = [
  {
    name: 'Joy',
    score: '200',
    id: uuidv4(),
  },

  {
    name: 'Mir',
    score: '120',
    id: uuidv4(),
  },

  {
    name: 'Gleen',
    score: '530',
    id: uuidv4(),
  },
];

const init = () => {
  pieces.forEach((piece) => STORE.getScores(piece));
};

init();