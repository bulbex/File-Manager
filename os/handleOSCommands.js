import { EOL, cpus, homedir, userInfo } from "node:os"

export function handleOSCommands(command) {
    switch (command) {
        case "--EOL":
            console.log(`End of line: ${JSON.stringify(EOL)}`)
            break;
        case "--cpus":
            console.log("Machine CPUs: ", cpus().map(cpu => cpu.model))
            break;
        case "--homedir":
            console.log(`Home directory: ${homedir}`)
            break;
        case "--username":
            console.log(`System username: ${userInfo().username}`)
            break;
        case "--architecture":
            console.log(`CPU architecture: ${process.arch}`)
            break;
        default:
            console.error("Invalid input")
            break;
    }
}