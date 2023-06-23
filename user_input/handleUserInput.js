import { handleFileOperation } from "../file_operations/handleOperations.js"
import { printCWD } from "../index.js"
import { readdir } from "node:fs"

export async function handleUserInput(line) {
    if (line === "up") {
        process.chdir("..")
        printCWD()
        return
    }

    if (line.startsWith("cd ")) {
        process.chdir(line.split(" ").slice(1).join(" "))
        printCWD()
        return
    }

    if (line === "ls") {
        readdir(process.cwd(), {withFileTypes: true}, 
        (err, files) => {
            if (err) {
                console.error(err)
                return
            }
            console.table(
                files.sort((a, b) => {
                return a.isDirectory() 
                        ? b.isDirectory()
                            ? a.name - b.name 
                            : -1
                        : b.isDirectory()
                            ? 1 
                            : a.name - b.name
            }).map(file => Object.assign({ name: file.name, type: file.isDirectory() ? 'directory' : 'file' })))
        })
        return
    }

    const command = line.split(" ")[0]
    const filePaths = line.split(" ").slice(1)
    await handleFileOperation(command, filePaths)
}