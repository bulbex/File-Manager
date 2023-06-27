import { createReadStream, createWriteStream, existsSync } from "node:fs"
import { printCWD } from "../utils/printCWD.js"
import path from "node:path"
import { mkdir } from "node:fs/promises"
import { getFileFromPath } from "../utils/getFileFromPath.js"
import { rm } from "node:fs/promises"

export async function copyFile(paths, withRemove = false) {
    try {
        if (!existsSync(paths[1])) {
            await mkdir(paths[1], { recursive: true })
        }
    
        const fileToCopy = getFileFromPath(paths[0])
    
        const dest = path.join(paths[1], fileToCopy)
    
        createReadStream(paths[0], { encoding: "utf8" })
        .on("error", error => {console.error("Operation failed"); printCWD()})
        .on("data", data => {
            createWriteStream(dest)
            .on("error", error => console.error("Operation failed"))
            .on("open", async () => withRemove
                        ? (await rm(paths[0]).catch(error => console.error("Operation failed")), printCWD())
                        : printCWD()
                )
            .write(data)
        })
    } catch (error) {
        console.error("Operation failed")
    }

}