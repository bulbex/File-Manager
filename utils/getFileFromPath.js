export function getFileFromPath(path) {
    return path.includes("/") 
        ? `${path.split("/").slice(-1)}`
        : `${path.split("\\").slice(-1)}`
}