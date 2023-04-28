import { autoLanguage } from './language-change.js';

let langContent = {
    'en-US': {
        pageTitle: 'About Me',
        header: '⫶About Me⫶',
        subtitle1: 'Who am I?',
        desc1: 'I am Anna Escribano, a junior full-stack developer based in Spain.',
        desc2: 'I started my journey in web development in 2022 when I enrolled in the Open Source Back-End Web Development bootcamp. During this course, I discovered my passion for programming and became interested in the Full Stack programmer profile. To further develop my skills, I completed a Front-End Web Development bootcamp, which helped me to become proficient in both front-end and back-end development.',
        desc3: 'In addition to my technical skills, I have a degree in East Asian Studies. I spent time studying in Japan, where I learned to collaborate with people from diverse backgrounds and adapt to new situations. My interest in art has also been a lifelong pursuit, and I continue to develop my skills as a hobbyist artist in my free time.',
        desc4: "Whether I'm coding or drawing, I strive to bring creativity and attention to detail to everything I do.",
        subtitle2: 'Tech stack'
    },
    'es-ES': {
        pageTitle: 'Sobre Mi',
        header: '⫶Sobre Mi⫶',
        subtitle1: '¿Quién Soy?',
        desc1: 'Soy Anna Escribano, desarrolladora full-stack junior.',
        desc2: 'Empecé a formarme en esta disciplina en 2022, cuando me inscribí en el bootcamp Open Source Back-End Web Development. Durante este curso, descubrí mi pasión por la programación y me interesé por el perfil de programadora Full Stack. Con esto en mente, completé un bootcamp de Front-End Web Development, lo que me ayudó a complementar y ampliar mis conocimientos en ambos entornos.',
        desc3: 'Además de mis habilidades técnicas, tengo un grado en Estudios de Asia Oriental. Pasé un tiempo estudiando en Japón, donde aprendí a colaborar con personas de diversos orígenes y adaptarme a situaciones nuevas. El arte es otro de mis intereses y continúo desarrollando mis habilidades como artista aficionada en mi tiempo libre.',
        desc4:'Tanto si estoy programando como dibujando, me esfuerzo por llevar la creatividad y la atención al detalle a todo lo que hago.',
        subtitle2: 'Tecnologías y conocimientos'
    }
}

autoLanguage(langContent);