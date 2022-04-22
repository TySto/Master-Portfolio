// template_m4p3pe9
// service_6dnhtei
// u5J1F5mKmMUpYNRq3


let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 10;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
    
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visable";
    
    emailjs
        .sendForm(
            'service_6dnhtei',
            'template_m4p3pe9',
            event.target,
            'u5J1F5mKmMUpYNRq3'
        ).then(() => {
            loading.classList.remove("modal__overlay--visable");
            success.classList += " modal__overlay--visable";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visable");
            alert(
                "The email service is temporairly unavailable. Please contact me directly at Tyler.Stotts@hotmail.com"
            );
        })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}
