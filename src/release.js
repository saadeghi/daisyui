const { execSync } = require("child_process")

// available flags:
// npm run release -- --alpha
// npm run release -- --patch
// npm run release -- --minor
// npm run release -- --major

execSync(
  `node_modules/.bin/commit-and-tag-version${
    process.argv.includes("--alpha") ? " --skip.changelog --prerelease alpha" : ""
  }${process.argv.includes("--patch") ? " --release-as patch" : ""}${
    process.argv.includes("--minor") ? " --release-as minor" : ""
  }${process.argv.includes("--major") ? " --release-as major" : ""}`
)
