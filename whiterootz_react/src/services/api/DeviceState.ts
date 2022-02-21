import { AxiosRequestConfig } from "axios";
import { get } from "./Base.ts";


export const DeviceState = {
    update: ((params: AxiosRequestConfig) => {
        return get('/sensors/device-state/', params)
    })
}