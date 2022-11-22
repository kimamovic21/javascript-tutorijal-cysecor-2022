// document.cookie;
// document.cookie = 'Kerim Imamovic';

// let kolacici = document.cookie;
// kolacici = 'Kerim Imamovic';
// console.log(kolacici);

document.querySelector('#setCookie').addEventListener('click', (e) => {
    e.preventDefault();
    const date = new Date();
    
    let today = date.getTime();
    let expires = 2 * 24 * 60 * 60 * 1000; // vrijeme u milisekundama
    console.log(expires);
    
    date.setTime(today + expires);
    
    let new_date = date.toUTCString();
    
    document.cookie = `firstName=Kerim; expires=${new_date}`;
    
    console.log(document.cookie);
});

