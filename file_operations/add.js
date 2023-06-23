import { writeFile} from "node:fs/promises"
import { existsSync } from "node:fs"
import { printCWD } from "../index.js"

export async function addFile(path) {
    if (existsSync(path)) {
        console.log("File with this name already exists")
        return
    }
    await writeFile(path, "", {encoding: "utf8"})
    .catch(error => { console.error(`Error: ${error.message}`) })
    .then(() => {console.log(`Successfully added ${path}`); printCWD()})
}