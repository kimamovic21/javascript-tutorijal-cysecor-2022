let registracijaDugme = document.getElementById('registracija');
let customModal = document.getElementById('customModal');
let closeModal = document.getElementById('closeModal');

registracijaDugme.addEventListener('click', function() {
    customModal.style.display = 'block';
});

closeModal.addEventListener('click', function() {
    customModal.style.display = 'none';
});
