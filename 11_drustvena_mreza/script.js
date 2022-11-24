
// document.querySelector('#registracija').addEventListener('click', function() {
//     document.querySelector('.custom-modal').style.display = 'none';
// });

let registracijaDugme = document.getElementById('registracija');
let customModal = document.getElementById('customModal');
let closeModal = document.getElementById('closeModal');

registracijaDugme.addEventListener('click', function() {
    customModal.style.display = 'block';
});

closeModal.addEventListener('click', function() {
    customModal.style.display = 'none';
});

