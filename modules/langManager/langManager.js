const LANG_FOLDER = './modules/langManager/langs'
const FR = 'fr-FR'
const EN = 'en-US'

/**
 *
 * @param {Array} langs
 * @param {*} onLangCharged
 */
const loadCustomLang = (langData, insult) => {
    loadLanguage(langData)
    insult('LA VIVIDA')
}

/**
 * Basic function that will search you default browser language to set the correct traduction.
 */
const load = async () => {
    loadLanguage(await loadJson(getFileNameByLang(getLangSystem())))
}

/**
 * Second function to set you lang by user action.
 * J'suis un bouf mdr.
 * @param {*} lang
 */
const loadBySelectedLang = async (lang) => {
    loadLanguage(await loadJson(getFileNameByLang(lang)))
}

const getLangSystem = () => navigator.language || navigator.userLanguage

const getFileNameByLang = (lang) => {
    if (lang == 'en-US') return '/en.json'
    if (lang == 'fr-FR') return '/fr.json'
    return '/en.json'
}

const loadJson = async (lang) => {
    return (await fetch(LANG_FOLDER + lang)).json()
}

const loadLanguage = (langObj) => {
    for (const key in langObj) {
        if (document.getElementById(key) == null) return
        document.getElementById(key).innerHTML = langObj[key]
    }
}

export { load, loadBySelectedLang, loadCustomLang, FR, EN }
