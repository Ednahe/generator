const btn = document.getElementById("btn");
let output = document.getElementById("output");
let cite = document.getElementById("quote");
const container = document.getElementById("contain_toast");
const containRain = document.getElementById("contain_rain");
const secondButton = document.getElementById("second_button");
const thirdButton = document.getElementById("third_button");
const grass = document.querySelector('.contain_grass');
const insulte = [
  "Zouave",
  "Zapothèque",
  "Troufignol",
  "Topinambour",
  "Tas de cornichon",
  "Sapajou",
  "Saltimbanque",
  "Rhizopode",
  "Pyrophore",
  "Polichinelle",
  "Pirate ",
  "Phylactère",
  "Phénomène",
  "Zoulou",
  "Pantoufle",
  "Ostrogoth",
  "Oryctérope",
  "Moule à gaufres",
  "Mamelouk",
  "Macaque",
  "Isotope",
  "Hurluberlu",
  "Gyroscope",
  "Gangster",
  "Flibustier",
  "Extrait de cornichon",
  "Escogriffe",
  "Enragé",
  "Emplâtré",
  "Cyrano à quatre pattes",
  "Cornichon",
  "Coléoptère",
  "Capitaine de bateau-lavoir",
  "Brontosaure",
  "Arlequin",
  "Anacoluthe",
  "Amphitryon",
];
const quote = [
  "à la graisse de hérisson",
  "mal embouché",
  "de mille sabords !",
  "à roulettes",
  "de carnaval",
  "mal réveillé",
  "à bavette",
  "mal léché",
  "de mille millions de mille sabords !",
  "à la noix de coco",
  "des Carpathes",
  "de tonnerre de Brest",
  "à la sauce tartare",
  "mal empaillée",
  "à la mie de pain",
  "de malheur",
  "du diable",
];

const generateGif = () => {
  const containGif = document.querySelector('.contain_gif');
  const image = new Image(24, 24);
  image.src = '../image/16.gif';
  image.classList.add('chenille');
  containGif.appendChild(image);
}

const tabImg = [
  "url('../image/background.jpg')",
  "url('../image/black-brick-wall-textured-background.jpg')",
  "url('../image/chaton.jpg')",
  "url('../image/dark-empty.jpg')",
  "url('../image/empty-red-brick-wall.jpg')"
]

const mainBalise = document.querySelector('main');
const buttonBackground = document.getElementById('btnBackground');
const comment = document.getElementById('comment');
const containComment = document.getElementById('contain_comment');
const containQuote = document.getElementById('containQuote');

const changeComment1 = () => {
  comment.innerHTML = "Waaaaaaaaaw (clique encore)";
  comment.style.color = "black";
  containComment.style.boxShadow = "1px 1px 3px -1px #e25620";
  output.style.color = "#00ffce";
  cite.style.color = "#00ffce";
  containQuote.style.boxShadow = "2px 5px 30px 3px black"
  containQuote.style.background = "none";
  secondButton.style.background = "none";
  secondButton.style.opacity = "1";
  thirdButton.style.background = "none";
  thirdButton.style.opacity = "1";
}

const changeComment2 = () => {
  comment.innerHTML = "Incroyable !!!";
  comment.style.color = "antiquewhite";
  containComment.style.boxShadow = "1px 1px 3px 6px antiquewhite";
  containQuote.style.boxShadow = "2px 5px 30px 3px white";
}

const changeComment3 = () => {
  comment.innerHTML = "Trop mignon 😍";
  comment.style.color = "red";
  containComment.style.boxShadow = "1px 2px 8px 2px red";
  output.style.color = "black";
  cite.style.color = "black";
  containQuote.style.boxShadow = "2px 5px 30px 3px black";
  secondButton.style.background = "black";
  secondButton.style.opacity = "0.6";
  thirdButton.style.background = "black";
  thirdButton.style.opacity = "0.6";
}

