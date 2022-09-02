async function games() {
  const BaseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GrlP35gyONINxwNnhDtc/scores';
  const list = await fetch(BaseUrl);
  const scorelist = await list.json();
  const scores = document.querySelector('.scores');
  scores.innerHTML = '';
  for (let i = 0; i < scorelist.result.length; i += 1) {
    scores.innerHTML += `<li class="scoreboard"> ${scorelist.result[i].user} : ${scorelist.result[i].score} </li>`;
  }
}

export default games;