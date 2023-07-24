import { autoLanguage } from './language-change.js';

let langContent = {
    'en-US': {
        title1: 'About Me',
        title2: 'My Projects',
        title3: 'Contact',
    },
    'es-ES': {
        title1: 'Sobre Mí',
        title2: 'Mis proyectos',
        title3: 'Contacto',

    }
}

autoLanguage(langContent);
