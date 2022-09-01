export default class STORE {
    static getScores = (piece) => {
      const scoresList = document.querySelector('.scores');

      const listedPiece = document.createElement('li');
      listedPiece.classList.add('listed-piece');
      listedPiece.dataset.id = piece.id;

      const pieceName = document.createElement('p');
      pieceName.classList.add('piece-name');
      pieceName.textContent = `${piece.name}:`;

      const pieceScore = document.createElement('p');
      pieceScore.classList.add('piece-score');
      pieceScore.textContent = piece.score;

      scoresList.appendChild(listedPiece);
      listedPiece.appendChild(pieceName);
      listedPiece.appendChild(pieceScore);
    }
}