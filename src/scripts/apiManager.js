const baseUrl = "http://localhost:8088"

export default {
  postMeme: meme => fetch(`${baseUrl}/memes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(meme)
    })
}
