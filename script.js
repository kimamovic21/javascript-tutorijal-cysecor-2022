// alert('Hello world!');
// console.log('Hello world!');
// document.write('Hello world!');
// window.alert('Hello world!');
// console.error('Hello world!')
// console.warn('Hello world');
// console.log(1+1);
// console.log(1===1);
// console.log(1===2);
//window.open();

// Ovo je komentar u jednoj liniji
/*Ovo je 
komentar
u vise linija
*/

// document.getElementById('poruka').innerText = 'Poruka iz JS fajla';

// Ovo je kod koji ce se ispisati u konzoli
// console.log('test');

/*
Ovo je kod koji ce da uzme div element preko njegovog id-a i onda ce
da mu upise ovaj tekst.
*/
// document.getElementById('poruka').innerText = 'Poruka iz JS fajla';



// Deklarisanje varijable
// Deklarizacija i inicijalizacija

// let kerim;
// kerim = 'Ja se zovem Kerim Imamovic';
// console.log(kerim);

// let trenutnaGodina = 2022;
// console.log(trenutnaGodina);

// let godinaRodenja = 1996;
// console.log(godinaRodenja);
// let ukupnoGodina = trenutnaGodina - godinaRodenja;
// console.log(ukupnoGodina);

// console.log(typeof(ukupnoGodina));


// let prvi_broj = 1;
// let drugi_broj = '2';
// drugi_broj = Number(drugi_broj);
// let rezultat = prvi_broj + drugi_broj;
// console.log(rezultat);


// let prvi_broj = 5;
// let drugi_broj = 10;

// console.log(prvi_broj);
// console.log(drugi_broj);

// prvi_broj = drugi_broj;
// drugi_broj = prvi_broj;

// console.log(prvi_broj);
// console.log(drugi_broj);


// Zamjena brojeva

// let prvi_broj = 5;
// let drugi_broj = 10;
// let treci_broj;

// treci_broj = prvi_broj; //5
// prvi_broj = drugi_broj; //10
// drugi_broj = treci_broj; //5

// console.log(prvi_broj);
// console.log(drugi_broj);

// let prvi_broj = 5;
// const drugi_broj = 10;

// drugi_broj = prvi_broj;
// console.log(drugi_broj);



// let ime = 'Kerim';
// let prezime = 'Imamovic';
// let godina = 26;

// console.log(ime);
// console.log(prezime);
// console.log(godina);

// let recenica = ('Moje ime je' + ' ' + ime + '.' + ' ' + 'Moje prezime je' + ' ' + prezime + '.' + ' ' + 'Imam' + ' ' + godina + ' ' + 'godina' + '.');
// console.log(recenica);

//console.log('Moje ime je' + ' ' + ime + '.' + ' ' + 'Moje prezime je' + ' ' + prezime + '.' + 'Imam' + ' ' + godina + ' ' + 'godina' + '.');

// console.log('Ove godine imam ' + godina + ' godina.');

//godina = godina - 1;
// godina -= 1;
// console.log('Prosle godine sam imao ' + godina + ' godina.');

// godina = godina + 2;
// godina += 2;
// console.log('Sljedece godine cu imati ' + godina + ' godina.');



// Backtick

// let ime = 'Kerim';
// let prezime = 'Imamovic';
// let godina = 26;

// let recenica = `Zovem se ${ime}. Prezivam se ${prezime}. Imam ${godina} godina.`;

// console.log(recenica);



// Logicki operatori

// let prvi_broj = 10;
// let drugi_broj = 5;
// let treci_broj = 7;
// let cetvrti_broj = 8;

// console.log(prvi_broj > drugi_broj);
// console.log(treci_broj > cetvrti_broj);

// console.log((prvi_broj > drugi_broj) && (treci_broj > cetvrti_broj));
// console.log((prvi_broj > drugi_broj) && (cetvrti_broj > treci_broj)); 

