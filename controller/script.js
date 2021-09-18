import {MenCloth} from "../../models/men.js"

window.onload = function() {
    initDiv()
}

let initDiv = async function() {
    let html_menu = await fetch("./views/menu.html")
    let result_menu = await html_menu.text()
    let shop_menu = document.createElement('div')

    shop_menu.innerHTML = result_menu

    document.body.appendChild(shop_menu)


    let html_card = await fetch("./views/card.html")
    let result_card = await html_card.text()
    let shop_card = document.createElement('div')

    shop_card.innerHTML = result_card

    document.body.appendChild(shop_card)
}

