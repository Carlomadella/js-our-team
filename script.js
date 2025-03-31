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
  const card = `<div class="col-12 col-md-6 col-lg-4">
                  <div class="team-card">
                    <div class="card-image">
                      <img src="${member.img}" alt="">
                    </div>
                    <div class="card-text d-flex">        
                      <h3>${member.name}</h3>
                      <p>${member.role}</p>
                      <a href="#">${member.email}</a>
                    </div>
                  </div>
                </div>`;
}

