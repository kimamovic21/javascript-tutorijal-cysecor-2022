let config = {
    'ime_prezime': {
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    'korisnicko_ime': {
        required: true,
        minlength: 5,
        maxlength: 50,
    },
    'email': {
        required: true,
        email: true,
        minlength: 5,
        maxlength: 50,
    },
    'broj_telefona': {
        required: false,
        minlength: 9,
        maxlength: 13,
    },
    'lozinka': {
        required: true,
        minlength: 7,
        maxlength: 30,
        matching: 'ponovi_lozinku',
    },
    'ponovi_lozinku': {
        required: true,
        minlength: 7,
        maxlength: 30,
        matching: 'lozinka',
    }
};

console.log(config);

let validator = new Validator(config);



// objekat sa odredenom konfiguracijom za svako polje
