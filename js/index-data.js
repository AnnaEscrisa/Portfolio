import { autoLanguage } from './language-change.js';

let langContent = {
    'en-US': {
        title1: 'Anna Escribano',
        title2: 'Web Development',
        title3: 'Get to Know Me',
        subtitle1:'About Me',
        subtitle2: 'My Projects',
        subtitle3: 'Contact'

    },
    'es-ES': {
        title1: 'Anna Escribano',
        title2: 'Desarrollo Web',
        title3: 'Conóceme',
        subtitle1: 'Sobre Mí',
        subtitle2: 'Mis proyectos',
        subtitle3: 'Contacto'

    }
}

autoLanguage(langContent);
