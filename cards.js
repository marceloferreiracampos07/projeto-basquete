const lendario = [
    "assets/cards/Lendário/Giannis lendario.png",
    "assets/cards/Lendário/kobe bryant lendario.png",
    "assets/cards/Lendário/Lebron James lendario.png",
    "assets/cards/Lendário/michael jordan lendario.png",
    "assets/cards/Lendário/stephen curry lendario.png"
  ];
  
  const epico = [
    "assets/cards/Épico/Carmelo-epico.png",
    "assets/cards/Épico/Damian-epica.png",
    "assets/cards/Épico/Harden-epica.png",
    "assets/cards/Épico/RayAllen-epica.png",
    "assets/cards/Épico/Steve Nash epica.png",
    "assets/cards/Épico/Tracy McGrady epica.png",
    "assets/cards/Épico/Westbrook-epica.png"
  ];

  const raro = [
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
    "assets/cards/Raro/VinceCarter-rara.png",
  ];

  const comum = [
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
    "assets/cards/Comum/Tobias Harris comum.png",
  ];

  const comum2 = [
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
    "assets/cards/Comum/Tobias Harris comum.png",
  ];


  
  function sorteioCards(array) {
    const indice = Math.floor(Math.random() * array.length);
    return array[indice];
  }
  
  function sorteioPacotes() {
    const imgLendario = sorteioCards(lendario);
    const imgEpico = sorteioCards(epico);
    const imgraro = sorteioCards(raro);
    const imgcomum = sorteioCards(comum);
    const imgcomum2 = sorteioCards(comum2);
  
    document.getElementById("carta1").src = imgLendario;
    document.getElementById("carta2").src = imgEpico;
    document.getElementById("carta3").src = imgraro;
    document.getElementById("carta4").src = imgcomum;
    document.getElementById("carta5").src = imgcomum2
  }
  