const lendario = [
  //lista de cartas lendarias
  "assets/cards/Lendário/Giannis lendario.png",
  "assets/cards/Lendário/kobe bryant lendario.png",
  "assets/cards/Lendário/Lebron James lendario.png",
  "assets/cards/Lendário/michael jordan lendario.png",
  "assets/cards/Lendário/stephen curry lendario.png"
];

const epico = [
  //lista de cartas epicas
  "assets/cards/Épico/Carmelo-epico.png",
  "assets/cards/Épico/Damian-epica.png",
  "assets/cards/Épico/Harden-epica.png",
  "assets/cards/Épico/RayAllen-epica.png",
  "assets/cards/Épico/Steve Nash epica.png",
  "assets/cards/Épico/Tracy McGrady epica.png",
  "assets/cards/Épico/Westbrook-epica.png"
];

const raro = [
  //lista de cartas raras
  "assets/cards/Raro/Amar-rara.png",
  "assets/cards/Raro/Billups-rara.png",
  "assets/cards/Raro/Davis-rara.png",
  "assets/cards/Raro/DeronWilliams-rara.png",
  "assets/cards/Raro/DraymondGreen-rara.png",
  "assets/cards/Raro/DwightHoward-rara.png",
  "assets/cards/Raro/JimmyButler-rara.png",
  "assets/cards/Raro/JohnWall-rara.png",
  "assets/cards/Raro/KevinLove-rara.png",
  "assets/cards/Raro/KlayThompson-rara.png",
  "assets/cards/Raro/Manu-Ginóbili-rara.png",
  "assets/cards/Raro/Pierce-rara.png",
  "assets/cards/Raro/ShawnKemp-rara.png",
  "assets/cards/Raro/TonyParker-rara.png",
  "assets/cards/Raro/VinceCarter-rara.png"
];

const comum = [
  //lista de cartas comuns
  "assets/cards/Comum/Al Horford comum.png",
  "assets/cards/Comum/Andre Iguodala comum.png",
  "assets/cards/Comum/Blake Griffin comum.png",
  "assets/cards/Comum/Brook Lopez comum.png",
  "assets/cards/Comum/Chris Bosh comum.png",
  "assets/cards/Comum/Danny Green comum.png",
  "assets/cards/Comum/DeMar DeRozan comum.png",
  "assets/cards/Comum/Derek Fisher comum.png",
  "assets/cards/Comum/Eric Gordon comum.png",
  "assets/cards/Comum/Harrison Barnes comum.png",
  "assets/cards/Comum/J.J. Redick comum.png",
  "assets/cards/Comum/Jamal Crawford comum.png",
  "assets/cards/Comum/Joe Johnson comum.png",
  "assets/cards/Comum/LaMarcus Aldridge comum.png",
  "assets/cards/Comum/Michael Finley comum.png",
  "assets/cards/Comum/Monta Ellis comum.png",
  "assets/cards/Comum/Pascal Siakam comum.png",
  "assets/cards/Comum/Peja Stojaković comum.png",
  "assets/cards/Comum/Rajon Rondo comum.png",
  "assets/cards/Comum/Ricky Rubio comum.png",
  "assets/cards/Comum/Rudy Gay comum.png",
  "assets/cards/Comum/Serge Ibaka comum.png",
  "assets/cards/Comum/Tobias Harris comum.png"
];

const raridades = [
  //definição de raridades e as probabilidades
  { nome: 'lendario', prob: 0.01, cartas: lendario }, // 1% de chance
  { nome: 'epico', prob: 0.04, cartas: epico }, // 4% de chance
  { nome: 'raro', prob: 0.25, cartas: raro }, // 25% de chance
  { nome: 'comum', prob: 0.70, cartas: comum } // 70% de chance
];

function sortearRaridades() { //sorteia uma raridade baseada nas probabilidades definidas
  const rand = Math.random(); // Gera um número aleatório entre 0 e 1
  let acumulado = 0; // Acumulador para verificar a faixa de probabilidade

  //vai em cada raridade para verificar qual foi sorteada
  for (const raridade of raridades) {
    acumulado += raridade.prob;
    if (rand <= acumulado) {
      return raridade; // Retorna a raridade sorteada
    }
  }

  return raridades[raridades.length - 1]; // Caso raro (se rand for maior que 1), retorna a última raridade
}

function sortearCarta() { //sorteia uma carta aleatória de uma raridade específica
  const raridade = sortearRaridades();  // Obtém uma raridade sorteada
  const cartas = raridade.cartas; // Array de cartas da raridade sorteada
  const indice = Math.floor(Math.random() * cartas.length); // Sorteia um índice
  return cartas[indice]; // Retorna o caminho da imagem da carta sorteada
}

//sorteia um pacote com 3 cartas e exibe na página
function sortearPacote() {
  // Sorteia e exibe 3 cartas (carta1, carta2, carta3)
  for (let i = 1; i <= 3; i++) {
    const carta = sortearCarta(); // Sorteia uma carta
    document.getElementById(`carta${i}`).src = carta; // Atualiza a imagem na página
  }
}
