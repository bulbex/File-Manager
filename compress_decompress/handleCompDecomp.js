import { printCWD } from "../utils/printCWD.js";
import { compressFile } from "./compress.js";
import { decompressFile } from "./decompress.js";

export function handleCompDecomp(command, paths) {
    switch (command) {
        case "compress":
            compressFile(paths)
            printCWD()
            break;
        case "decompress":
            decompressFile(paths)
            printCWD()
            break;
        default:
            console.error("Invalid input")
            break;
    }
}