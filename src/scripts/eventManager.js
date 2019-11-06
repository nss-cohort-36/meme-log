import apiManager from "./apiManager.js"
import memeBuilder from "./memeBuilder.js"

const handleAddButtonEvent = event => {
  // console.log("Add button clicked")

  const nameInputRef = document.querySelector("#name-input")
  const authorInputRef = document.querySelector("#author-input")
  const descInputRef = document.querySelector("#desc-input")
  const imageInputRef = document.querySelector("#image-input")

  const newMeme = {
    name: nameInputRef.value,
    author: authorInputRef.value,
    description: descInputRef.value,
    imageUrl: imageInputRef.value
  }
  // console.log(newMeme)

  apiManager.postMeme(newMeme)
    .then(() => apiManager.getAllMemes())
    .then(response => {
      const memeListRef = document.querySelector(".meme-list")
      memeListRef.innerHTML = memeBuilder.listMemesHtml(response)

      nameInputRef.value = ""
      authorInputRef.value = ""
      descInputRef.value = ""
      imageInputRef.value = ""
    })
}

const eventManager = {
  attachEventListenerToAddButton() {
    document.getElementById("add-meme-btn").addEventListener("click", handleAddButtonEvent)
  }

}

export default eventManager
