import { rm } from "node:fs/promises"
import { printCWD } from "../utils/printCWD.js"

export async function removeFile(path) {
    await rm(path).catch(error => console.error("Operation failed"))
    printCWD()
}