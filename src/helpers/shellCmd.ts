import { exec } from 'child_process';

function execShellCommand(cmd: string): Promise<string> {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`[ERROR] ${error}`);
                reject(error);
            }
            resolve(stdout || stderr);
        });
    });
}

export default execShellCommand;
