const iName = document.querySelector('#name');
const iNumber = document.querySelector('#number');
const iMonth = document.querySelector('#exp-month');
const iYear = document.querySelector('#exp-year');
const iCvc = document.querySelector('#cvc');

// const inputs = [iName, iNumber, iMonth, iYear, iCvc];

const nameDisplay = document.querySelector('.card__details-name');
const numberDisplay = document.querySelector('.card__details-number');
const monthDisplay = document.querySelector('.card__details-month');
const yearDisplay = document.querySelector('.card__details-year');
const cvcDisplay = document.querySelector('.card__details-cvc');

// const outputs = [nameDisplay, numberDisplay, monthDisplay, yearDisplay, cvcDisplay];

const formSection = document.querySelector('.form-container');
const completeSection = document.querySelector('.complete-container');
const button = document.querySelector('.main__button');




//FUNCTIONALITY
const space = (str, after) => {
    after = after;
    const v = str.replace(/[^\dA-Z]/g, '');
    const reg = new RegExp(".{" + after + "}", "g");

    return v.replace(reg, (a) => {
        return a + ' ';
    });
}


const displayDetails = (e, display) => {
    const { value } = e.target;
    display.innerHTML = value;
}



//ADD SPACE AFTER EVERY 4 CHARS
iNumber.addEventListener('keyup', function () {
    this.value = space(this.value, 4)
});


//DISPLAY CARD DETAILS
iNumber.addEventListener('input', (e) => {
    displayDetails(e, numberDisplay)
});

iName.addEventListener('input', (e) => {
    displayDetails(e, nameDisplay)
});

iMonth.addEventListener('input', (e) => {
    displayDetails(e, monthDisplay)
});

iYear.addEventListener('input', (e) => {
    displayDetails(e, yearDisplay)
});

iCvc.addEventListener('input', (e) => {
    displayDetails(e, cvcDisplay)
});



//SUBMIT (CHANGE MAIN DISPLAY)
button.addEventListener('click', (e) => {
    e.preventDefault;
    console.log('submit')
    formSection.classList.add("hide-element");
    completeSection.classList.remove("hide-element");
})
