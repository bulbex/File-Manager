import { createReadStream, createWriteStream } from "node:fs"
import { createBrotliDecompress } from "node:zlib"
import path from "node:path"
import { getFileFromPath } from "../utils/getFileFromPath.js"
import { printCWD } from "../utils/printCWD.js"

export function decompressFile(paths) {

    const fileToDecompress = getFileFromPath(paths[0]).split(".")
    fileToDecompress.pop() // Remove .br extension

    const input = createReadStream(paths[0])

    const brotli = createBrotliDecompress()

    input.on("error", error => {console.error("Operation failed"); printCWD()})
        .pipe(brotli.on("error", error => {console.error("Operation failed"); printCWD()}))
        .on("data", data => createWriteStream(path.join(paths[1], fileToDecompress.join(".")))
                .on("error", error => console.error("Operation failed"))
                .on("open", () => printCWD())
                .write(data)
        )
}