// console.log((prvi_broj > drugi_broj) || (treci_broj > cetvrti_broj));
// console.log((drugi_broj > prvi_broj) || (treci_broj > cetvrti_broj));




// Uslovi (if / switch)

// let prvi_broj = 5;
// let drugi_broj = 10;

// if(prvi_broj < drugi_broj) {
//     console.log('Prvi broj je manji od drugog broja.');
// }
// else {
//     console.log('Prvi broj nije manji od drugog broja.');
// }


// let vrijeme = 26;

// if (vrijeme < 10) {
//     console.log('Dobro jutro')
// }
// else if (vrijeme < 20) {
//     console.log('Dobar dan');
// }
// else {
//     console.log('Dobar vece')
// }



// let mjesec = 12;

// if (mjesec === 1) {
//     console.log('Januar');
// }
// else if (mjesec === 2) {
//     console.log('Februar');
// } 
// else if (mjesec === 3) {
//     console.log('Mart');
// }
// else if (mjesec === 4) {
//     console.log('April');
// }
// else if (mjesec === 5) {
//     console.log('Maj');
// } 
// else if (mjesec === 6) {
//     console.log('Juni');
// }
// else if (mjesec === 7) {
//     console.log('Juli');
// }
// else if (mjesec === 8) {
//     console.log('August');
// }
// else if (mjesec === 9) {
//     console.log('Septembar');
// }
// else if (mjesec === 10) {
//     console.log('Oktobar');
// } 
// else if (mjesec === 11) {
//     console.log('Novembar');
// }
// else if (mjesec === 12) {
//     console.log('Decembar');
// }
// else {
//     console.error ('Unesite broj izmedu 0 i 12');
// }
 


// let mjesec = 2;

// switch(mjesec) {
//     case 1:
//         console.log('Januar');
//         break;
//     case 2:
//         console.log('Feb');
//     break;
//     case 3:
//         console.log('Mar');
//     break;
//     case 4:
//         console.log('Apr');
//     break;
//     case 5:
//         console.log('Maj');
//     break;
//     case 6:
//         console.log('Jun');
//     break;
//     case 7:
//         console.log('Jul');
//     break;
//     case 8:
//         console.log('Aug');
//     break;
//     case 9:
//         console.log('Okt');
//     break;
//     case 10:
//         console.log('Sept');
//     break;
//     case 11:
//         console.log('Nov');
//     break;
//     case 12:
//         console.log('Dec');
//     break;
//     default: 
//         console.error('Unijeti broj izmedu 0 i 12');
// }



// While Petlje

// // 25 novcaniva
// let novcanice = 25; 
// // 10 Eura vrijednost jedne novcanice
// let vrijednostNovcanice = 10; 

// // izbrojane novcanice
// let izbrojaneNovcanice = 0;

// // broji novcanice sve dok je brojac manji od broja novcanica
// while (izbrojaneNovcanice < novcanice) {
//     izbrojaneNovcanice++;
// }
// console.log(izbrojaneNovcanice * vrijednostNovcanice);




// Petlje i nizovi 

// let novcanice = [10, 5, 20, 50, 5, 10, 100, 20, 50, 5, 10, 20];
// let brojNovcanica = novcanice.length;
// console.log(brojNovcanica);

// // izbrojane novcanice
// let izbrojaneNovcanice = 0;

// // broji novcanice sve dok je brojac manji od novcanica
// while (izbrojaneNovcanice < brojNovcanica) {
//     izbrojaneNovcanice++;
// }

// console.log( `Broj izbrojanih novcanica je: ${izbrojaneNovcanice}`);




// Pristupanje indeksu niza

// let novcanice = [10, 5, 20, 50, 5, 10, 100, 20, 50, 5, 10, 20];
// //console.log(novcanice[0]);
// let brojNovcanica = novcanice.length;
// let brojac = 0;

