const transitionCheckbox = document.querySelector('#transition');
const scriptOptions = document.querySelector('#scripts');
const cta = document.querySelector('#cta');
const script = document.querySelector('#main');

transitionCheckbox.addEventListener('change', () => {
    if (transitionCheckbox.checked) {
        cta.classList.add('transition');
    } else {
        cta.classList.remove('transition');
    }
});

async function defineHackFunction(){
    const { hack } = await import(`./${scriptOptions.value}.js`);
    window.hack = hack;
}

scriptOptions.addEventListener('change', defineHackFunction);

defineHackFunction();