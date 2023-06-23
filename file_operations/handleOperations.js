import { readContent } from "./cat.js";
import { addFile } from "./add.js";

export async function handleFileOperation(operation, paths) {
    switch (operation) {
        case "cat":
            readContent(paths[0])
            break;
        case "add":
            addFile(paths[0])
            break;
        case "rn":
        
            break;
        case "cp":
        
            break;
        case "mv":
        
            break;
        case "rm":
        
            break;
        default:
            break;
    }
}