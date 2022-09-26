// Deklarisanje varijabli
let crashRide = document.querySelector('#crash-ride');
let hiHatTop = document.querySelector('#hihat-top');

// Funkcije za pomjereranje elemenata kad se klikne odredeno dugme
const animateCrashOrRide = () => {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
};

const animateHiHatClosed = () => {
    hiHatTop.style.top = '171px';
};

window.addEventListener("keydown", (event) => {
    //console.log(event);
    let code = event.keyCode;
    // console.log(code);
    let keyElement = document.querySelector(`div[data-key="${code}"]`);
    if (!keyElement) {  // !key element - ne postoji
        console.log('nismo napisali data-key atribut za to slovo');
        return;
    };
    // console.log(keyElement);
    
    let audio = document.querySelector(`audio[data-key="${code}"]`);
    audio.currentTime = 0; // vratiti zvuk na pocetno stanje
    audio.play(); // funkcija koja pokrece zvuk

    // kod da se pomjeri ovaj dio bubnje gdje su slova E i R
    switch(code) {
        case 69:
        case 82:
            animateCrashOrRide();
            break;
        case 75:
        case 73:
            animateHiHatClosed();
            break;
    };

    keyElement.classList.add('playing');
}); 

// Funkcije za uklanjanje tranzicija
const removeCrashRideTransition = (event) => {
    if(event.propertyName !== 'transform') {
        // ako se desilo nesto sto nije transform onda prekidamo
        return;
    };
    event.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
};

const removeHiHatTopTransition = (event) => {
    if(event.propertyName !== 'top') {
        // ako se desilo nesto sto nije top onda prekidamo
        return;
    };
    event.target.style.top = '166px';
};

const removeKeyTransition = (event) => {
    if(event.propertyName !== 'transform') {
        return;
    };
    event.target.classList.remove('playing');
};

let drumKeys = document.querySelectorAll('.key');
drumKeys.forEach((key) => {
    key.addEventListener("transitionend", removeKeyTransition)
});

crashRide.addEventListener("transitionend", removeCrashRideTransition);
hiHatTop.addEventListener("transitionend", removeHiHatTopTransition);
