<template>
  <transition name="notification" duration="3000">
    <div v-show="isShow" class="notification">
      <div class="notification__body">
        <h3 v-if="title" class="notification__title">
          {{ title }}
        </h3>
        <p v-if="text" class="notification__text">
          {{ text }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({})
export default class Notification extends Vue {
  isShow = false
  title = ''
  text = ''

  show(title: string, text = ''): void {
    this.text = text
    this.title = title
    this.isShow = true

    setTimeout(() => {
      this.isShow = false
    }, 5000)
  }
}
</script>

<style scoped lang="stylus">
@import "~@common/assets/stylus/colors.styl"


.notification
  position fixed
  right 30px
  top 20%
  z-index 4

  &-enter
    transform translateX(100%)
    opacity 0

    &-active
      transition transform ease-in .3s, opacity ease-in .3s

    &-to
      transform none
      opacity 1

  &-leave
    transform none
    opacity 1

    &-active
      transition transform ease-in .3s, opacity ease-in .3s

    &-to
      opacity 0
      transform translateX(100%)



  &__body
    position relative
    background-color mainColor
    color white
    padding: 10px 15px;
    text-align right

    &:after
      content: '';
      display: block;
      position: absolute;
      left: -32px;
      top: 0;
      transition: border linear 0.47s;
      border-top: 0 solid transparent;
      border-left: 32px solid rgba(0,0,0,0);
      border-bottom: 73px solid mainColor;

</style>