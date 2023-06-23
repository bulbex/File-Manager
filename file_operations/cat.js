import { createReadStream } from "node:fs"
import { printCWD } from "../index.js"

export function readContent(path) {
    createReadStream(path)
    .on("error", error => {throw new Error(error)})
    .on("data", data => {console.log(data.toString()); printCWD()})
}