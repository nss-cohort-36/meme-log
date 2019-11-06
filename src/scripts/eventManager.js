const handleAddButtonEvent = event => {
  console.log("Add button clicked")
}

const eventManager = {
  attachEventListenerToAddButton() {
    document.getElementById("add-meme-btn").addEventListener("click", handleAddButtonEvent)
  }

}

export default eventManager
