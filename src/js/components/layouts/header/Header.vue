<template>
    <div class="header">
        <div class="header__container container container_big">
            <router-link :to="{ name: 'home', hash: `#about`}">
                <ibg class="header__logo" :src="logoPng"/>
            </router-link>
            <Burger class="header__burger" @click="handleShowMenu"/>
            <nav v-if="!isXSM" class="header__nav nav" ref="linksContainer">
                <NavLinks class="nav__links">
                    <template v-slot:link="{link}">
                        <router-link :ref="'link' + link.refName" :to="{ name: link.routeName, hash: link.hash ? `#${link.hash}` : '' }" class="nav__link">
                          {{ link.displayName }}
                        </router-link>
                    </template>
                </NavLinks>
              <span v-if="!isXSM" class="nav__underline" ref="underline"></span>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Ref, Vue, Watch} from 'vue-property-decorator';
import Burger from "@/js/components/layouts/header/Burger.vue";
import logoPng from '@/assets/img/logo.png'
import bus from "@/js/common/bus";
import NavLinks from "@/js/components/layouts/header/NavLinks.vue";
import Search from "@/js/components/layouts/header/Search.vue";
import {mapGetters} from "vuex";
import $ from "jquery";
import JQuery from "jquery";


@Component({
    components: {Search, NavLinks, Burger},
    data: () => ({
        logoPng
    }),
    computed: {
        ...mapGetters('common', {
            $windowWidth: 'windowWidth'
        })
    }
})
export default class Header extends Vue {
    $windowWidth!: number
    @Ref('underline') refUnderLine!: HTMLElement
    @Ref('linksContainer') refLinksContainer!: HTMLElement
    $refLinksContainer!: JQuery
    $refUnderLine!: JQuery
    get isXSM(): boolean { return this.$windowWidth <= 500; }

    updateUnderLineState (): void {
      if (!this.$refLinksContainer) return

      this.$nextTick(() => {
        let $activeLink = this.$refLinksContainer.find('.router-link-active')

        if (!$activeLink.length) $activeLink = this.$refLinksContainer.find('.nav__link').first()

        this.setUnderLineToLink($activeLink)
      })
    }
    setUnderLineToLink ($link: JQuery): void {
        setTimeout(() => {
            this.$refUnderLine.stop().animate({
                left: $link.offset()?.left,
                width: $link.width()
            })
        }, 100)
    }
    handleShowMenu(): void {
        bus.$emit('nav-bar-show')
    }
    setUnderLine(): void {
        const route = this.$route

        if (route && route.name) {
            if (route.name && route.name.includes('news')) {
                this.$nextTick(() => {
                    // @ts-ignore
                    this.setUnderLineToLink($(this.$refs['linknews'].$el as HTMLElement))
                })
            } if (route.name && route.name.includes('catalog')) {
                this.$nextTick(() => {
                    // @ts-ignore
                    this.setUnderLineToLink($(this.$refs['linkcatalog'].$el as HTMLElement))
                })
            } else if (route.name === 'home') {
                this.updateUnderLineState()
            }
        }

    }

    created(): void {
        addEventListener('resize', this.setUnderLine)
    }
    mounted (): void {
      this.$refUnderLine = $(this.refUnderLine)
      this.$refLinksContainer = $(this.refLinksContainer)
    }
    beforeDestroy(): void {
        removeEventListener('resize', this.setUnderLine)
    }

    @Watch('$route', { immediate: true })
    watchRoute (): void {
        this.setUnderLine()
    }
}
</script>

<style scoped lang="stylus">
@import "~@common/assets/stylus/colors.styl"


.header
    font-size 20px
    width 100%
    position fixed
    top 0
    background-color white
    padding 25px 0
    z-index 3

    &__container
        display flex
        align-items center
        margin 0 auto
        padding 5px 40px

    &__logo
        height 50px
        width 50px

    &__burger
        margin-left 130px
        @media (max-width 1290px)
            margin-left auto
        @media (max-width 1200px)
            margin-left 50px
        @media (max-width 500px)
            margin-left auto

    &__nav
        margin-left 60px
        @media (max-width 1290px)
            margin-left auto

    &__search
        margin-left auto
        @media (max-width 1240px)
            margin-right 0

    &__icon
        margin-left 10px
        margin-top 3px
        width 20px
        height 20px

.nav
    &__links
        display flex
        @media (max-width 1200px)
            display none

    &__link
        margin 0 50px

    &__underline
        display block
        position absolute
        height 3px
        background-color mainColor
        transition width ease-out .3s
        margin-top 5px

        @media (max-width 1200px) {
          display none
        }

</style>
