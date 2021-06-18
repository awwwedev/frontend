import {AxiosResponse} from "axios";
import api from "../common/myApi.json";
import http from "@/js/common/http";
import {objectWIthAnyProperties} from "@/js/common/types";

export default class RealtyType {
    id?: number
    name?: string
    img_path?: string

    static getList(params: { [key: string]: objectWIthAnyProperties} = {}): Promise<AxiosResponse<RealtyType[]>> {

        if (process.env.VUE_APP_USE_LOCAL_API === 'false') {
            return http.get<RealtyType[]>('realtyType', { params: params })
        } else {
            return new Promise<AxiosResponse<RealtyType[]>>((resolve) => {
                resolve({ data: api.realtyType } as AxiosResponse<RealtyType[]>)
            })
        }
    }
}
