import formBuilder from "./formBuilder.js"

const containerReference = document.getElementById("container")

const domManager = {
  setupFormAndContainers() {
    const initialHtml = `
  <h1>The Meme Log</h1>
  <article class="add-form">${formBuilder.buildAddForm()}</article>
  <article class="meme-list"></article>
  `
  containerReference.innerHTML = initialHtml
  }

}

export default domManager
