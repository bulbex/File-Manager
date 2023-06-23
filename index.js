import process from "node:process"
import readline from "node:readline/promises"
import { handleUserInput } from "./user_input/handleUserInput.js"

export const printCWD = () => console.log(`You are currently in ${process.cwd()}`)

async function fileManager() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

    let username = process.argv.find(arg => arg.startsWith("--username"))?.split("=")[1] 
    || await rl.question("Please, provide your username: ")

    console.log(`Welcome to the File Manager, ${username}!`)
    printCWD()

    rl.on("line", async (line) => await handleUserInput(line))
}

await fileManager()