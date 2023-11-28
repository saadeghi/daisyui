import https from "https"
import fs from "fs"
import sharp from "sharp"
import { tweets } from "../data/testimonials.js"

const downloadImage = (url, filename) => {
  const file = fs.createWriteStream(filename)

  const options = {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36",
    },
  }

  https
    .get(url, options, (response) => {
      response.pipe(file)

      file.on("finish", () => {
        file.close()
        // console.log(`Image downloaded as ${filename}`)
        processImage(filename)
      })
    })
    .on("error", (error) => {
      fs.unlink(filename)
      console.error("Error downloading image:", error)
    })
}

const processImage = (input, size = 72) => {
  sharp(input)
    .resize(size)
    .webp({ quality: 100 })
    .toFile(input.replace(".jpg", `-${size}.webp`))
    .then(() => {
      // console.log(`Resized ${input}`)
    })
}

tweets.forEach((tweet, index) => {
  const url = `https://unavatar.io/twitter/${tweet.username}?fallback=false`
  const filename = `static/twitter-profile-pics/${tweet.username}.jpg`
  setTimeout(() => {
    downloadImage(url, filename)
    console.log(`Updated: ${filename}`)
  }, index * 1000)
})
