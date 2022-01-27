import { load, loadBySelectedLang, FR, EN } from './modules/langManager.js'

window.addEventListener('DOMContentLoaded', (event) => {
    load()

    document.getElementById('fr-button').addEventListener('click', (ev) => {
        loadBySelectedLang(FR)
    })

    document.getElementById('en-button').addEventListener('click', (ev) => {
        loadBySelectedLang(EN)
    })
})
