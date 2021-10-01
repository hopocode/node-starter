import { IAppConfig } from "../IAppConfig";
import { buildDescription } from "./options/description";
import { IBuild } from "./IBuild";
import {buildName} from "./options/name";
import { buildVersion } from "./options/version";
import { IPackageFile } from "./IPackageFile"
import { buildScripts } from "./options/scripts";
import { buildDependencies } from "./options/dependencies";

interface IPackageOptionBuilder {
    name: string
    build: IBuild
}



const packageOptions: IPackageOptionBuilder[] = [
    {
        name: "name",
        build: buildName
    },
    {
        name: "version",
        build: buildVersion
    },
    {
        name: "description",
        build: buildDescription
    },
    {
        name: "scripts",
        build: buildScripts
    },
    {
        name: "dependencies",
        build: buildDependencies
    },
    {
        name: "devDependencies",
        build: buildDependencies
    }
]


const createPackageConfigValue = async (appConfig: IAppConfig, packageOptionBuilder: IPackageOptionBuilder, val: any): Promise<any> => {
    return await packageOptionBuilder.build(val, appConfig);
//     return 


// //    const res = optionBuilder._build(appConfig);
//     if(res._build) {
//         const val = await createPackageConfigValue(appConfig, optionBuilder);
//     } 


//     const val = await opt.build(appConfig);
//     if(val !== undefined){
//         return val;
//         // pkg[opt.name] = val;
//     }
//     const nextIndex = currentIndex + 1;
//     if(options[nextIndex]){
//         pkg = await createPackageConfigValue(appConfig, {...pkg}, options, nextIndex);
//         return pkg;
//     } else {
//         return pkg;
//     }
}

// const createPackageConfigValue = async (appConfig: any, pkg: any, options: any[], currentIndex: number): Promise<any> => {
//     const opt = options[currentIndex];


//     const val = await opt.build(appConfig);
//     if(val !== undefined){
//         return val;
//         // pkg[opt.name] = val;
//     }
//     const nextIndex = currentIndex + 1;
//     if(options[nextIndex]){
//         pkg = await createPackageConfigValue(appConfig, {...pkg}, options, nextIndex);
//         return pkg;
//     } else {
//         return pkg;
//     }
// }

const forOptions = async (packageOptions: IPackageOptionBuilder[], appConfig: IAppConfig): Promise<IPackageFile> => {
    const pcg: IPackageFile = {name: "new-project"};
    for await (let opt of packageOptions) {
        if(appConfig[opt.name]){ // if key exists in appConfig
            pcg[opt.name] = await opt.build(appConfig[opt.name]);
        }
    }
    return pcg;
}

export const createPackageConfig = async (appConfig: any) => {
    const appConfigCopy = JSON.parse(JSON.stringify(appConfig));
    const pcg: IPackageFile = await forOptions(packageOptions, appConfig);
    return pcg;
    //console.log(pcg);

    

    // const pcg = {};
    // return await createPackageConfigValue(appConfig, {}, packageOptions, 0);
    // return package;



    // const buildPac = await packageOptions.reduce(async ())

    // const pcg:any = {};
    // const optKeys = Object.keys(packageOptions);
    // let counter = 0;




    // Object.keys(packageOptions).forEach(cb => {

    // });

    // await async () for (let n in packageOptions) {
    //     const val:any = await packageOptions[n](appConfig);
    //     if(val){
    //         pcg[n] = val;
    //     }
    // }
    // return pcg;

    // // const pcg = packageOptions.reduce((res: any, opt: any) => {


        
    // //     if(val){
    // //         res.push(val);
    // //     }
    // //     return res;
    // // }, []);
}