
const herois = [
  { nome: "Ana",    classe: "Maga do Frontend",   avatar: "🧙‍♀️", nivel: 5, vida: 80,  habilidades: ["CSS Flexbox", "Animações"] },
  { nome: "Bruno",  classe: "Guerreiro Backend",   avatar: "🛡️",  nivel: 7, vida: 100, habilidades: ["APIs REST", "Bancos de dados"] },
  { nome: "Carla",  classe: "Arqueira de Dados",   avatar: "🏹",  nivel: 4, vida: 60,  habilidades: ["Python", "Gráficos"] },
];

const poolDeRecrutas = [
  { nome: "Davi",   classe: "Ladino do DevOps",    avatar: "🥷",  nivel: 3, vida: 50, habilidades: ["Docker", "CI/CD"] },
  { nome: "Elisa",  classe: "Clériga do QA",       avatar: "✨",  nivel: 6, vida: 90, habilidades: ["Testes", "Bugs"] },
  { nome: "Fábio",  classe: "Bardo do Design",     avatar: "🎨",  nivel: 2, vida: 40, habilidades: ["Figma", "UX"] },
];

function criarCardHeroi(heroi) {
  const listaHabilidades = heroi.habilidades
    .map((h) => `<li>${h}</li>`)
    .join("");

  return `
    <div class="card-heroi">
      <span class="avatar">${heroi.avatar}</span>
      <h2>${heroi.nome}</h2>
      <p class="classe">${heroi.classe} · Nível ${heroi.nivel}</p>
      <div class="barra">
        <div class="barra-preenchida" style="width: ${heroi.vida}%"></div>
      </div>
      <ul>${listaHabilidades}</ul>
    </div>
  `;
}

function renderizarGuilda() {
  const container = document.getElementById("guilda");
  container.innerHTML = herois.map(criarCardHeroi).join("");
}

function recrutarHeroi() {
  if (poolDeRecrutas.length === 0) {
    alert("Não há mais recrutas disponíveis!");
    return;
  }
  const novoHeroi = poolDeRecrutas.shift();
  herois.push(novoHeroi);
  renderizarGuilda();
}

document.getElementById("btn-recrutar").addEventListener("click", recrutarHeroi);

renderizarGuilda();
