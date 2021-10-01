import { IBuild } from "../IBuild";

export interface IScriptValue {
    name: string,
    value: string
}

export const buildScripts: IBuild = async (val: any): Promise<any> => {
    const scripts: any = {};
    for(let i in val){
        scripts[i] = val[i]
    }
    return scripts;
}