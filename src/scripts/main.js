import domManager from "./domManager.js"
import eventManager from "./eventManager.js"
import apiManager from "./apiManager.js"
import memeBuilder from "./memeBuilder.js"

domManager.setupFormAndContainers()
eventManager.attachEventListenerToAddButton()

apiManager.getAllMemes()
.then(response => {
  const memeListRef = document.querySelector(".meme-list")
  memeListRef.innerHTML = memeBuilder.listMemesHtml(response)
})
