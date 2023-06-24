import { writeFile} from "node:fs/promises"
import { printCWD } from "../utils/printCWD.js"

export async function addFile(path) {
    try {
        await writeFile(path, "", {encoding: "utf8"})
    } catch (error) {
        console.error("Operation failed")
    }
    printCWD()
}