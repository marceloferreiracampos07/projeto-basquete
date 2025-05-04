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
  
  function sorteioCards(array) {
    const indice = Math.floor(Math.random() * array.length);
    return array[indice];
  }
  
  function sorteioPacotes() {
    const imgLendariosrc = sorteioCards(lendario);
    const imgEpicosrc = sorteioCards(epico);
  
    document.getElementById("imagem1").src = imgLendariosrc;
    document.getElementById("imagem2").src = imgEpicosrc;
  }
  