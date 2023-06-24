import { rename } from "node:fs/promises"
import { printCWD } from "../utils/printCWD.js"

export async function renameFile(paths) {
    await rename(paths[0], paths[1]).catch(error => console.error("Operation failed"))
    printCWD()
}