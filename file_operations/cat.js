import { createReadStream } from "node:fs"
import { printCWD } from "../utils/printCWD.js"

export function readContent(path) {
    createReadStream(path)
    .on("error", error => console.error("Operation failed"))
    .on("data", data => {console.log(data.toString()); printCWD()})
}