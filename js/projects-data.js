import { autoLanguage } from './language-change.js';

let langContent = {
    'en-US': {
        pageTitle:'Projects',
        header:'⫶Projects⫶',
        subtitle1:'⫶BackEnd⫶',
        subtitle2:'⫶FrontEnd⫶',
        project1:'School of Higher Studies',
        project2:'Star Wars registry',
        project3:'PHP Login',
        project4:'Big Cat Project',
        desc1:'Mock-up website for a fictional school as the final project for the Open-Source BackEnd Web Development course.<br> The site allows users to navigate through <span style="color:white">different pages, register </span> as a user, <span style="color:white">log in/out </span>, and <span style="color:white">post comments </span>on the news page.',
        desc2:'Project for the BackEnd Web Development course. <br>Catalog of characters and movies from the Star Wars saga, with <span style="color:white">different pages </span>for each category. The site allows users to <span style="color:white">add, edit, or delete</span> entries.',
        desc3:'Project completed for the BackEnd Web Development course. The site allows users to <span style="color:white"> log in and log out</span>, create a <span style="color:white"> new account</span>, and <span style="color:white">access their data</span>.',
        desc4:'Mock-up webpage for an animal conservation and protection organization, designed as a <span style="color:white"> One Page </span>site with <span style="color:white"> responsive design </span>and featuring a <span style="color:white"> product gallery</span>.',
        list1_1n:'Laravel (PHP)',
        list1_2n:'MySQL',
        list2_1n:'NodeJs',
        list2_2n:'MongoDB',
        list2_3n:'Bootstrap',
        list3_1n:'PHP',
        list3_2n:'MySQL',
        list4_1n:'HTML, CSS',
        list4_2n:'Bootstrap',
        list4_3n:'JavaScript, Jquery',
        visit:'Take a look!'
    },
    'es-ES': {
        pageTitle:'Proyectos',
        header:'⫶Proyectos⫶',
        subtitle1:'⫶BackEnd⫶',
        subtitle2:'⫶FrontEnd⫶',
        project1:'Escuela de Estudios Superiores',
        project2:'Registro Star Wars',
        project3:'PHP Login',
        project4:'Big Cat Project',
        desc1:'Web para una escuela ficticia como proyecto final para el curso Open-Source BackEnd Web Development.<br>Permite navegar por <span style="color:white">distintas páginas</span>, realizar un<span style="color:white"> registro</span> de usuario, posterior <span style="color:white">login/out</span> y publicación de <span style="color:white">comentarios</span> en la página de noticias.<br>',
        desc2:'Proyecto realizado para el curso BackEnd Web Development. Catálogo de personajes y películas de la saga Star Wars, con diferentes categorías y posibilidad de <span style="color:white"> añadir, editar</span> o <span style="color:white">eliminar</span> entradas.',
        desc3:'Proyecto realizado para el curso BackEnd Web Development. Permite <span style="color:white">iniciar/cerrar sesión</span>, crear un <span style="color:white">nuevo usuario</span> y acceder a los <span style="color:white"> datos </span>de éste.',
        desc4:'Página ficticia para un proyecto de conservación y protección animal, con estilo <span style="color:white"> One Page</span>, diseño <span style="color:white">responsive</span> y <span style="color:white">galería de productos</span>.',
        list1_1n:'Laravel (PHP)',
        list1_2n:'MySQL',
        list2_1n:'NodeJs',
        list2_2n:'MongoDB',
        list2_3n:'Bootstrap',
        list3_1n:'PHP',
        list3_2n:'MySQL',
        list4_1n:'HTML, CSS',
        list4_2n:'Bootstrap',
        list4_3n:'JavaScript, Jquery',
        visit:'Visítame!'
    }
}

autoLanguage(langContent);