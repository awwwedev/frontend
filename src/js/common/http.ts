import axios, {AxiosResponse} from 'axios'
import {objectWIthAnyProperties} from "@/js/common/types";
import {getModule} from "vuex-module-decorators";
import Common from "@/js/store/modules/common";
import store from "@/js/store/index";


const axiosInst = axios.create({
    baseURL: process.env.VUE_APP_URL + 'api'
})


class Http {

  /* eslint-disable */
  get <T = any> (path: string, params: objectWIthAnyProperties = { }): Promise<AxiosResponse<T>> {
    const commonModule = getModule(Common, store)
    commonModule.setLoading(path)

    return axiosInst.get<T>(path, params).finally(() => {
      setTimeout(() => {
        commonModule.unsetLoading(path)
      }, 1000)
    })
  }

  /* eslint-disable */
  post <T = any> (path: string, params: objectWIthAnyProperties = { }): Promise<AxiosResponse<T>> {
    const commonModule = getModule(Common, store)
    commonModule.setLoading(path)

    return axiosInst.post<T>(path, params).finally(() => {
      commonModule.unsetLoading(path)
    })
  }
}

export default new Http()
