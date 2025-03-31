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
// const nameField = document.getElementById('name');
// const roleField = document.getElementById('role');
// const emailField = document.getElementById('email');
// const imageField = document.getElementById('image');

// realizzo la funzione che mi permette di creare le card dei membri del team da stampare a video
const createMemberCard = (member) => {
  // creo la variabile che contiene la stringa con le istuzioni HTML
  const card = `<div class="col-12 col-md-6 col-lg-4 my-5 px-4">
                  <div class="team-card row">
                    <div class="card-image col-4 p-0 m-0">
                      <img src="${member.img}" alt="" class="img-fluid">
                    </div>
                    <div class="card-text col-8 d-flex bg-dark flex-column py-3 m-0">
                      <h3>${member.name}</h3>
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
}
