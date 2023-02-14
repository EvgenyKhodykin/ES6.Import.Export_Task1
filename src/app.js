import {changeBackgroundColor,createButtonHTML} from "./utils"

function initApp() {
  const buttonHTML = createButtonHTML()
  document.body.append(buttonHTML)
  buttonHTML.addEventListener('click', changeBackgroundColor)
}

export default initApp