const buildMemeHtml = memeObject => {
  return `<section class="meme-section-${memeObject.id}">
  <img src="${memeObject.imageUrl}" alt="">
  <h3>${memeObject.name} by ${memeObject.author}</h3>
  <p>${memeObject.description}</p>
  <footer>
      <button id="edit-meme-${memeObject.id}">Edit</button>
      <button id="delete-meme-${memeObject.id}">Delete</button>
  </footer>
</section>`
}

const memeBuilder = {
  listMemesHtml (memesArray) {
    let memesHtml = ""
    memesArray.forEach(meme => memesHtml += buildMemeHtml(meme))
    return memesHtml
  }
}

export default memeBuilder
