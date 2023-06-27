import { createHash } from "node:crypto"
import { readFile } from "node:fs/promises"
import { printCWD } from "../utils/printCWD.js"

export async function hashFile(path) {
    try {
        console.log(createHash("sha256").update(await readFile(path)).digest("hex"))
    } catch (error) {
        console.error("Operation failed")
    }
    printCWD()
}