import { sleep } from "../../../utils";
import { IBuild } from "../IBuild";

export const validateName = (n: string) => {
    //console.log(n);
}

export const validateNameNpmRegister = (n: string) => {
    //console.log(n);
}

export const buildName: IBuild = async (val: any): Promise<any> => {
    await validateName(val);
    await validateNameNpmRegister(val);
    return val;
}