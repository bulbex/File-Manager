import { rename } from "node:fs/promises"
import { printCWD } from "../utils/printCWD.js"
import { getFileFromPath } from "../utils/getFileFromPath.js"
import path from "node:path"

export async function renameFile(paths) {
    const fileNameLength = getFileFromPath(paths[0]).length
    const pathToFile = paths[0].slice(0, paths[0].length - fileNameLength)
    await rename(paths[0], path.join(pathToFile, paths[1]))
        .catch(error => console.error("Operation failed"))
    printCWD()
}