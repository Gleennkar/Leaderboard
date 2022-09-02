// const { v4: uuidv4 } = require('uuid');

// export default class PIECE {
//   constructor(name, score) {
//     this.name = name;
//     this.score = score;
//     this.id = uuidv4();
//   }
// }
// 'Game with ID: GrlP35gyONINxwNnhDtc added.'}

async function userScores(a, b) {
  const BaseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GrlP35gyONINxwNnhDtc/scores';
  fetch(BaseUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: a,
      score: b,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json()).then((data) => data);
}

export default userScores;