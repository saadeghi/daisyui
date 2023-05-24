import https from "https"
import fs from "fs"

const url = process.argv[2]
const filename = process.argv[3] + ".json"

const options = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36",
  },
}

https
  .get(url, options, (response) => {
    let responseData = ""

    response.on("data", (chunk) => {
      responseData += chunk
    })

    response.on("end", () => {
      fs.writeFile(filename, responseData, (err) => {
        if (err) {
          console.error("Error saving file:", err)
        } else {
          console.log(`${url} saved to ${filename}`)
        }
      })
    })
  })
  .on("error", (error) => {
    console.error("Error fetching API data:", error)
  })
