const form = document.getElementById('form');
const span = document.getElementById('span');
const input = document.getElementById('input');
const header =document.querySelector('.header');
const main = document.querySelector('.section__main');
const confirmation = document.getElementById('confirmation');
const mains = document.querySelector('.main');
const body = document.querySelector('body');
const button = document.querySelector('.conf__button');
const strong = document.getElementById('strong');
const inputBlock = document.querySelector('.block');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form['input'].value);

    const inputValue = form['input'].value;

    if(inputValue.trim() === '') {
        span.classList.add('block');
        span.textContent = 'This field can not be blank!';
        input.style.backgroundColor = 'hsl(15, 100%, 87%)';
        input.style.border = '1px solid hsl(15, 100%, 61%)';
    } else if (!isValidEmail) {
        span.classList.add('block');
        span.textContent = 'Enter a valid email';
        input.style.backgroundColor = 'hsl(15, 100%, 87%)';
        input.style.color = 'hsl(15, 100%, 61%)';
        input.style.border = '1px solid hsl(15, 100%, 61%)';
    } else {
        span.classList.remove('block');
        input.style.backgroundColor = '';
        input.style.color = '';
        input.style.border = '';
        strong.textContent = inputValue;

        header.style.display = 'none';
        main.style.display = 'none';
        confirmation.style.display = 'block';

        const mediaQuery = window.matchMedia('(max-width: 390px)');
        if (mediaQuery.matches) {
            body.style.width = '390px';
        } else {
            body.style.width = '440px'
        }
        body.style.backgroundColor = 'hsl(234, 29%, 20%)';
    }
});

const mediaQuery = window.matchMedia('(max-width: 390px)');

function handMediaQueryChange(mediaQuery) {
    if (mediaQuery.matches) {
        body.style.width = '390px';
    } else {
        body.style.width = '900px'
    }
}

mediaQuery.addEventListener('change', handMediaQueryChange);

button.addEventListener('click', () => {
    confirmation.style.display = 'none';
    header.style.display = 'block';
    main.style.display = 'block';
    const mediaQuery = window.matchMedia('(max-width: 390px)'); 
    if (mediaQuery.matches) {
        body.style.width = '390px';
    } else {
        body.style.width = '900px';
    }
    body.style.backgroundColor = 'hsl(0, 0%, 100%)';
})


input.addEventListener('input', () => {
    if (inputBlock) {
        input.classList.remove('block');
    } else {
        input.classList.add('block');
    }
});