const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// creo le variabili utili (da usare nel bonus)
const nameField = document.getElementById('name');
const roleField = document.getElementById('role');
const emailField = document.getElementById('email');
const imageField = document.getElementById('image');
const button = document.getElementById('send');
const memberForm = document.getElementById('member-form');

// realizzo la funzione che mi permette di creare le card dei membri del team da stampare a video
const createMemberCard = (member) => {
  // creo la variabile che contiene la stringa con le istuzioni HTML
  const card = `<div class="col-12 col-md-6 col-lg-4 my-5 px-4">
                  <div class="team-card row d-flex flex-wrap bg-dark">
                    <div class="card-image col-4 p-0 m-0">
                      <img src="${member.img}" alt="" class="img-fluid">
                    </div>
                    <div class="card-text col-8 d-flex flex-column m-0">
                      <h5>${member.name}</h5>
                      <p>${member.role}</p>
                      <a href="#">${member.email}</a>
                    </div>
                  </div>
                </div>`;
  console.log(card);

  return card;
}

// funzione che stampa a schermo il contenuto del mio array di oggetti
const renderTeam = (teamMembers) => {
  // creo variabile di tipo stringa, lasciata vuota perchè conterra' tutte le colonne da mostrare
  let cards = '';
  // creo ciclo for per ciclare l'array così che la stringa cards possa contenere tutte le card create nella funzione precedente
  for (let i = 0; i < teamMembers.length; i++) {
    cards += createMemberCard(teamMembers[i]);
  }
  // stampo la stringa cards nel document all'interno del div team-members presente nel file HTML
  document.getElementById('team-members').innerHTML = cards;
}

renderTeam(teamMembers);

button.addEventListener('click', (e) => {
  e.preventDefault();

  // recupero i valori inseriti nei campi della form
  const name = nameField.value;
  const role = roleField.value;
  const image = imageField.value;

  // controllo se tutti i campi sono stati compilati
  if(!name || !role || !image) {
      alert('Devi compilare tutti i campi');
      return;
  }

  // creo l'oggetto del nuovo membro
  const newMember = {
      name,
      role,
      image
  }

  // aggiungo il nuovo elemento nell'array
  teamMembers.push(newMember);

  nameField.value = '';
  roleField.value = '';
  imageField.value = '';

  // renderizzo il nuovo team
  renderTeam(teamMembers);

})