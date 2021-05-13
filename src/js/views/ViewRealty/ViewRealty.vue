<template>
    <div class="view-object">
        <Modal
            :show="isShowRentModal"
            @close="onClose"
        >
            <h3 slot="header">Ваша заявка</h3>
            <form action="" slot="content" class="form" ref="form" @submit.prevent="onSubmit">
                <div class="row form__row form__row_no-margin-sm">
                    <div class="form__group col-6 col-12-sm" :class="{ 'invalid': $v.formModels.fio.$invalid && $v.formModels.fio.$dirty }">
                        <label for="fio" class="form__label">ФИО</label>
                        <input type="text" id="fio" class="form__control" v-model="formModels.fio" @input.once="$v.formModels.fio.$touch()">
                      <span class="form__invalid-message">
                        Это поле обязательно для заполнения
                      </span>
                    </div>
                    <div class="form__group col-6 col-12-sm" :class="{ 'invalid': $v.formModels.phone.$invalid && $v.formModels.phone.$dirty }">
                        <label for="phone" class="form__label">Номер телефона</label>
                        <input type="tel" id="phone" class="form__control" v-mask="'+7 (###) ###-##-##'" v-model="formModels.phone" @input.once="$v.formModels.phone.$touch()">
                      <span class="form__invalid-message">
                        Необходимо заполнить поле "Телефон" или "Email"
                      </span>
                    </div>
                </div>
                <div class="form__group" :class="{ 'invalid': $v.formModels.email.$invalid && $v.formModels.email.$dirty }">
                    <label for="email" class="form__label">Email</label>
                    <input type="email" id="email" class="form__control" v-model="formModels.email" @input.once="$v.formModels.email.$touch()">
                  <span class="form__invalid-message">
                    <template v-if="!$v.formModels.email.email && $v.formModels.email.$dirty">
                      Не верный формат email
                    </template>
                    <template v-if="!$v.formModels.email.requiredIf && $v.formModels.email.$dirty">
                      Необходимо заполнить поле "Телефон" или "Email"
                    </template>
                  </span>
                </div>
                <div class="form__group">
                    <label for="message" class="form__label">Сообщение</label>
                    <textarea id="message" class="form__control" rows="4" v-model="formModels.message" @input.once="$v.formModels.message.$touch()"></textarea>
                </div>
            </form>
            <button class="btn btn_primary btn_sm" slot="btn-ok" :disabled="$v.$invalid">Отправить</button>
        </Modal>
      <RealtyView v-if="viewRealty"
                  :view-realty="viewRealty"
                  @openRentModal="openRentModal"
      >
        <div class="view-object__offers offers">
          <h2 class="offers__title">Интересные предложения</h2>
          <div class="offers__body">
            <Object
                class="offers__object"
                v-if="realities.length"
                v-for="(object, index) in realities"
                :key="index"
                :area="object.area"
                :title="object.name"
                :price="object.price_per_metr"
                :discount="object.discount_sum"
                :total-price="object.price"
                :img-path="object.img_path"
                :id="object.id"
            />
          </div>
        </div>
      </RealtyView>
    </div>
</template>

<script lang="ts">
import { Component, Mixins, Ref } from "vue-property-decorator";
import Slider from "../../../git-modules/common/src/components/Slider.vue";
import Object from "@/git-modules/common/src/components/RealtyCard.vue";
import Modal from "@/git-modules/common/src/components/Modal.vue";
import Realty from "@/js/models/Realty";
import { requiredIf, required, email } from 'vuelidate/lib/validators'
import { validationMixin, Validation } from "vuelidate";
import RealtyView from "@/git-modules/common/src/components/RealtyView.vue";


@Component({
  data: () => ({
    metaDesc: '',
    metaRealtyTypeName: '',
    metaKeyWords: ''
  }),
  components: {RealtyView, Modal, Object, Slider},

  /* eslint-disable */
  validations(): any {
    return {
      formModels: {
        fio: {
          required
        },
        email: {
          // @ts-ignore
          requiredIf: requiredIf(() => !this.formModels.phone),
          email
        },
        phone: {
          // @ts-ignore
          requiredIf: requiredIf(() => !this.formModels.email)
        },
        message: {

        }
      }
    }
  },

  metaInfo() {
    return {
      // @ts-ignore
      title: `Аренда ${this.metaRealtyTypeName}`,
      meta: [
        {
          vmid: 'description',
          name: 'description',
          // @ts-ignore
          content: `${this.metaDesc}`,
        },
        {
          vmid: 'keywords',
          name: 'keywords',
          // @ts-ignore
          content: `аренда, недвижимость, севастополь, аренда помещений, аренда недвижимости, помещения, коммерческая недвижимость${this.metaKeyWords}`,
        }
      ]
    }
  },
})
export default class ViewObject extends Mixins<Validation>(validationMixin) {
    realities: Array<Realty> = []
    viewRealty: Realty | false = false
    isShowRentModal = false
  @Ref('form') refForm!: HTMLElement
  metaDesc!: string
  metaRealtyTypeName!: string
  metaKeyWords!: string
  formModels = {
    message: '',
    email: '',
    phone: '',
    fio: '',
  }

  onSubmit (): void {
      if (!this.$v.$invalid) {
        console.log(this.formModels)
      }
  }
  onClose (): void {
      this.isShowRentModal = false

    this.formModels = {
      message: '',
      email: '',
      phone: '',
      fio: '',
    }

    this.$v.$reset()
  }

  makeKeywords(): string {
    let keywords = this.viewRealty && this.viewRealty.equipments ? this.viewRealty.equipments.map(equipment => equipment.display_name) : []

    return keywords.length !== 0 ? ', ' + keywords.join(', ').toLowerCase() : ''
  }

    openRentModal(): void {
        this.isShowRentModal = true
    }

  created(): void {
    Realty.getList().then(({ data }) => {
      this.realities = data.data.slice(0, 3)
    })
    Realty.get({ id: this.$route.params.id as unknown as number }).then(({ data }) => {
      this.viewRealty = data
      this.metaDesc = data.description as string
      this.metaRealtyTypeName = (data.realtyTypeName as string || '').toLocaleLowerCase()
      this.metaKeyWords = this.makeKeywords()
    })
  }
}
</script>

<style scoped lang="stylus">
@import "~@common/assets/stylus/colors.styl"

.offers
    &__title
        font-size 30px
        margin-bottom 31px

    &__body
        margin-bottom 90px
        display grid
        grid-template-columns 1fr 1fr 1fr
        grid-gap 30px
        @media (max-width 1000px)
            grid-template-columns 1fr 1fr
        @media (max-width 650px)
            grid-template-columns 1fr

    &__object
        width 100%

.title
  margin-bottom 10px
  font-size 25px

</style>