// // while (brojac < brojNovcanica) {
// //     console.log(novcanice[brojac]);
// //     brojac++;
// // }
// while (brojac < brojNovcanica) {
//     console.log('-----------');
//     console.log('Uslov prosao');
//     console.log(`Novcanica na poziciji ${brojac}: ${novcanice[brojac]}`);
    
//     brojac++;
// }

// console.log('##### Kraj petlje #####');

// if (brojac < brojNovcanica) {
//     console.log('Brojac je manji');
// }
// else {
//     console.error('Brojac nije manji');
// }

// console.log(`Brojac: ${brojac}`);



// For petlje

// let novcanice = [10, 5, 20, 50, 5, 10, 100, 20, 50, 5, 10, 20];
// let brojNovcanica = novcanice.length;
// let ukupnoNovca = 0;

// for (brojac = 0; brojac < brojNovcanica; brojac++){
//     console.log(novcanice[brojac]);
//     //ukupnoNovca = ukupnoNovca + novcanice[brojac];
//      ukupnoNovca += novcanice[brojac];
// };
// console.log('##### Kraj petlje ######');
// console.log(`Ukupno novca: ${ukupnoNovca}€`);




// For 2 petlja

// let novcanice = [10, 5, 20, 50, 5, 10, 100, 20, 50, 5, 10, 20];

// for (let brojac in novcanice) {
//     console.log(brojac);
//     console.log(novcanice[brojac]);
//     console.log('-------');
// };




// For 3 petlja

// let novcanice = [10, 5, 20, 50, 5, 10, 100, 20, 50, 5, 10, 20];

// for (let novcanica of novcanice){
//     console.log(novcanica);
// };



// For 4 petlja

// let automobili = ['Audi', 'BMW', 'Porsche', 'Mercedes'];

// for (let automobil of automobili) {
//     console.log(automobil);
// };



//For each petlja

// let automobili = ['Audi', 'BMW', 'Porsche', 'Mercedes'];

// automobili.forEach(function(automobil) {
//     console.log(automobil);
// });



// Petlje i objekti


// let automobili = {
//    prvi_auto: 'Audi', 
//     drugi_auto: 'BMW', 
//     treci_auto: 'Porsche', 
//     cetvrti_auto: 'Mercedes'
// };
// console.log(automobili);



// let automobili = {
//   audi: ['50000', '2017', 'Q7'],
//   bmw: ['60000', '2018', '330D'],
//   porsche: ['100000', '2016', 'Boxster'],
//   mercedes: ['70000', '2019', 'S400'],
// };
// for (let automobil in automobili) {
//     console.log(automobil);
//     console.log(automobili[automobil]);
//     console.log('---------');
// }
// console.log(automobili);



// let automobili = {
//     audi: ['50000', '2017', 'Q7'],
//     bmw: ['60000', '2018', '330D'],
//     porsche: ['100000', '2016', 'Boxster'],
//     mercedes: ['70000', '2019', 'S400'],
//   };
//   for (let automobil in automobili) {
//      let naziv = automobil;
//      //console.log(naziv);
//      let voziloPodaci = automobili[automobil];
//      //console.log(voziloPodaci);
//      console.log(
//         `Model: ${naziv} ${voziloPodaci[2]},
//          godiste: ${voziloPodaci[1]},
//          cijena: ${voziloPodaci[0]}€
//          `
//     );     
//   }



// let automobili = {
//     audi: ['50000', '2017', 'Q7'],
//     bmw: ['60000', '2018', '330D'],
//     porsche: ['100000', '2016', 'Boxster'],
//     mercedes: ['70000', '2019', 'S400'],
//   };

  //console.log(automobili['audi']);
  //console.log(automobili.audi);



let osoba = {
    ime: 'Kerim',
    prezime: 'Imamovic',
    godine: '26',
    grad: 'Sarajevo'
}

console.log(osoba.ime);
console.log(`
    Ime: ${osoba.ime}, 
    Prezime: ${osoba.prezime}, 
    Godine: ${osoba.godine},
    Grad: ${osoba.grad},
`);


// 02:07:50 video