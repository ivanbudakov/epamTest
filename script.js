const selectEl = document.getElementById('select');
const registrationImage = document.getElementById('planet-img');
const textToChange = document.getElementById('text-to-change');
const labels = document.querySelectorAll('label');
const options = document.querySelectorAll('option');
const button = document.querySelector('.form-submit-button');


selectEl.addEventListener('change', function() {

// If/Else
        // if(this.value === 'mercury'){
        //     registrationImage.src = "./Assets/Planet.svg";
        // } else {
        //     registrationImage.src = "./Assets/Uran.svg";
        // }

// Ternary

// this.value === 'mercury' 
// ? registrationImage.src = "./Assets/Planet.svg" 
// : registrationImage.src = "./Assets/Uran.svg";

switch(true) {
    case this.value === 'mercury' : registrationImage.src = "./Assets/Planet.svg";
    break;
    case this.value === 'uranus' : registrationImage.src = "./Assets/Uran.svg";
    break;
    default: setSneakyRicardo(this); 
}

})

function setSneakyRicardo (elem) {
    registrationImage.src = "./Assets/Ricardo.png";
    registrationImage.style.transform = "scale(-1,1)";
    textToChange.innerText = "запису на танці";
    labels[2].innerText = "Хореограф";
    options[elem.selectedIndex].innerText = "Рікардо Мілос";
    document.body.style.backgroundImage = "url(./Assets/DiscoHall.jpg)"
}

button.addEventListener('click', function() {
    console.log(this.className);
    this.classList.toggle('form-submit-button');
})
