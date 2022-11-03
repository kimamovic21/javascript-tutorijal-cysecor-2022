class Validator {
    constructor(config) {
        this.elementsConfig = config;
        this.errors = {};
        this.generateErrorsObject();
        this.inputListener();
    };

    generateErrorsObject() {
        for(let field in this.elementsConfig) {
            this.errors[field] = [];
        };
    };

    inputListener() {
        let inputSelector = this.elementsConfig;
        for(let field in inputSelector) {
            let selector = `input[name="${field}"]`;
            let element = document.querySelector(selector);
            element.addEventListener('input', this.validate.bind(this));
        };
    };

    validate(e) {
        let elementFields = this.elementsConfig;

        let field = e.target;
        let fieldName = field.getAttribute('name');
        let fieldValue = field.value;

        this.errors[fieldName] = [];

        if (elementFields[fieldName].required) {
            if(fieldValue === '') {
                this.errors[fieldName].push('Polje je prazno');
            };
        };

        if (elementFields[fieldName].email) {
            if (!this.validateEmail(fieldValue)) {
                this.errors[fieldName].push('Neispravna email adresa');
            };
        };

        if (fieldValue.length < elementFields[fieldName].minlength || fieldValue.length > elementFields[fieldName].maxlength) {
            this.errors[fieldName].push(`Polje mora imati minimalno ${elementFields[fieldName].minlength} i maksimalno ${elementFields[fieldName].maxlength} karaktera`)
        };

        if (elementFields[fieldName].matching) {
            let matchingElement = document.querySelector(`input[name="${elementFields[fieldName].matching}"]`);

            if(fieldValue !== matchingElement.value) {
                this.errors[fieldName].push(`Lozinke se ne poklapaju`)
            };

            if (this.errors[fieldName].length === 0) {
                this.errors[fieldName] = [];
                this.errors[elementFields[fieldName].matching] = [];
            };
        };

        this.populateErrors(this.errors);
    }

    populateErrors(errors) {
        for (const element of document.querySelectorAll('ul')) {
            element.remove();
        };

        for (let key of Object.keys(errors)){
            let parentElement = document.querySelector(`input[name="${key}"`).parentElement
            let errorsElement = document.createElement('ul');
            parentElement.appendChild(errorsElement);

            errors[key].forEach(error => {
                let li = document.createElement('li');
                li.innerText = error;
                errorsElement.appendChild(li);
            });
         };
    };

    validateEmail(email) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            return true;
        };
        return false;
    };

};





/* 

-kreiramo klasu Validator i konstruktor funkciju
-console.log(config); mozemo napisati unutar konstruktor funkcije
-konfiguraciju prosljedujemo validatoru
-kreiramo funkciju generateErrorsObject() koja ce da generise greske
-dodajemo for petlju unutar generateErrorsObject() funkcije
-za svako polje imamo prazan niz u koji cemo smjestiti greske
-dodajemo inputListener() funkciju
-u elementsConfig su upisani nazivi svih ovih polja
-preko petlje mozemo proci kroz sve nazive polja i da napravimo listener za svaki od njih
-u ovoj metodi input je event listener
-this.validate je funkcija koju trebamo kreirati 

 let selector = `input[name="${field}"]`;
 let element = document.querySelector(selector);

-ove dvije linije koda mozemo jos napisati i kao: 
 let element = document.querySelector(`input[name="${field}"]`);

-sa let field = e.target uzimamo trenutno polje u koje smo nesta upisali
-dodajemo if uslov sa kojim provjeramo da li je polje obavezno
-onda tek provjeravamo da li imamo nesta upisano unutar polja
-dodajemo uslov za validaciju emaila
-dodajemo uslov za validaju inputa
-dodajemo uslov za validaciju koji imamo mathicg vrijednost (sifra)
-dodajemo funkciju za ispisivanje gresaka

*/