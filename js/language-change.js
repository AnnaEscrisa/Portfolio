//obtiene lenguage del navegador y adapta la pagina al idioma
export function autoLanguage(data) {


    let language = navigator.language;

    //usar cuando se haga cambio manual de idioma
    //let language = localStorage.getItem('language');

    //para idiomas que no sean ingles/espanyol, o versiones no estandar de estos
    if (language != 'en-US' | 'es-ES') {

        switch (true) {
            case language.includes('es'):
                language = 'es-ES';
                break;

            case language.includes('en'):
            default:
                language = 'en-US';
                break;
        }
    }

    for (let key in data[language]) {

        let item = document.getElementById(key);

        item.innerHTML = data[language][key];
    }
    console.log('Language set to: ' + language);
}
