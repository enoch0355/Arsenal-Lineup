let footballTeam = {
  team: 'Arsenal',
  year: 2026,
  headCoach: 'Mikel Arteta',
  players: [
    { name: 'David Raya', position: 'goalkeeper', isCaptain: false },
    { name: 'Cristhian Mosquera', position: 'defender', isCaptain: false },
    { name: 'William Saliba', position: 'defender', isCaptain: false },
    { name: 'Gabriel Magalhães', position: 'defender', isCaptain: false },
    { name: 'Piero Hincapié', position: 'defender', isCaptain: false },
    { name: 'Declan Rice', position: 'midfielder', isCaptain: false },
    { name: 'Myles Lewis-Skelly', position: 'midfielder', isCaptain: false },
    { name: 'Bukayo Saka', position: 'forward', isCaptain: false },
    { name: 'Martin Ødegaard', position: 'midfielder', isCaptain: true },
    { name: 'Leandro Trossard', position: 'forward', isCaptain: false },
    { name: 'Kai Havertz', position: 'forward', isCaptain: false },
    { name: 'Kepa Arrizabalaga', position: 'goalkeeper', isCaptain: false },
    { name: 'Jurriën Timber', position: 'defender', isCaptain: false },
    { name: 'Riccardo Calafiori', position: 'defender', isCaptain: false },
    { name: 'Martin Zubimendi', position: 'midfielder', isCaptain: false },
    { name: 'Mikel Merino', position: 'midfielder', isCaptain: false },
    { name: 'Christian Nørgaard', position: 'midfielder', isCaptain: false },
    { name: 'Eberechi Eze', position: 'midfielder', isCaptain: false },
    { name: 'Noni Madueke', position: 'forward', isCaptain: false },
    { name: 'Max Dowman', position: 'midfielder', isCaptain: false },
    { name: 'Gabriel Martinelli', position: 'forward', isCaptain: false },
    { name: 'Viktor Gyökeres', position: 'forward', isCaptain: false },
    { name: 'Gabriel Jesus', position: 'forward', isCaptain: false }
  ]
};


const cardsContainer = document.getElementById('player-cards'); 
const positionDropdown = document.getElementById('players');


function displayPlayers(playerArray) {
  let newElem = '';

  for (const player of playerArray) {
    newElem += `
      <div class="player-card">
        <h2>${player.name} ${player.isCaptain ? '(Captain)' : ''}</h2>
        <p>Position: ${player.position}</p>
      </div>
    `;
  }
  cardsContainer.innerHTML = newElem;
}

displayPlayers(footballTeam.players);

positionDropdown.addEventListener('change', (event) =>{
  const selected = event.target.value;
  if(selected === 'all'){
    displayPlayers(footballTeam.players);
  }
  else{
    let specific = footballTeam.players.filter(player => player.position === selected);
    displayPlayers(specific);
  }
})

document.getElementById('team').textContent = footballTeam.team;

document.getElementById('year').textContent = footballTeam.year;

document.getElementById('head-coach').textContent = footballTeam.headCoach;

