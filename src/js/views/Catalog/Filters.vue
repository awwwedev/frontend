<template>
  <div class="filters" ref="wrapper">
    <div class="filters__container" ref="container">
      <form action="" class="filters__form form">
        <h3 class="filters__title">Что вы ищете?</h3>
        <div class="filters__section">
          <h4 class="filters__section-title">Хозяйственное назначение</h4>
          <template v-if="!$isLoading('realtyType')">
            <div v-for="(type, index ) in $realtyTypes"
                 class="form__group"
                 :key="`realty-type-${index}`">
              <input type="checkbox" class="form__control" :id="`realty-type-${index}`" :value="type.id"
                     v-model="realtyTypesModel"/>
              <label :for="`realty-type-${index}`" class="filters__form-label form__label flex-wrapper">
                <span class="form__control-indicator"></span>
                {{ type.name }}
              </label>
            </div>
          </template>
          <template v-else>
            <Preloader class="mx-auto" sm/>
          </template>
        </div>
        <div class="filters__section">
          <h4 class="filters__section-title">Оснащение</h4>
          <template v-if="!$isLoading('equipment')">
            <div v-for="(eq, index ) in $equipments"
                 class="form__group"
                 :key="`equipment-type-${index}`">
              <input type="checkbox" class="form__control" :id="`equipment-type-${index}`" :value="eq.id"
                     v-model="realtyEquipmentModel"/>
              <label :for="`equipment-type-${index}`"
                     class="filters__form-label form__label flex-wrapper">
                <span class="form__control-indicator"></span>
                {{ eq.name }}
              </label>
            </div>
          </template>
          <template v-else>
            <Preloader class="mx-auto" sm/>
          </template>
        </div>
      </form>
      <div class="filters__section">
        <h4 class="filters__section-title">Площадь, кв. м.</h4>
        <template v-if="!$isLoading('realty/minMax')">
          <div class="filters__range-container">
            <Range
              v-if="$realtyMinMax"
              class="filters__range"
              :min="$realtyMinMax.areaMin"
              :max="$realtyMinMax.areaMax"
              ref="rangeArea"
              v-model="areaModel"
            >
              <template v-slot:info="{ currentMin, currentMax }">
                {{ Math.floor(currentMin) }} | {{ Math .ceil(currentMax) }}
              </template>
            </Range>
          </div>
        </template>
        <template v-else>
          <Preloader class="mx-auto mb-4" sm/>
        </template>
      </div>
      <div class="filters__section">
        <h4 class="filters__section-title">Цена руб. / кв. м.</h4>
        <template v-if="!$isLoading('realty/minMax')">
          <div class="filters__range-container">
            <Range
              v-if="$realtyMinMax"
              class="filters__range"
              :min="$realtyMinMax.pricePerMetrMin"
              :max="$realtyMinMax.pricePerMetrMax"
              ref="rangePricePerMetr"
              v-model="perPriceModel"
            >
              <template v-slot:info="{currentMin, currentMax}">
                {{ Math.floor(currentMin) }}| {{ Math .ceil(currentMax) }}
              </template>
            </Range>
          </div>
        </template>
        <template v-else>
          <Preloader class="mx-auto mb-4" sm/>
        </template>
      </div>
      <div class="filters__section">
        <h4 class="filters__section-title">Цена, руб.</h4>
        <template v-if="!$isLoading('realty/minMax')">
          <div class="filters__range-container">
            <Range
              v-if="$realtyMinMax"
              class="filters__range"
              ref="rangePrice"
              :min="$realtyMinMax.priceMin"
              :max="$realtyMinMax.priceMax"
              v-model="priceModel"
            >
              <template v-slot:info="{currentMin, currentMax}">
                {{ Math.floor(currentMin) }} | {{ Math .ceil(currentMax)}}
              </template>
            </Range>
          </div>
        </template>
        <template v-else>
          <Preloader class="mx-auto mb-4" sm/>
        </template>
      </div>
      <div class="flex-wrapper flex-wrapper_J-C">
        <button class="btn btn_primary btn_sm" @click="onFilter">Найти</button>
        <button class="btn btn_secondary btn_sm" @click="onClear">Сбросить</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Emit, Prop, Ref, Vue, Watch} from "vue-property-decorator";
  import Range from "@/js/components/ui/Range.vue";
  import Select from "@/js/components/ui/Select.vue";
  import RealtyType from "@/js/models/RealtyType";
  import Realty from "@/js/models/Realty";
  import {mapGetters, mapMutations} from "vuex";
  import bus, {FILTERS_ALL_LOADED} from "@/js/common/bus";
  import {minMax, objectWIthAnyProperties, realtyMinMaxInfo} from "@/js/common/types";
  import Equipment from "@/js/models/Equipment";
  import Preloader from "@/js/components/widgets/Preloader.vue";
  import {getModule} from "vuex-module-decorators";
  import Catalog from "@/js/store/modules/catalog";
  import CatalogQueryParams from "@/js/store/modules/catalogQueryParams";


  @Component({
    components: {Preloader, Select, Range},
    computed: {
      ...mapGetters('common', {
        $windowWidth: 'windowWidth',
        $isLoading: 'isLoading',
        $loadings: 'loadings'
      }),
      ...mapGetters('queryParams', {
        $queryParams: 'params',
        $startedQueryParams: 'startedParams'
      }),
      ...mapGetters('catalog', {
        $equipments: 'equipments',
        $realtyTypes: 'realtyTypes',
        $realtyMinMax: 'realtyMinMax',
      })
    },
    methods: {
      ...mapMutations('queryParams', {
        $addParam: '_addParam',
        $setQueryParams: 'setQueryParams',
        $saveFiltersInUrl: 'saveInUrl',
      })
    },
    metaInfo() {
      return {
        meta: [
          {
            vmid: 'description',
            name: 'description',
            // @ts-ignore
            content: `Настройте параметры поиска по желаемым результатам и изучайте каталог предложений с фотографиями.
          Меняйте стоимость, метраж, планировку, назначение и другие параметры – находите самое лучшее
          помещение!`,
          },
          {
            vmid: 'keywords',
            name: 'keywords',
            // @ts-ignore
            content: `аренда, недвижимость, севастополь, аренда помещений, аренда недвижимости, помещения, коммерческая недвижимость, ${this.metaKeyWords}`,
          }
        ]
      }
    }
  })
  export default class Filters extends Vue {
    @Prop({required: true, type: Boolean}) isShow!: boolean
    @Ref('rangePricePerMetr') refRangePricePerMetr!: Range
    @Ref('rangePrice') refRangePrice!: Range
    @Ref('rangeArea') refRangeArea!: Range
    @Ref('container') refContainer!: HTMLElement
    $addParam!: (payload: { name: string, value: string | Array<number | string> | minMax | number | objectWIthAnyProperties }) => void
    $setQueryParams!: (params: objectWIthAnyProperties) => void
    $isLoading!: (key: string) => boolean
    $saveFiltersInUrl!: () => void
    $loadings!: { [key: string]: boolean }
    $equipments!: Array<Equipment>
    $realtyTypes!: Array<RealtyType>
    $realtyMinMax!: realtyMinMaxInfo
    $windowWidth!: number
    $queryParams!: objectWIthAnyProperties
    $startedQueryParams!: objectWIthAnyProperties
    realtyTypes: Array<RealtyType> = []
    realtyTypesModel: Array<number> = []
    realtyEquipmentModel: Array<Equipment> = []
    sticky = false
    allFiltersIsLoaded = true
    priceModel = {min: 0, max: 0}
    areaModel = {min: 0, max: 0}
    perPriceModel = {min: 0, max: 0}

    get metaKeyWords(): string {
      return this.realtyTypes.map(type => type.name?.toLowerCase()).join(', ')
    }

    onResize(): void {
      this.resize()
    }

    rangeModelIsValid(model: minMax): boolean {
      return model.max !== -1 && model.min !== -1
    }

    resize(): void {
      if (this.refRangePricePerMetr) this.refRangePricePerMetr.onResize()
      if (this.refRangePrice) this.refRangePrice.onResize()
      if (this.refRangeArea) this.refRangeArea.onResize()
    }

    initState(): void {
      if (this.$realtyMinMax) {
        if (this.$startedQueryParams.pricePerMetrMax && this.$startedQueryParams.pricePerMetrMin) {
          this.perPriceModel = {
            max: this.$startedQueryParams.pricePerMetrMax as number,
            min: this.$startedQueryParams.pricePerMetrMin as number
          }
        } else {
          this.perPriceModel = {
            max: this.$realtyMinMax.pricePerMetrMax,
            min: this.$realtyMinMax.pricePerMetrMin
          }
        }

        if (this.$startedQueryParams.areaMax && this.$startedQueryParams.areaMin) {
          this.areaModel = {
            max: this.$startedQueryParams.areaMax as number,
            min: this.$startedQueryParams.areaMin as number
          }
        } else {
          this.areaModel = {max: this.$realtyMinMax.areaMax, min: this.$realtyMinMax.areaMin}
        }

        if (this.$startedQueryParams.priceMax && this.$startedQueryParams.priceMin) {
          this.priceModel = {
            max: this.$startedQueryParams.priceMax as number,
            min: this.$startedQueryParams.priceMin as number
          }
        } else {
          this.priceModel = {max: this.$realtyMinMax.priceMax, min: this.$realtyMinMax.priceMin}
        }


        if (this.refRangePricePerMetr) this.refRangePricePerMetr.setValue(this.perPriceModel, true);
        if (this.refRangePrice) this.refRangePrice.setValue(this.priceModel, true);
        if (this.refRangeArea) this.refRangeArea.setValue(this.areaModel, true);
      }
    }

    created(): void {
      const catalogModule = getModule(Catalog, this.$store)
      const realtyMinMaxLoaded = Object.values(this.$realtyMinMax).every((value) => value !== -1)
      this.allFiltersIsLoaded = Boolean(this.$realtyTypes.length) && Boolean(this.$equipments.length) && realtyMinMaxLoaded

      if (!this.allFiltersIsLoaded) {
        RealtyType.getList().then(({data}) => {
          this.$nextTick(() => catalogModule.setRealtyType(data))
        })
        Realty.getMinMax().then(res => {
          this.$nextTick(() => catalogModule.setRealtyMinMax(res.data))
        })
        Equipment.getList().then(response => {
          this.$nextTick(() => catalogModule.setEquipments(response.data))
        })
      }

      addEventListener('resize', this.onResize)
    }
    activated(): void {
      getModule(CatalogQueryParams, this.$store).init()
    }

    beforeDestroy(): void {
      removeEventListener('resize', this.onResize)
    }

    @Watch('$startedQueryParams', {immediate: true})
    watchStartedParams(): void {
      this.realtyEquipmentModel = this.$startedQueryParams.equipments as Array<Equipment> || []
      this.realtyTypesModel = this.$startedQueryParams.types as Array<number> || []
    }

    @Watch('realtyTypesModel')
    watchRealtyTypesModel(model: Array<number>): void {
      this.$addParam({name: 'types', value: model})
    }

    @Watch('realtyEquipmentModel')
    watchRealtyEquipmentModel(model: Array<number>): void {
      this.$addParam({name: 'equipments', value: model})
    }

    @Watch('priceModel')
    watchPriceModel(payload: minMax): void {
      if (this.rangeModelIsValid(payload)) {
        this.$addParam({name: 'priceMax', value: payload.max})
        this.$addParam({name: 'priceMin', value: payload.min})
      }
    }

    @Watch('areaModel')
    watchAreaModel(payload: minMax): void {
      if (this.rangeModelIsValid(payload)) {
        this.$addParam({name: 'areaMax', value: payload.max})
        this.$addParam({name: 'areaMin', value: payload.min})
      }
    }

    @Watch('perPriceModel')
    watchPerPriceModel(payload: minMax): void {
      if (this.rangeModelIsValid(payload)) {
        this.$addParam({name: 'pricePerMetrMax', value: payload.max})
        this.$addParam({name: 'pricePerMetrMin', value: payload.min})
      }
    }

    @Watch('$loadings')
    watch$loadings(): void {
      this.allFiltersIsLoaded = ['realtyType', 'equipment', 'realty/minMax'].every(key => !this.$loadings[key])
    }

    @Watch('allFiltersIsLoaded', {immediate: true})
    watchAllFiltersIsLoaded(value: boolean): void {
      if (value) {
        this.initState()
        bus.$emit(FILTERS_ALL_LOADED)
      }
    }

    @Emit('filter')
    onFilter(): void {
      bus.$emit('filters::filter')
      this.$emit('close')
    }

    @Emit('clear')
    onClear(): void {
      this.$setQueryParams({})
      this.$saveFiltersInUrl()

      if (this.$realtyMinMax) {
        this.perPriceModel = {
          max: this.$realtyMinMax.pricePerMetrMax,
          min: this.$realtyMinMax.pricePerMetrMin
        }
        this.areaModel = {max: this.$realtyMinMax.areaMax, min: this.$realtyMinMax.areaMin}
        this.priceModel = {max: this.$realtyMinMax.priceMax, min: this.$realtyMinMax.priceMin}

        if (this.refRangePricePerMetr) this.refRangePricePerMetr.setValue(this.perPriceModel, true);
        if (this.refRangePrice) this.refRangePrice.setValue(this.priceModel, true);
        if (this.refRangeArea) this.refRangeArea.setValue(this.areaModel, true);
      }
      this.realtyEquipmentModel = []
      this.realtyTypesModel = []

      bus.$emit('filters::clear')
      this.$emit('close')
    }
  }
</script>

<style scoped lang="stylus">
  @import "~@common/assets/stylus/colors.styl"

  .mx-auto
    margin 0 auto

  .mb-4
    margin-bottom 25px

  .btn
    &:first-child
      margin-right 5px

  .filters
    &__section
      margin-bottom 25px

      &:last-child
        margin-bottom 0

    &__container
      position relative
      width 100%

    &__title
      font-size 1.2rem
      margin-bottom 30px
      text-align center

    &__section-title
      font-size .8rem
      margin-bottom 15px

    &__range
      max-width 92%

      &-container
        padding-top 40px
        margin-bottom 30px

    &__form
      font-size .7rem
      margin-bottom 30px

      &-label
        padding-top 3px

</style>

