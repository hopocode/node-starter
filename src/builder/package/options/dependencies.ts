import { IBuild } from "../IBuild";

export interface IDependencyValue {
    name: string,
    value: string
}

export const buildDependencies: IBuild = async (val: any): Promise<any> => {
    const dependencies: any = {};
    for(let i in val){
        dependencies[i] = val[i]
    }
    return dependencies;
}