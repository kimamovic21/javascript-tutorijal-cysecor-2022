function addToCart(element) {
    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity = mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');

    console.log(typeof(quantity));

    if (parseInt(quantity) > 0) {

        price = price.substring(1);
        price = parseInt(price);
        quantity = parseInt(quantity);

        let total = price * quantity;

        console.log(typeof(price));
        console.log(typeof(quantity));
        console.log(total);

        console.log('Vece je od 0');

        cartItems.innerHTML += `Proizvod: ${name} - 
                                Cijena: $${price} -
                                Kolicina: ${quantity} 
                                Total: $${total}`;

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