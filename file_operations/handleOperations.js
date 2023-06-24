import { readContent } from "./cat.js";
import { addFile } from "./add.js";
import { renameFile } from "./rename.js";
import { copyFile } from "./copy.js";
import { moveFile } from "./move.js";
import { removeFile } from "./remove.js";

export async function handleFileOperation(operation, paths) {
    switch (operation) {
        case "cat":
            readContent(paths[0])
            break;
        case "add":
            await addFile(paths[0])
            break;
        case "rn":
            await renameFile(paths)
            break;
        case "cp":
            await copyFile(paths)
            break;
        case "mv":
            await moveFile(paths)
            break;
        case "rm":
            await removeFile(paths[0])
            break;
        default:
            console.error("Invalid input")
            break;
    }
}