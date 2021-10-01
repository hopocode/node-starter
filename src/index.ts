import {existsSync, readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import { createPackageConfig } from './builder/package';
const readline = require("readline");
let starterFilename:string = process.argv[2];


const cl = readline.createInterface(process.stdin, process.stdout);
const question = (q: string): Promise<string> => {
  return new Promise((res, rej) => {
    cl.question(q + ": ", (answer: string) => res(answer));
  });
};

const runMain = async () => {
    if(!starterFilename) {
        starterFilename = await question("Full path of starter.json file");
    }
    if(!existsSync(starterFilename)){
        console.error(`Starter config file "${starterFilename}" does not exists.`);
    }
    console.log(`info: Building app from config file: "${starterFilename}"`);
    
    const configContent: string = readFileSync(starterFilename, "utf8");
    const config = JSON.parse(configContent);
    const packageFile = await createPackageConfig(config);
    console.log("ppppp", packageFile);
    
    const out = JSON.stringify(packageFile, null, 2);
   // console.log(out);
    
    //writeFileSync(join(__dirname,"../.testout/package.json"), out);
    writeFileSync(join(__dirname,"/package.json"), out);
}
runMain().then((r) => {
    console.log("Instalation done.");
    process.exit();
  });
//process.exit();



