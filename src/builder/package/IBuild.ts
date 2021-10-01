import { IAppConfig } from "../IAppConfig";

export interface IBuild {
    (value: any, appConfig?: IAppConfig): Promise<any>
}