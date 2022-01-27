const LANG_FOLDER = './modules/langs'

const load = async () => {
    loadLanguage(await loadJson())
}

const getLangSystem = () => navigator.language || navigator.userLanguage

const getFileNameByLang = (lang) => {
    if (lang == 'en-US') return '/en.json'
    if (lang == 'fr-FR') return '/fr.json'
    return 'en.json'
}

const loadJson = async () => {
    return (await fetch(LANG_FOLDER + getFileNameByLang(getLangSystem()))).json()
}

const loadLanguage = (langObj) => {
    for (const key in langObj) {
        console.log(`${key} : ${langObj[key]}`)
    }
}

export { load }
