const baseUrl = "http://localhost:8088"

export default {
  postMeme: meme => fetch(`${baseUrl}/memes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(meme)
  }),
  getAllMemes: () => fetch(`${baseUrl}/memes`)
    .then(response => response.json()),
  getSingleMeme: memeId => fetch(`${baseUrl}/memes/${memeId}`)
    .then(response => response.json()),
  putMeme: (memeId, meme) => fetch(`${baseUrl}/memes/${memeId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(meme)
  }),
  deleteMeme: memeId => fetch(`${baseUrl}/memes/${memeId}`, {
    method: "DELETE"
  })
    .then(response => response.json())
}
