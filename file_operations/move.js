import { printCWD } from "../utils/printCWD.js";
import { copyFile } from "./copy.js";
import { rm } from "node:fs/promises"

export async function moveFile(paths) {
    await copyFile(paths)
    await rm(paths[0]).catch(error => console.error("Operation failed"))
    printCWD()
}