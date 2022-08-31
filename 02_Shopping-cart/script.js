function validacija() {
    let input = document.querySelector('#email');
    let value = input.value;

    // Provjera da li value(string sadrzi @ i .)
    if(value.includes('@') && value.includes('.')) {

        let pozicijaAt = value.indexOf('@'); // uzimamo poziciju @
        let pozicijaTacka = value.indexOf('.'); // uzimamo poziciju .

        // uzima vrijednost izmedu pozicija. Ne ukljucuje posljednju poziciju
        let izmedjuAtTacka = value.substring(pozicijaAt + 1, pozicijaTacka);
        // console.log(izmedjuAtTacka);
        // console.log(izmedjuAtTacka.length);

        // da li izmedu . i @ imamo vise od 0 karaktera
        if (izmedjuAtTacka.length > 0) {
           let prijeAt =  value.substring(0, pozicijaAt);

           // da li prije @ imamo vise od 2 karaktera
           if (prijeAt.length > 2 ){
                let poslijeTacke = value.substring(pozicijaTacka + 1, value.length);

                // da li poslije tacke imamo vise od 1 karaktera
                if (poslijeTacke.length > 1) {
                    console.log('Email je validan');
                } else {
                    console.error('Email nije validan');
                }
                // console.log(poslijeTacke);
                // console.log('Dobro je');
           } else {
                console.error('Email nije validan')
           }
           // console.log(prijeAt);
           // console.log('Dobro je');
        } 
        else {
            console.error('Email nije validan');
        }

        // console.log(value.substring(pozicijaAt + 1, pozicijaTacka));
        // console.log(value.indexOf('@'));
        // console.log(value.indexOf('.'));
        // console.log('Validan email');
        // console.log(value.substring(0, 5));
    }
    else {
        console.error('Email nije validan');
    };

    //console.log(value);
    // console.log(input);
    // console.log('text');
}











// Peti dio videa


// function testing() {
//     let gl_div = document.querySelector('.glavni-div');
//     // gl_div.innerHTML = '<hr>';
//     gl_div.innerHTML = `
//         <span>
//             Klikni ovaj link: <a href="#">Link</a>
//         </span>
//     `;
// }












// Cetvrti dio videa


// function testing() {
//     let link = document.querySelector('.drugi-link');
//    // console.log(link.closest('div'));
//    // console.log(link.closest('.inner-div'));
//    // link.setAttribute('class', 'plava-boja');
//    // link.setAttribute('href', 'https://www.google.ba');
//    // console.log(link.getAttribute('data-text'));
//    link.removeAttribute('data-test');
// };












// Treci dio videa


// function testing() {
//     // let link2 = document.querySelector('.drugi-link');
//     // console.log(link2);
//     // console.log(link2.nextSibling);
//     // console.log(link2.previousElementSibling);
//     // console.log(link2.nextElementSibling);

//     let link2 = document.querySelector('.drugi-link');
//     let link1= link2.previousElementSibling;
//     let link3 = link2.nextElementSibling;

//     console.log(link1.innerText);
//     console.log(link2.innerText);
//     console.log(link3.innerText);
// }












// Drugi dio videa


// function testing() {
//     console.log('test');
//     let linkovi = document.querySelectorAll('.glavni-div .inner-div span .moj-link');
//     console.log(linkovi[0].innerText);
// }













// Prvi dio videa


// function pokreniMe(dugme) {
//     let nazivDugmeta = dugme.innerText;
//     //console.log(nazivDugmeta);

//     // let klasaDugmeta = dugme.classList.value;
//     let klasaDugmeta = dugme.className;
//     console.log(klasaDugmeta);

//     let message = document.querySelector('#kliknutoDugme');
//    // message.innerHTML = 'Pozdrav';
//     message.innerHTML = nazivDugmeta + ' - ' + klasaDugmeta;

//    // console.log(dugme);
// }

