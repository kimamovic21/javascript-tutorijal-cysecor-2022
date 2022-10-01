let inputs = document.querySelectorAll('input');
// console.log(inputs);

// objekat u kojem cemo da cuvamo nase greske
let errors = {
    "ime_prezime": [],
    "korisnicko_ime": [],
    "email": [],
    "lozinka": [],
    "ponovi_lozinku": [],
};
// console.log(errors);

// pomocu for each petlje kroz sva polja i provjeriti koja je njihova vrijednost
inputs.forEach((element) => {
    // console.log(element);
    element.addEventListener('change', (event) => {
        let currentInput = event.target; // ako nesta promjenimo u input polju, u konzoli ce biti ispisan citav taj input
        // console.log(currentInput);
        let inputValue = currentInput.value;
        // console.log(inputValue);
        let inputName = currentInput.getAttribute('name');
        // console.log(inputName);

        if (inputValue.length > 4) {
            errors[inputName] = [];
           // console.log('Sve je uredu');
           switch(inputName) {

                case 'ime_prezime': 
                let validation = inputValue.trim();
                validation = validation.split(" ");
                if (validation.length < 2) {
                    // console.warn('Ne valja');
                    errors[inputName].push('Moras napisati ime i prezime');
                };
                // console.log(validation);
                break;

                case 'email': 
                    if(!validateEmail(inputValue)) {
                        // console.warn('Nije dobro');
                        errors[inputName].push('Neispravna email adresa');
                    } 
                break;

                case 'ponovi_lozinku':
                    let lozinka = document.querySelector('input[name="lozinka"]').value;
                    if(inputValue !== lozinka) {
                        errors[inputName].push('Lozinke se ne poklapaju');
                    };
                break;

           };

        } else {
            // console.warn('Nije uredu');
            errors[inputName] = ['Polje ne moze imati manje od 4 karaktera'];
        }
        //document.querySelector('div').innerHTML = `<ul><li>${errors[inputName[0]]}</li></ul>`;
        populateErrors();
    });
});

const populateErrors = () => {

    for(let elem of document.querySelectorAll('ul')) {
        elem.remove(); // Sprijecava da se vise puta ispisuje error na ekranu
    };

    console.log(Object.keys(errors)); // ispisuje samo kljuceve objekta errors
    for(let key of Object.keys(errors)) {
        let input = document.querySelector(`input[name="${key}"]`);
        // console.log(input);
        let parentElement = input.parentElement;
        // console.log(parentElement);
        let errorsElement = document.createElement('ul');
        parentElement.appendChild(errorsElement);
        // console.log(parentElement);
        errors[key].forEach((error) => {
            let li = document.createElement('li');
            li.innerText = error;
            errorsElement.appendChild(li);
        });
    };
    // console.log(errors);
};

const validateEmail = (email) => {
    if(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/.test(email)) {
        return true;
    }
    return false;
};
