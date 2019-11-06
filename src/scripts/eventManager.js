import apiManager from "./apiManager.js"

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
}

const eventManager = {
  attachEventListenerToAddButton() {
    document.getElementById("add-meme-btn").addEventListener("click", handleAddButtonEvent)
  }

}

export default eventManager
