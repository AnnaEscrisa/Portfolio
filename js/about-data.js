import { autoLanguage } from './language-change.js';

let langContent = {
    'en-US': {
        pageTitle: 'About Me',
        header: '⫶About Me⫶',
        subtitle1: 'Who am I?',
        desc1: 'I am Anna Escribano, a web development student based in Spain.',
        desc2: 'I started my journey in web development in 2022 when I enrolled in a back-end development bootcamp. During this course, I discovered my passion for programming and decided to take a course in front-end development. Currently, I am undertaking Professional Training in Web Development.',
        desc3: 'In addition to my technical skills, I have a degree in East Asian Studies and I am a hobbyist artist. I spent some time studying in Japan, where I learned to collaborate with people from diverse backgrounds and adapt to new situations.',
        desc4: "Whether I'm coding or drawing, I strive to bring creativity and attention to detail to everything I do.",
        subtitle2: 'Tech stack'
    },
    'es-ES': {
        pageTitle: 'Sobre Mi',
        header: '⫶Sobre Mi⫶',
        subtitle1: '¿Quién Soy?',
        desc1: 'Soy Anna Escribano, estudiante de desarrollo web.',
        desc2: 'Empecé a formarme en esta disciplina en 2022, cuando realicé un curso de desarrollo back-end. Durante este curso descubrí mi pasión por la programación y decidí realizar un curso de desarrollo front-end. Actualmente estoy estudiando un Ciclo Superior en Desarrollo Web.',
        desc3: 'Además de mis habilidades técnicas, tengo un grado en Estudios de Asia Oriental y soy aficionada al dibujo. Pasé un tiempo estudiando en Japón, donde aprendí a colaborar con personas de diversos orígenes y adaptarme a situaciones nuevas.',
        desc4:'Tanto si estoy programando como dibujando, me esfuerzo por llevar la creatividad y la atención al detalle a todo lo que hago.',
        subtitle2: 'Tecnologías y conocimientos'
    }
}

autoLanguage(langContent);