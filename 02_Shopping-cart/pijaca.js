let allTotal = 0;

function addToCart(element) {
    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity = mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');

   // console.log(typeof(quantity));

    if (parseInt(quantity) > 0) {

        price = price.substring(1);
        price = parseInt(price);
        quantity = parseInt(quantity);

        let total = price * quantity;

        // console.log(typeof(price));
        // console.log(typeof(quantity));
        // console.log(total);

        // console.log('Vece je od 0');

        // cartItems.innerHTML += `Proizvod: ${name} - 
        //                         Cijena: $${price} -
        //                         Kolicina: ${quantity} 
        //                         Total: $${total}`;

        allTotal += total;

        cartItems.innerHTML += 
        `<div class='cart-single-item'>
            <h3>${name}</h3>
            <p>$${price} * ${quantity} = $<span>${total}<span></p>
            <button class='remove-item' 
                    onclick='removeFromCart(this)'>
                Ukloni
            </button>
         </div>`;

        document.querySelector('.total').innerText = 
            `Total: $${allTotal}` 

        element.innerText = `Dodato`;
        element.setAttribute('disabled', 'true');
    } else {
        console.log('Nije vece od 0');
        alert('Odaberi kolicinu');
    }


    // let input = element.previousElementSibling;
    // console.log(input.value);
    // console.log(quantity);
    // console.log(price);
    // console.log(name);
    // console.log(typeof(quantity));
}

function removeFromCart(element) {
    // console.log('removing');

    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;    
    let vegetables = document.querySelectorAll('.single-item');

    price = parseInt(price);

    allTotal -= price;

    document.querySelector('.total').innerText = `Total: $${allTotal}`;
    mainEl.remove();

    vegetables.forEach(function(vege){
        let itemName = vege.querySelector('.si-content h3').innerText;
        if( itemName === name ) {
            vege.querySelector('.actions input').value = 0;
            vege.querySelector('.actions button').removeAttribute('disabled');
            vege.querySelector('.actions button').innerText = 'Dodaj';
        }
        // console.log(vege);
    });

    // console.log(vegetables);
    //console.log(price);
    // mainEl.remove();
}
