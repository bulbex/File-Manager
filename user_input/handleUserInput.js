import { handleFileOperation } from "../file_operations/handleOperations.js"
import { handleOSCommands } from "../os/handleOSCommands.js"
import { printCWD } from "../utils/printCWD.js"
import { readdir } from "node:fs"
import { hashFile } from "../hash/handleHashCommand.js"
import { handleCompDecomp } from "../compress_decompress/handleCompDecomp.js"

export async function handleUserInput(line) {
    try {
        if (line === "") {
            printCWD()
            return
        }

        if (line === "up") {
            process.chdir("..")
            printCWD()
            return
        }
    
        if (line === "ls") {
            readdir(process.cwd(), {withFileTypes: true}, 
            (err, files) => {
                if (err) {
                    console.error("Operation failed")
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
                printCWD()
            })
            return
        }

        if (line.startsWith("cd ")) {
            process.chdir(line.split(" ").slice(1).join(" "))
            printCWD()
            return
        }

        if (line.startsWith("os ")) {
            handleOSCommands(line.split(" ")[1])
            printCWD()
            return
        }

        const command = line.split(" ")[0]
        const filePaths = line.slice(command.length).match(/[^ (\"|\')][\:*\w+ \/\.]+[^ (\"|\')]/g)
        
        if (line.startsWith("hash ")) {
            await hashFile(filePaths[0])
            return
        }
        

        if (line.startsWith("compress ") || line.startsWith("decompress ")) {
            handleCompDecomp(command, filePaths)
            return
        }

        await handleFileOperation(command, filePaths)

    } catch (error) {
        console.error(error)
        printCWD()
    }
}