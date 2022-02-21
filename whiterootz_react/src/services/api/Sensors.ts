import { AxiosRequestConfig } from "axios";
import { get } from "./Base";

export const Sensors = {
    list: (params: AxiosRequestConfig) =>
        get('/sensors/tempsensors/', params)
}