// Animacija za naslov

let textTag = document.querySelector('.section1 h2');
// console.log(textTag);
let text = textTag.textContent;
// console.log(text);
//textTag.classList = 'fadeMove';

let splittedText = text.split('');
// console.log(splittedText);
// console.log(typeof(splittedText));

// for (splittedLetter of splittedText) {
//     textTag.innerHTML += `<span>${splittedLetter}</span>`;
// } 

textTag.innerHTML = ' ';

for(let i = 0; i < splittedText.length; i++) {
    if(splittedText[i] == " "){
        splittedText[i] = "&nbsp;"
    }
    textTag.innerHTML += `<span>${splittedText[i]}</span>`;
} 

let k = 0;
let interval = setInterval(() => {
    // console.log('test ' + k);
    let spans = textTag.querySelectorAll('span');
    let singleSpan = spans[k];
    // console.log(spans[k]);
    singleSpan.className = 'fadeMove';
    k++;
    if(k === spans.length) {
        clearInterval(interval);
    }
}, 100);


// Event listener scroll za liniju koja ce polahko pomjerati

let border = document.querySelector('.border-line');
let animationWidth = 0;

window.onscroll = () => {
  // console.log(border);
  // border.style.width = '90%';
  // console.log(this.scrollY);
  if (this.oldScroll > this.scrollY) {
    console.log('ka gore');
    animationWidth -= 0.5;
  } else {
    console.log('ka dole');
    animationWidth += 0.5;
  }

  if (animationWidth >= 100) {
    animationWidth = 100;
  } 
//     else {
//     animationWidth += 1;
//   }
    if (animationWidth <= 0) {
        animationWidth = 0;
    };

  border.style.width = animationWidth + '%';
  console.log(animationWidth);

  this.oldScroll = this.scrollY;

  imageAnimation();
};



// Kod za animaciju slika

const imageAnimation = () => {
    let sectionForAnimation = document.querySelector('.section2 .images');
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    console.log('Section position: ' + sectionPosition);
    
    let screenPosition = window.innerHeight/1.3;
    console.log('Screen position: ' + screenPosition);
    
    let leftImage = document.querySelector('.slideFromLeft');
    let rightImage = document.querySelector('.slideFromRight');
    
    if(sectionPosition < screenPosition) {
        leftImage.classList.add('animated');
        rightImage.classList.add('animated');
    };
};
