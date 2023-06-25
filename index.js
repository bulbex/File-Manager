import process from "node:process"
import readline from "node:readline/promises"
import { handleUserInput } from "./user_input/handleUserInput.js"
import { homedir } from "node:os"
import { printCWD } from "./utils/printCWD.js"

async function fileManager() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

    let username = process.argv.find(arg => arg.startsWith("--username"))?.split("=")[1] 
    || await rl.question("Please, provide your username: ")

    console.log(`Welcome to the File Manager, ${username}!`)

    // process.chdir(homedir())

    printCWD()

    rl.on("line", 
        (line) => line === ".exit" || line === "CLOSE" 
            ? process.exit() 
            : handleUserInput(line.trim())
    )

    process.on("exit", () => console.log(`Thank you for using File Manager, ${username}, goodbye!`))
}

await fileManager()