const changeComment4 = () => {
  comment.innerHTML = "😲 Komcébo 😲";
  comment.style.color = "#001f7a";
  containComment.style.boxShadow = "1px 2px 8px 2px #001f7a";
  output.style.color = "antiquewhite";
  cite.style.color = "antiquewhite";
  containQuote.style.boxShadow = "2px 5px 30px 3px antiquewhite";
  secondButton.style.background = "none";
  secondButton.style.opacity = "1";
  thirdButton.style.background = "none";
  thirdButton.style.opacity = "1";
}

const changeComment5 = () => {
  comment.innerHTML = "Le mur est en brique 🤓";
  comment.style.color = "#fffdfd";
  containComment.style.boxShadow = "2px 4px 16px 4px #fffdfd";
  output.style.color = "#fffdfd";
  cite.style.color = "#fffdfd";
  containQuote.style.boxShadow = "2px 5px 30px 3px #fffdfd";
  containQuote.style.background = "black";
  secondButton.style.background = "black";
  secondButton.style.opacity = "0.8";
  thirdButton.style.background = "black";
  thirdButton.style.opacity = "0.8";
}

let count = 0;
const counterClick =() => {
  count++;
}

const changeBackground = () => {

  buttonBackground.addEventListener('click', counterClick);

  if (count === 0) {
    mainBalise.style.backgroundImage = tabImg[0];
    changeComment1();
  } else if (count === 1) {
    mainBalise.style.backgroundImage = tabImg[1];
    changeComment2();
  } else if (count === 2) {
    mainBalise.style.backgroundImage = tabImg[2];
    changeComment3();
  } else if (count === 3) {
    mainBalise.style.backgroundImage = tabImg[3];
    changeComment4();
  } else if (count === 4) {
    mainBalise.style.backgroundImage = tabImg[4];
    changeComment5();
    count = -1;
  } else {
    console.log('bug');
  }
}

const haddock = document.getElementById('haddock');
const tournesol = document.getElementById('tournesol');
const adaptivImg = document.getElementById('adaptivImg');

let counter = 0;
const countClick = () => {
  counter++;
}

const changeImg = () => {
  adaptivImg.addEventListener('click', countClick);
  if (counter === 0) {
    haddock.classList.remove('card');
    tournesol.classList.add('card');
  } else if (counter === 1) {
    haddock.classList.add('card');
    tournesol.classList.remove('card');
    counter = -1;
  }
}

const main = () => {
  onClick();
  generateGif();
};

const onClick = () => {
  btn.addEventListener("click", avis);
  btn.addEventListener("click", randomise);
  btn.addEventListener("click", notification);
  secondButton.addEventListener("click", rain);
  thirdButton.addEventListener("click", removeRain);
  buttonBackground.addEventListener('click', changeBackground);
  adaptivImg.addEventListener('click', changeImg);
};

const randomise = () => {
  let randomInsulte = insulte[Math.floor(Math.random() * insulte.length)];
  output.innerHTML = randomInsulte;
};

const avis = () => {
  let randomAvis = quote[Math.floor(Math.random() * quote.length)];
  cite.innerHTML = randomAvis;
};

const notification = () => {
  const notif = document.createElement("p");
  notif.classList.add("notif");
  notif.innerText = "Ha ha !!";
  container.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 2500);
};

// partie pluie

const rain = () => {
  window.rainInterval = setInterval(water, 150);
  secondButton.style.display = 'none';
  thirdButton.style.display = 'block';
  grass.classList.add('revelate_grass')
};

const water = () => {
  const goutte = document.createElement("div");
  goutte.classList.add("goutte");

  goutte.style.left = Math.random() * 150 + "vw";
  goutte.style.animationDuration = Math.random() * 2 + 6 + "s";

  goutte.innerText = "💧";
  containRain.appendChild(goutte);
  setTimeout(() => {
    goutte.remove();
  }, 6000);
};

const removeRain = () => {
   clearInterval(rainInterval);
   secondButton.style.display = 'block';
   thirdButton.style.display = 'none';
   grass.classList.remove('revelate_grass')
};

addEventListener("load", main);