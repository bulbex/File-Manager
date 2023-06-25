import { createReadStream, createWriteStream } from "node:fs"
import path from "node:path"
import { createBrotliCompress } from "node:zlib"
import { getFileFromPath } from "../utils/getFileFromPath.js"
import { printCWD } from "../utils/printCWD.js"

export function compressFile(paths) {
    const fileToCompress = getFileFromPath(paths[0])

    const input = createReadStream(paths[0])

    const brotli = createBrotliCompress()

    input.on("error", error => {console.error("Operation failed"); printCWD()})
        .pipe(brotli.on("error", error => {console.error("Operation failed"); printCWD()}))
        .on("data", data => createWriteStream(path.join(paths[1], `${fileToCompress}.br`))
                .on("error", error => {console.error("Operation failed"); printCWD()})
                .on("open", () => printCWD())
                .write(data)
        )
}