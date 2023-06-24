import { createReadStream, createWriteStream } from "node:fs"
import { createBrotliDecompress } from "node:zlib"
import path from "node:path"
import { getFileFromPath } from "../utils/getFileFromPath.js"

export function decompressFile(paths) {

    const fileToCompress = getFileFromPath(paths[0]).split(".")
    fileToCompress.pop() // Remove .br extension

    const input = createReadStream(paths[0])
        .on("error", error => console.error("Operation failed"))

    const output = createWriteStream(path.join(paths[1], fileToCompress.join(".")))
        .on("error", error => console.error("Operation failed"))

    const brotli = createBrotliDecompress()

    input.pipe(brotli).pipe(output)
        .on("error", error => console.error("Operation failed")) 
}