import {Module, VuexModule, Mutation } from 'vuex-module-decorators'


@Module({name: 'common', namespaced: true})
export default class Common extends VuexModule {
    _windowWidth = 0
    _loadingTemp = {} as { [key: string]: boolean }

    get windowWidth(): number {
        return this._windowWidth
    }
    get isLoading(): (key: string) => boolean {
        return (key: string) => this._loadingTemp[key]
    }
    get loadings(): { [key: string]: boolean } {
        return this._loadingTemp
    }

    @Mutation
    setWindowWidth():void {
        this._windowWidth = window.innerWidth
    }
    @Mutation
    setLoading(key: string):void {
        this._loadingTemp = { ...this._loadingTemp, [key]: true }
    }
    @Mutation
    unsetLoading(key: string):void {
        this._loadingTemp = { ...this._loadingTemp, [key]: false }
    }
}
