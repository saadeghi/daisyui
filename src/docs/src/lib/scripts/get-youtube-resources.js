import https from "https"
import fs from "fs"
import { videoIds } from "../data/youtube.js"

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const chunkSize = 50
const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=status&key=${YOUTUBE_API_KEY}&id=`
const outputFilePath = process.argv[2]
const fallbackData = [
  {
    id: "ky18YtME8UQ",
    snippet: {
      title: "daisyUI 3.0",
      description: "daisyUI is the most popular component library for Tailwind CSS",
      channelTitle: "daisyUI",
      thumbnails: {
        high: {
          url: "https://i.ytimg.com/vi/ky18YtME8UQ/hqdefault.jpg",
        },
      },
    },
    status: {
      embeddable: true,
    },
  },
]

// Function to make a request to the API
function makeApiRequest(ids) {
  return new Promise((resolve, reject) => {
    const url = apiUrl + ids.join(",")
    https
      .get(url, (res) => {
        let data = ""

        res.on("data", (chunk) => {
          data += chunk
        })

        res.on("end", () => {
          resolve(JSON.parse(data))
        })
      })
      .on("error", (err) => {
        reject(err)
      })
  })
}

// Function to chunk the videoIds array and make API requests
async function processVideoIds(videoIds) {
  const results = []

  for (let i = 0; i < videoIds.length; i += chunkSize) {
    const chunk = videoIds.slice(i, i + chunkSize)
    const result = await makeApiRequest(chunk)

    // if results has error
    if (!result.error) {
      results.push(result.items)
    }
  }

  return results
}

// Process the videoIds and save the results as JSON
processVideoIds(videoIds)
  .then((results) => {
    let combinedResults
    combinedResults = [].concat(...results)
    if (!combinedResults.length) {
      combinedResults = fallbackData
    }

    fs.writeFile(outputFilePath, JSON.stringify(combinedResults, null, 2), (err) => {
      if (err) {
        console.error("Error writing to file:", err)
      } else {
        console.log("Data saved to", outputFilePath)
      }
    })
  })
  .catch((error) => {
    console.error("Error making API requests:", error)
  })
