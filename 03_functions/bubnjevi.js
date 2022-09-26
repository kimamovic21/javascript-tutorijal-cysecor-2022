let crashRide = document.querySelector('#crash-ride');
let hiHatTop = document.querySelector('#hihat-top');

window.addEventListener("keydown", () => {
    // console.log(event);
    let code = event.keyCode;
    let keyElement = document.querySelector(`div[data-key="${code}"]`);

    if (!keyElement) {
        console.log('nismo napisali data-key atribut za to slovo');
        return;
    } 
    // !key element - ne postoji

    // if (keyElement) {
    //     console.log('postoji')
    // }
    // else {
    //     console.log('ne postoji');
    // }

    // console.log(keyElement);

    let audio = document.querySelector(`audio[data-key="${code}"]`);
    audio.currentTime = 0; 
    audio.play();

    const animateCrashOrRide = () => {
        crashRide.style.transform = 'rotate(0deg) scale(1.5)';
    }

    const animateHiHatClosed = () => {
        hiHatTop.style.top = '171px';
    }

    // kod da se pomjeri ovaj dio bubnje gdje su slova E i R
    switch(code) {
        case 69:
        case 82:
            animateCrashOrRide();
            break;
        case 75:
            animateHiHatClosed();
            break;
    };

    keyElement.target.classList.add('playing');
});

const removeCrashRideTransition = (event) => {
    if(event.propertyName !== 'transform') {
        return;
    };
    event.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
};

const removeHiHatTopTransition = (event) => {
    if(event.propertyName !== 'top') {
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
hiHatTop.addEventListener('transitionend', removeHiHatTopTransition);