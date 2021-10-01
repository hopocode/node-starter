export const sleep = (ms: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("sleep end");
        }, ms);
    });
}