import { createReadStream, createWriteStream } from "node:fs"
import path from "node:path"
import { createBrotliCompress } from "node:zlib"
import { getFileFromPath } from "../utils/getFileFromPath.js"

export function compressFile(paths) {
    const fileToCompress = getFileFromPath(paths[0])

    const input = createReadStream(paths[0])
        .on("error", error => console.error("Operation failed"))

    const output = createWriteStream(path.join(paths[1], `${fileToCompress}.br`))
        .on("error", error => console.error("Operation failed"))

    const brotli = createBrotliCompress()

    input.pipe(brotli).pipe(output)
        .on("error", error => console.error("Operation failed")) 
}