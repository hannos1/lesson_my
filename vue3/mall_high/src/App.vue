<script setup>
import { ref, onMounted, reactive } from 'vue'
const searchWrap = ref(null)
const state = reactive({
  categoryData: [],
  currentIndex:1
})
onMounted(async () => {
  let $screenHeight = document.documentElement.clientHeight;
  console.log($screenHeight, '///')
  searchWrap.value.style.height = $screenHeight - 100 + 'px'
  fetch(
    'http://backend-api-01.newbee.ltd/api/v1/categories'
  ).then(data => data.json())
  .then(data => {
    // console.log(data)
    state.categoryData = data.data
  })
})

const selectMenu = (index) => {
  // console.log(index,'select Menu')
  state.currentIndex = index
}
</script>

<template>
<div class="category">
  <div>
    <header class="category-header wrap">
      <i class="nbicon nbfanhui"></i>
      <div class="header-search">
        <i class="nbicon nbSearch"></i>
        <span class="search-title">全场50元起步</span>
      </div>
      <i class="nbicon nbmore"></i>
    </header>
    <div class="search-wrap" ref="searchWrap">
      <div class="nav-side-wrapper">
        <ul class="nav-side">
          <li
            v-for="item in state.categoryData"
            :key="item.categoryId"
            @click="selectMenu(item.categoryId)"
            v-text="item.categoryName"
            :class="{'active':state.currentIndex === item.categoryId}"
          >
          </li>
        </ul>
      </div>
      <div class="search-content">
        <div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <template v-for="(category, index) in state.categoryData">
                <div class="swiper-slide" 
                  v-if="state.currentIndex === category.categoryId"
                  :key="category.categoryId"
                  >
                  <div class="category-list"
                   v-for="(products, index) in category.secondLevelCategoryVOS"
                    :key="index"
                  >
                    <p class="category-title">{{products.categoryName}}</p>
                    <div 
                      class="product-item"
                      v-for="(product, index) in products.thirdLevelCategoryVOS"
                      :key="index"
                    >
                      <img src="//s.weituibao.com/1583591077131/%E5%88%86%E7%B1%BB.png" class="product-img"/>
                      <p class="product-title" v-text="product.categoryName"></p>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="stylus">
@import './common/styl/minxin.styl';
*
  margin 0
  padding 0
  box-sizing border-box

body
  font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif 
// 模块化
.category
  .category-header
    background-color #fff
    position fixed 
    left 0
    top 0
    fj()
    wh(100%, 1.33333rem)
    line-height 1.33333rem
    padding 0 .4rem
    color #656771
    z-index 10000 
    .icon-left
      font-size .66666rem
      font-weight bold
    .header-search
      display flex
      width 80%
      height 0.56rem
      line-height .56rem
      margin .266667rem 0
      padding .13333rem 0
      color #232326
      background #F7F7F7
      border-radius .53333rem
      .nbSearch
        padding 0 .266667rem 0 .533333rem
        font-size .45333rem
      .search-title
        font-size .32rem
        color #666
        line-height .56rem
    .icon-More
        font-size .53333rem
  .search-wrap
    fj()
    width 100%
    margin-top 1.3333rem
    background-color #f8f8f8
    .nav-side-wrapper
      width 28%
      height 100%
      overflow hidden
      .nav-side
        width 100%
        background-color #f8f8f8
        li
          width 100%
          height 1.49333rem
          text-align center
          line-height 1.49333rem
          font-size 0.3733rem
          &.active
            color $primary
            background #fff
    .search-content
      width 72%
      height  100%
      padding 0 .26666rem
      background-color #fff
      overflow-y scroll
      .swiper-container
        width 100%
        .swiper-slide
         width 100%
         .category-main-img
            width 100%
          .category-list
            display: flex;
            flex-wrap: wrap;
            flex-shrink: 0;
            width: 100%;
            .catogory-title
              width: 100%;
              font-size: .453333rem;
              font-weight: 500;
              padding: .53333rem 0;
            .product-item
              width: 33.3333%;
              margin-bottom: .266667rem;
              text-align: center;
              font-size: .4rem;
              .product-img
                wh(.8rem, .8rem)

</style>
