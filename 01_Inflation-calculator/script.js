function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate'); 
    let money = document.querySelector('#money');

    // parseFloat sluzi za pretvaranje stringa u broj sa zarezom
    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);

    // console.log(inflationRate);
    // console.log(money);

    //console.log(typeof(inflationRate.value));
    //console.log(typeof(money.value));

    // console.log(typeof(inflationRate));
    // console.log(typeof(money));

    // console.log(inflationRate.value);
    // console.log(money.value);

    let years = document.querySelector('#years');
    years = years.value;
    years = parseFloat(years);
    //console.log(years);

    // formula za racunanje inflacije
    let worth = money + (money * (inflationRate / 100));
    console.log(worth); 
    
    // formula za izracunavanje inflacije za x godina
    for (let i = 1; i < years; i++) {
        worth += worth * (inflationRate / 100);
    }

    worth = worth.foFixed(2);

    console.log(worth.toFixed(2));
    // let sabiranje = inflationRate.value + money.value;
    // let sabiranje = inflationRate + money;
    // console.log(sabiranje);

    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Danasnjih ${money}€ vrijedi isto kao i ${worth}€ za ${years} godina.`;
    document.querySelector('.container').appendChild(newElement);
};

