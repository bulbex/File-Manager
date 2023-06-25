import { compressFile } from "./compress.js";
import { decompressFile } from "./decompress.js";

export function handleCompDecomp(command, paths) {
    switch (command) {
        case "compress":
            compressFile(paths)
            break;
        case "decompress":
            decompressFile(paths)
            break;
        default:
            console.error("Invalid input")
            break;
    }
}