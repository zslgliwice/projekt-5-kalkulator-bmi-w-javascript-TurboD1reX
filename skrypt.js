function calculateBMI() {
    var wzrost = document.getElementById('wzrost').value;
    var waga = document.getElementById('waga').value;
    var answear = document.querySelector('.answear');

    wzrost = parseFloat(wzrost);
    waga = parseFloat(waga);

    if (document.getElementById('lbs-in').checked) {
        wzrost = wzrost * 2.54; 
        console.log(wzrost);
        waga = waga * 0.4536; 
        console.log(waga);
    }
    let bmi =  (waga / (wzrost * wzrost))*10000;


    if (bmi < 18.5) {
        answear.innerHTML = `Niedowaga ${bmi}`;
    } else if (18.5 <= bmi && bmi <= 24.9) {
        answear.innerHTML = `Waga prawidłowa ${bmi}`;
    } else if (25.0 <= bmi && bmi <= 29.9) {
        answear.innerHTML = `Nadwaga ${bmi}`;
    } else {
        answear.innerHTML = `Otyłość skrajna ${bmi}`;
    }
}