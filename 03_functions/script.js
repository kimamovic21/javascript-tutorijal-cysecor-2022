// let btns = document.querySelectorAll('button');

// btns.forEach(function(btn) {
//     // Event listener koji ceka za klik, za svaki btn.
//     btn.addEventListener("click", function(event) {
//         // console.log(event.target);
//         // console.log('Kliknuto');
//         let clicked_btn = event.target;
//         console.log(clicked_btn.innerText);
//     });
// });

let link = document.querySelector('#link');
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});

let form = document.querySelector('form');
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log('test');
});

let opcije = document.querySelector('select');
opcije.addEventListener("change", (event) => {
    // console.log('test')
    console.log(event.target.value); // dobijemo citav element
});

window.addEventListener("resize", () => {
    //console.log(window.innerWidth);
    if(window.innerWidth > 1000) {
        console.log('Prozor veci od 1000')
    } else {
        console.log('Prozor manji od 1000');
    }
});

let input = document.querySelector('input');
input.addEventListener("keydown", (event) => {
   console.log(event.key);
   if (event.key === "Backspace") {
    alert('Obrisao si nesta');
   };
});

window.addEventListener("mousemove", (event) => {
    console.log('mis pomjeren')
});

// video 41:00





// btns.addEventListener("click", function() {
//     console.log('Kliknuto');
// });





// const klikni_me = (dugme) => {
//     console.log(dugme.innerText);
// }
 






// const klikni_me_nova = (a, b) => {
//     console.log( a + b);
// }

// klikni_me_nova(20, 30);





// const klikni_me_nova = () => {
//     let a = 5;
//     let b = 10;
//     console.log(a+b);
// }

// klikni_me_nova();





// function klikni_me() {
//     let a = 5;
//     let b = 10;
//     console.log(a+b);
// }

// klikni_me();






// function klikni_me() {
//     console.log('Kliknuto')
// }




