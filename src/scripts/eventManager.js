import apiManager from "./apiManager.js"
import memeBuilder from "./memeBuilder.js"
import formBuilder from "./formBuilder.js"

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

const handleMemeListEvent = event => {
  const idAttribute = event.target.id
  const memeId = idAttribute.split("-meme-")[1]
  if (idAttribute.includes("edit-meme-")) {

    apiManager.getSingleMeme(memeId)
      .then(response => {
        const memeSectionRef = document.querySelector(`.meme-section-${memeId}`)
        memeSectionRef.innerHTML = formBuilder.buildEditForm(response)
      })
  }
  else if (idAttribute.includes("update-meme-")) {
    const updatedMeme = {
      name: document.querySelector("#name-edit").value,
      author: document.querySelector("#author-edit").value,
      description: document.querySelector("#desc-edit").value,
      imageUrl: document.querySelector("#image-edit").value
    }

    apiManager.putMeme(memeId, updatedMeme)
      .then(() => apiManager.getAllMemes())
      .then(response => {
        const memeListRef = document.querySelector(".meme-list")
        memeListRef.innerHTML = memeBuilder.listMemesHtml(response)
      })
  }
}

const eventManager = {
  attachEventListenerToAddButton() {
    document.getElementById("add-meme-btn").addEventListener("click", handleAddButtonEvent)
  },
  attachEventListenerToMemeList() {
    document.querySelector(".meme-list").addEventListener("click", handleMemeListEvent)
  }

}

export default eventManager
