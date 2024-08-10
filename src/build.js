const { exec } = require("node:child_process");
const { normalize } = require("node:path");
const isWin = process.platform === "win32";
const ext = isWin ? ".cmd" : "";
const cat = isWin ? "type" : "cat";

function runCommand(command) {
    if(isWin) {
        command = command.split(" ");
        command[0] = command[0].replace(/\//g, "\\");
        command = command.join(" ");
    }
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error)
            } else {
                resolve({ stdout, stderr })
            }
        })
    })
}

async function executeCommands() {
    try {
        await runCommand(`node_modules/.bin/postcss${ext} --config src/base src/base/*.css --base src --dir dist`)
        await runCommand(`${cat} ${normalize("dist/base/*.css")} > ${normalize("dist/base.css")}`)
        await runCommand(`node_modules/.bin/prejss-cli${ext} dist/base.css --format commonjs`)
        // await runCommand("mv dist/base.js dist/base.cjs")
        await runCommand(`node_modules/.bin/postcss${ext} --config src/utilities/global src/utilities/global/*.css --base src --dir dist`)
        await runCommand(`${cat} ${normalize("dist/utilities/global/*.css")} > ${normalize("dist/utilities.css")}`)
        await runCommand(`node_modules/.bin/prejss-cli${ext} dist/utilities.css --format commonjs`)
        // await runCommand("mv dist/utilities.js dist/utilities.cjs")

        await runCommand(`node_modules/.bin/postcss${ext} --config src/utilities/unstyled src/utilities/unstyled/*.css --base src --dir dist`)
        await runCommand(`${cat} ${normalize("dist/utilities/unstyled/*.css")} > ${normalize("dist/utilities-unstyled.css")}`)
        await runCommand(`node_modules/.bin/prejss-cli${ext} dist/utilities-unstyled.css --format commonjs`)
        // await runCommand("mv dist/utilities-unstyled.js dist/utilities-unstyled.cjs")
        await runCommand(`node_modules/.bin/postcss${ext} --config src/utilities/styled src/utilities/styled/*.css --base src --dir dist`)
        await runCommand(`${cat} ${normalize("dist/utilities/styled/*.css")} > ${normalize("dist/utilities-styled.css")}`)
        await runCommand(`node_modules/.bin/prejss-cli${ext} dist/utilities-styled.css --format commonjs`)
        // await runCommand("mv dist/utilities-styled.js dist/utilities-styled.cjs")
        await runCommand(`node_modules/.bin/postcss${ext} --config src/components src/components/**/*.css --base src --dir dist`)
        await runCommand(`${cat} ${normalize("dist/components/unstyled/*.css")} > ${normalize("dist/unstyled.css")}`)
        await runCommand(`${cat} ${normalize("dist/components/unstyled/*.css")} ${normalize("dist/components/styled/*.css")} > ${normalize("dist/styled.css")}`)
        await runCommand(`node_modules/.bin/prejss-cli${ext} dist/{unstyled,styled}.css --format commonjs`)
        // await runCommand("mv dist/unstyled.js dist/unstyled.cjs")
        // await runCommand("mv dist/styled.js dist/styled.cjs")
        await runCommand(`node_modules/.bin/postcss${ext} src/themes/index.css -o dist/themes.css --config src/themes`)

        if(!process.argv.includes("--skipfullcss")) {
            await runCommand(`node_modules/.bin/postcss${ext} src/full/index.css -o dist/full.css --config src/full`)
        }
    } catch(error) {
        console.error("Error executing commands:", error)
    }
}

// Run the commands asynchronously
executeCommands()
