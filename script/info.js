const arrowDown = document.getElementById('arrowDown');
const infoLeft = [...document.querySelectorAll('.contain_info')]
const infoRight = [...document.querySelectorAll('.contain_info_right')]
const paraLeft = [...document.querySelectorAll('.left')]
const paraRight = [...document.querySelectorAll('.right')]

const revelateFirst = () => {
    infoLeft[0].style.display = 'flex'
    paraLeft[0].classList.add('para_left')
    setTimeout(() => {
        paraLeft[0].style.opacity = '1';
    }, 2000);
}

const revelateSecond = () => {
    infoRight[0].style.display = 'flex'
    paraRight[0].classList.add('para_right')
    setTimeout(() => {
        paraRight[0].style.opacity = '1';
    }, 2000);
}

const revelateThird = () => {
    infoLeft[1].style.display = 'flex'
    paraLeft[1].classList.add('para_left')
    setTimeout(() => {
        paraLeft[1].style.opacity = '1';
    }, 2000);
}

const revelateFour = () => {
    infoRight[1].style.display = 'flex'
    paraRight[1].classList.add('para_right')
    setTimeout(() => {
        paraRight[1].style.opacity = '1';
    }, 2000);
}

const revelateFive = () => {
    infoLeft[2].style.display = 'flex'
    paraLeft[2].classList.add('para_left')
    setTimeout(() => {
        paraLeft[2].style.opacity = '1';
    }, 2000);
}

const revelateSix = () => {
    infoRight[2].style.display = 'flex'
    paraRight[2].classList.add('para_right')
    setTimeout(() => {
        paraRight[2].style.opacity = '1';
    }, 2000);
}

const revelatePixel = () => {
    const pixel = [...document.querySelectorAll('.pix')]

    for (let i = 0; i < pixel.length; i++) {
        pixel[i].style.opacity = '1'        
    }
}

const spanHide = document.getElementById('spanHide')
const pixelHide = document.querySelector('.pixel5')

const revelateModal = () => {
    const modal = document.querySelector('.modal')
    modal.style.transform = 'scale(1)'
}

const revelateModalLoose = () => {
    const modalLoose = document.querySelector('.modal_loose')
    modalLoose.style.transform = 'scale(1)'
    setTimeout(() => {
        alert(' ॊ¿‡∂πεķŦ۩۝°ஜҳ̸Ҳ̸ҳπεķŦ۩۞۩');
        createRefresh();
    }, 4000);
}

const revelateModalWin = () => {
    const modalWin = document.querySelector('.modal_win')
    modalWin.style.transform = 'scale(1)'
}

const createRefresh = () => {
    const contain = document.querySelector('.contain_btn_reload');
    const btnRefresh = document.createElement('button');
    btnRefresh.classList.add('btn_refresh');
    btnRefresh.innerText = "Rafraichir la page";
    contain.appendChild(btnRefresh);
    btnRefresh.addEventListener('click', refresh);
}

const refresh = () => {
    history.go(0)
}

const button = document.getElementById('button')

const ifValue = () => {
    const input = document.getElementById('inputNumber')

    if (input.value == 7) {
        revelateModalWin();
    } else {
        revelateModalLoose();
    }
}

const imgPair = [];
const imgImpair = [];

const moduloImg = () => {
const tabImg = [...document.querySelectorAll('.image')];
    for (let i = 0; i < tabImg.length; i++) {
        if(i % 2 === 0) {
            imgPair.push(tabImg[i]);
        } else {
            imgImpair.push(tabImg[i]);
        }        
    }
}

const addClassImg = () => {
    moduloImg();
    for (let i = 0; i < imgPair.length; i++) {
        imgPair[i].classList.add('img_left');     
    }
    for (let i = 0; i < imgImpair.length; i++) {
        imgImpair[i].classList.add('img_right');
    }
}

//const index = 0;

const btnRefreshTwo = document.getElementById('refresh2')

const main = () => {
    button.addEventListener('click', ifValue);
    pixelHide.addEventListener('click', revelateModal);
    arrowDown.addEventListener('click', revelateFirst);
    infoLeft[0].addEventListener('click', revelateSecond);
    infoRight[0].addEventListener('click', revelateThird);
    infoLeft[1].addEventListener('click', revelateFour);
    infoRight[1].addEventListener('click', revelateFive);
    infoLeft[2].addEventListener('click', revelateSix);
    spanHide.addEventListener('click', revelatePixel);
    btnRefreshTwo.addEventListener('click', refresh);
    addClassImg();
}


addEventListener('load', main);