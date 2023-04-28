import { autoLanguage } from './language-change.js';

let navbarContent =  {
    'en-US': {
        li1: 'About Me',
        li2: 'Projects',
        li3: 'Contact',

    },
    'es-ES': {
        li1: 'Sobre Mi',
        li2: 'Proyectos',
        li3: 'Contacto'
    }
}

autoLanguage(navbarContent);