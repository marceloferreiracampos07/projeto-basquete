const cardDescricao = {
  "assets/cards/Lendário/Giannis lendario.png": {
    leftText: "Giannis Antetokounmpo, o Greek Freak, é um superastro da NBA que domina as quadras com sua combinação única de tamanho, atleticismo e versatilidade. Um verdadeiro terror para os adversários e um show à parte para os fãs, ele já levou o Milwaukee Bucks ao topo e coleciona prêmios que o colocam entre os maiores da história.",
    rightText: "Campeão da NBA em 2021 pelo Milwaukee Bucks, MVP da finais de 2021, MVP da temporada regular em 2019 e 2020 e jogador defensivo do ano da NBA em 2020."
  },
  "assets/cards/Lendário/kobe bryant lendario.png": {
    leftText: "Kobe Bryant, conhecido como Black Mamba, foi uma lenda do basquete e um dos maiores jogadores da história da NBA. Sua carreira de 20 anos, toda dedicada ao Los Angeles Lakers, foi marcada por uma ética de trabalho implacável, paixão pelo jogo e uma mentalidade competitiva inigualável, que o levou a conquistar inúmeros títulos e a se tornar um ícone global.",
    rightText: "Campeão da NBA 5 vezes em (2000, 2001, 2002, 2009 e 2010), MPV das finais em 2009 e 2010, MVP da temporada regular em 2008, NBA all-Star 18 vezes (1998, 2000 -2016)-recorde de seleções consecutivas."
  },
  "assets/cards/Lendário/Lebron James lendario.png": {
    leftText: "LeBron James, apelidado de King James, é um dos atletas mais icônicos da história do esporte, amplamente considerado um dos maiores jogadores de basquete de todos os tempos. Sua longevidade, versatilidade e domínio em quadra, com passagens por Cleveland Cavaliers, Miami Heat e Los Angeles Lakers, o levaram a quebrar recordes e conquistar múltiplos campeonatos, consolidando seu legado como uma força transformadora na NBA.",
    rightText: "Campeão da NBA 4 vezes (2012, 2013, 2016 e 2020), MVP das Finais da NBA 4 vezes (2012, 2013, 2016 e 2020) e MVP da NBA 4 vezes (2009, 2010, 2012 e 2013)."
  },
  "assets/cards/Lendário/michael jordan lendario.png": {
    leftText: "Michael Jordan, o lendário Air Jordan, é amplamente considerado o maior jogador de basquete de todos os tempos. Com sua habilidade incomparável, instinto assassino em quadra e um carisma que transcendia o esporte, ele liderou o Chicago Bulls a duas dinastias de campeonatos na década de 90, tornando-se um ícone global e sinônimo de excelência.",
    rightText: "Campeão da NBA 6 vezes (1991, 1992, 1993, 1996, 1997, 1998) - todos com o Chicago Bulls, MVP da Finais da NBA 6 vezes (1991, 1992, 1993, 1996, 1997, 1998) - Recorde da NBA, MVP da NBA 5 vezes (1988, 1991, 1992, 1996, 1998), Jogador Defensivo do Ano da NBA em 1988 e NBA rookie of the year em 1985."
  },
  "assets/cards/Lendário/stephen curry lendario.png": {
    leftText: "Stephen Curry, o Chef Curry, é um armador que revolucionou o basquete moderno com sua habilidade de arremesso inigualável, especialmente de três pontos. Liderando o Golden State Warriors a múltiplos campeonatos, ele transformou a maneira como o jogo é jogado, provando que a precisão e o alcance podem ser tão dominantes quanto a força física, e solidificando seu lugar como um dos maiores atiradores e inovadores da história da NBA.",
    rightText: "Campeão da NBA 4 vezes (2015, 2017, 2018, 2022) e MVP da NBA 2 vezes (2015, 2016) - sendo o único MVP unânime da história (em 2016)."
  }
};


const modal = document.getElementById("cardModal");
const modalImg = document.getElementById("img01");
const closeBtn = document.getElementsByClassName("closeBtn")[0];
const leftModalText = document.getElementById('leftModalText');
const rightModalText = document.getElementById('rightModalText');

function openCardModal(imgSrc, fullSrc) {
    modal.style.display = "block";
    modalImg.src = fullSrc;

    const descricao = cardDescricao[fullSrc];

    if(descricao) {
        leftModalText.textContent = descricao.leftText;
        rightModalText.textContent = descricao.rightText;
    } else {
        leftModalText.textContent = "";
        rightModalText.textContent = "";
    }
}
if (modal) {
    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

window.openCardModal = openCardModal;