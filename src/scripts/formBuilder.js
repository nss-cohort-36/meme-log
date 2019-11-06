const formBuilder = {
  buildAddForm () {
    return `
    <h3>Adding a new meme???</h3>
    <section>
        <label for="memeName">Name</label>
        <input type="text" id="name-input">
    </section>
    <section>
        <label for="memeAuthor">Author</label>
        <input type="text" id="author-input">
    </section>
    <section>
        <label for="memeDescription">Description</label>
        <input type="text" id="desc-input">
    </section>
    <section>
        <label for="memeImageUrl">Image URL</label>
        <input type="text" id="image-input">
    </section>

    <button type="submit" id="add-meme-btn">Add</button>
    `
  }

}

export default formBuilder
