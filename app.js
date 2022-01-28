import { load, loadBySelectedLang, loadCustomLang, FR, EN } from './modules/langManager/langManager.js'

window.addEventListener('DOMContentLoaded', (event) => {
    load()

    document.getElementById('fr-button').addEventListener('click', (ev) => {
        loadBySelectedLang(FR)
    })

    document.getElementById('en-button').addEventListener('click', (ev) => {
        loadBySelectedLang(EN)
    })

    document.getElementById('it-button').addEventListener('click', async (ev) => {
        loadCustomLang(await (await fetch('./it.json')).json(), (insult) => {
            document.getElementById('catch-phrase').append(insult, document.createElement('h2'))
        })
    })
})
