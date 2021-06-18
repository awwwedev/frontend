import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators'
import Realty from "@/js/models/Realty";
import Equipment from "@/js/models/Equipment";
import RealtyType from "@/js/models/RealtyType";
import {realtyMinMaxInfo} from "@/js/common/types";


@Module({ name: 'catalog', namespaced: true })
export default class Catalog extends VuexModule {
    _realty: Array <Realty> = []
    _onlyMap = false
    _equipments = [] as Array<Equipment>
    _realtyType= [] as Array<RealtyType>
    _minMax = {
        pricePerMetrMax: -1,
        priceMin: -1,
        priceMax: -1,
        areaMin: -1,
        areaMax: -1,
        pricePerMetrMin: -1
    } as realtyMinMaxInfo

    get realty(): Array <Realty> {
        return this._realty
    }
    get onlyMap(): boolean {
        return this._onlyMap
    }
    get equipments(): Array<Equipment> {
        return this._equipments
    }
    get realtyTypes(): Array<RealtyType> {
        return this._realtyType
    }
    get realtyMinMax(): realtyMinMaxInfo {
        return this._minMax
    }

    @Mutation
    _setRealty(realty: Array <Realty>): void {
        this._realty = realty
    }
    @Mutation
    _setOnlyMap(onlyMap: boolean): void {
        this._onlyMap = onlyMap
    }
    @Mutation
    setRealtyMinMax(minMax: realtyMinMaxInfo): void {
        this._minMax = minMax
    }
    @Mutation
    setRealtyType(realtyType: Array<RealtyType>): void {
        this._realtyType = realtyType
    }
    @Mutation
    setEquipments(equipments: Array<Equipment>): void {
        this._equipments = equipments
    }

    @Action({commit: '_setOnlyMap'})
    setOnlyMap(onlyMap: boolean): boolean {
        return onlyMap
    }
    @Action({commit: '_setRealty'})
    setRealty(realty: Array <Realty>): Array <Realty> {
        return realty
    }
}
