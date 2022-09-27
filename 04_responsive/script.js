// Ovo je responsive meni

const mobileMenu = () => {
   //  console.log('test');
   let menu = document.querySelector('.header ul');
   // console.log(menu);
   let btn = document.querySelector('.header button');

   if (btn.innerText === 'MENU'){
     console.log('MENU pise');
     menu.style.display = 'block';
     btn.innerText = 'CLOSE';
   }
   else {
     console.log('CLOSE pise');
     menu.style.display = 'none';
     btn.innerText = 'MENU';
    };
};




// Ovo je galerija slika

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

// Pomjeramo slike u desno
const moveRight = () => {
    console.log('right');
    // console.log(pictures);
    displayNone();

    imgNum++;

    if(imgNum === pictures.length) {
        imgNum = 0;
    }

    console.log(imgNum);

    // pictures[0].style.display = 'none';
    // pictures[1].style.display = 'block';
    pictures[imgNum].style.display = 'block';
};

// Pomjeramo slike u lijevo
const moveLeft = () => {
    console.log('left');
    displayNone();

    imgNum--;

    if(imgNum === -1) {
        imgNum = pictures.length - 1;
    }

    console.log(imgNum);
    // console.log(pictures);
    pictures[imgNum].style.display = 'block';
};

// Event listeneri za strelice
rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);

// Ova funkcija ce da sakrije slike
const displayNone = () => {
    pictures.forEach((picture) => {
        picture.style.display = 'none';
    });
};




// Portfolio filter

const portfolioSort = (button) => {
    // console.log(button);
    let category = button.getAttribute('data-category');
    // console.log(category);
    let portfolioItems = document.querySelectorAll('.portfolio-single-item');
    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    });

    if(category === 'sve') {
        portfolioItems.forEach((item) => {
            item.style.display = 'block';
        });
    };

    portfolioItems.forEach((item) => {
       // console.log(item.getAttribute('data-category'));
       if(item.getAttribute('data-category').includes(category)){
        item.style.display = 'block';
       };
    });
};




// Otvaramo model

// funkcija za otvaranje modala
const openModal = () => {
    // console.log('test');
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
};

// funkcija za zatvaranje modala
const closeModal = () => {
    // console.log('test');
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
};

