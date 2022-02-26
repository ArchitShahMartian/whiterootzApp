import { AxiosRequestConfig } from "axios";
import { get } from "./Base.ts";

export const Sensors = {
    list: (params: AxiosRequestConfig) =>
        get('/sensors/get-temperature/', params)
}