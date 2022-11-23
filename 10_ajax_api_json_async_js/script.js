// AJAX
// Sinhroni i asinhroni javascript
// Sinhroni - kod se izvrsava liniju po liniju

// https://codebeautify.org/jsonviewer
// https://mockapi.io/projects/



// Sinhroni javascript kod

// 1. primjer

// console.log('1. test'); // 1.

// let body = document.querySelector('body'); // 2.
// console.log('2.', body);

// body.innerHTML = "<p>3. Ovo je recenica.</p><br>"; // 3.

// document.write('4. pisanje'); // 4.

// let text = document.querySelector('body p');
// text.style.color = 'red';



// 2. primjer

// console.log('1. test');
// let body = document.querySelector('body'); // 2.
// console.log('2.', body);
// body.innerHTML = "<p>3. Ovo je recenica.</p><br>"; // 3.

// setTimeout( function() {
//     let text = document.querySelector('body p');
//     text.style.color = 'red';
// }, 5000);

// document.write('4. pisanje', '<br>'); // 4.
// document.write('5. pisanje', '<br>'); // 5.
// document.write('6. pisanje', '<br>'); // 6.



// 3. primjer AJAX - Asinhroni javascript
// console.log('1. test') // 1

// let body = document.querySelector('body'); // 2.
// console.log('2.', body);

// body.innerHTML = "<p>3. Ovo je recenica.</p><br>"; // 3.


// dobijemo samo promise u konzoli
// let request  = fetch('https://637e22409c2635df8f9a0bb1.mockapi.io/Users');
// console.log(request)

// let response = request.then(response => {
//     return response.json();
// })
// console.log(response);


// Duzi nacin
// let request = fetch('https://637e22409c2635df8f9a0bb1.mockapi.io/Users')
//             .then( (response) => {
//                 console.log(response);
//                 return response.json();
//             })
//             .then( (data) => {
//                 console.log(data);
//             });
// console.log(request);


// Kraci nacin
// let request = fetch('https://637e22409c2635df8f9a0bb1.mockapi.io/Users')
//             .then(response => response.json())
//             .then(data => console.log(data))
//             .catch(error => alert('Doslo je do greske!'))
// console.log(request);


// document.write('4. pisanje', '<br>'); // 4.
// document.write('5. pisanje', '<br>'); // 5.
// document.write('6. pisanje', '<br>'); // 6.




// Primjer

const fetchData = () => {
    let id = document.querySelector('#userID').value;
    let request = fetch(`https://637e22409c2635df8f9a0bb1.mockapi.io/Users/${id}`)
                .then( (response) => response.json() )
                .then((data) => {
                    console.log(data);
                    let podaci = document.querySelector('#podaci');
                    podaci.innerHTML = `<p>${data.email}</p>
                                        <p>${data.username}</p>
                                        <p>${data.password}</p>`;
                })
                .catch(error => alert('Doslo je do greske!'))
};

