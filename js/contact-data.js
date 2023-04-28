import { autoLanguage } from './language-change.js';

let langContent = {
    'en-US': {
        pageTitle: 'Contact',
        header: '⫶Contact⫶',
        content1: 'If you need to contact me, feel free to use this contact form or send me <a href="mailto:anna.escrisa@gmail.com">an email.</a>',
        content2: 'You can also find me on:',
        formName: 'Your name',
        formMail: 'Your email address',
        formMessage: 'Your message',
        button: 'Send'

    },
    'es-ES': {
        pageTitle: 'Contacto',
        header: '⫶Contacto⫶',
        content1:'Si necesitas ponerte en contacto conmigo, puedes usar el formulario de la derecha o enviarme <a href="mailto:anna.escrisa@gmail.com">un email.</a>',
        content2: 'También puedes encontrarme en:',
        formName: 'Tu nombre',
        formMail: 'Tu email',
        formMessage: 'Tu mensaje',
        button: 'Enviar'
    }
}


function autoPlaceholder (id) {
    let input = document.getElementById(id);
    input.placeholder = input.textContent;
    console.log(id);
    console.log(input);
}


autoLanguage(langContent);

autoPlaceholder('formMail');
autoPlaceholder('formName');
