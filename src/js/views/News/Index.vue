<template>
  <div class="news" ref="news">
    <h1 class="news__title text-center">Новости технопарка</h1>
    <div class="news__container container">
        <transition-group class="news__grid" tag="div" name="news"
                          :css="false"
                          @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
          <NewsCard class="" v-for="(newsItem, idx ) in news"
                    v-if="news.length"
                    :content="newsItem.short_description"
                    :name="newsItem.header"
                    :img-path="imageBasePath + newsItem.photo"
                    :key="idx + 'ghjkghjk'"
                    :data-index="idx"
                    :id="newsItem.id"
          >
            {{ newsItem.content }}
          </NewsCard>
        </transition-group>
      <div v-if="inRequestState" class="catalog__loader">
        <Preloader lg/>
      </div>
      <Paginator class="catalog__paginate"
                 :items-on-page="paginator.itemsOnPage"
                 :total-items="paginator.totalItems"
                 :total-pages="paginator.totalPages"
                 v-model="paginator.currentPage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Inject, Ref, Watch} from "vue-property-decorator";
import News from "@/js/models/News";
import Paginator from "@/js/common/helpers/Paginator";
import PaginatorComponent from "@/js/components/widgets/Paginator.vue";
import NewsCard from "@/git-modules/common/src/components/NewsCard.vue";
import $ from "jquery";
import {ScrollTo} from "@/js/mixins/common";
import {AxiosResponse} from "axios";
import Preloader from "@/js/components/widgets/Preloader.vue";


@Component({
  components: {Preloader, NewsCard, Paginator: PaginatorComponent},
  metaInfo() {
    return {
      title: 'Новости',
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
          content: `новости, события, технопарк маяк, ассоциация технопарк маяк, севастополь`,
        }
      ]
    }
  }
})
export default class IndexNews extends ScrollTo {
  news = [] as Array<News>
  paginator = { currentPage: 1 } as Paginator<News>
  newsListLength = 0
  inRequestState = false
  @Ref('news') $refNews!: HTMLElement
  @Inject('imageBasePath') imageBasePath!: string


  updateList (): Promise<AxiosResponse<Paginator<News>>> {
    this.inRequestState = true

    return News.getList({ page: this.paginator.currentPage, perPage: 6, sortType: 'DESC', sortField: 'created_at' })
        .then(response => {
          Paginator.initPaginator(response.data)

          this.paginator = response.data
          this.news = this.paginator.data
          this.newsListLength = this.news.length

          return response
        }).finally(() => {
          this.inRequestState = false
        })
  }

  onBeforeEnter(el: HTMLElement): void {
    $(el).css('opacity', 0)
  }

  get metaDesc(): string {
    return 'Самые актальные новости технопарка'
  }

  onEnter(el: HTMLElement, done: () => void): void {
    if (el) {
      let delay = Number(el.dataset.index) * 150

      setTimeout(() => {
        $(el).animate({
          opacity: 1
        }, "fast", done)
      }, delay)
    }
  }

  onLeave(el: HTMLElement, done: () => void): void {
    if (el) {
      let index = Number(el.dataset.index)
      let delay = (this.newsListLength - index) * 100

      setTimeout(() => {
        $(el).animate({
          opacity: 0
        }, {
          duration: 'fast',
          complete: () => {
            if (index === 0) {
              this.$nextTick(() => {
                this.updateList()
              })
            }
            done();
          }
        })
      }, delay)
    }
  }

  @Watch('paginator.currentPage')
  watchPaginatorCurrentPage(): void {
    this.news = []
  }

  created (): void {
    this.updateList()
  }
}
</script>

<style scoped lang="stylus">
::v-deep .news
  .news__name
    width 100%
.news
  margin-bottom 50px

  &__title
    margin-bottom 150px
    margin-top 50px
    font-size 2rem

    @media (max-width 1000px)
      margin-bottom 100px
      margin-top 25px

     @media (max-width 650px)
       margin-bottom 50px
       margin-top 25px

  &__grid
    display grid
    grid-template-columns repeat(3, 1fr)
    margin-bottom 25px
    column-gap 20px
    row-gap 20px

    @media (max-width 1000px)
      grid-template-columns repeat(2, 1fr)

    @media (max-width 650px)
      grid-template-columns repeat(1, 1fr)


.news
  &-enter-active, &-leave-active
    transition opacity linear .5s

  &-enter-to, &-leave
    opacity 1

  &-enter, &-leave-to
    opacity 0
</style>
