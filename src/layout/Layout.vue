<template>
  <div class="will-body">
    <MainNav />
    <SecondNav />
    <div class="will-content" :class="{ 'will-content-scroll': !mainScroll, 'main-scrolling' : mainScrolling }">
      <header class="will-header">
        <div class="toggle-second-nav" @click="toggleSecondMenu">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconmenu" />
          </svg>
        </div>
        <div class="will-header-content" />
        <div class="will-header-avatar">
          <vs-avatar
            size="40"
            badge
            badge-color="success"
            badge-position="bottom-left"
            color="#7d33ff"
          >
            <img src="@/assets/images/user/avatar-1.png" alt="">
            <!-- <template #icons>
              <i class="iconfont iconlink" />
              <i class="iconfont icondown" />
            </template> -->
          </vs-avatar>
          <div class="header-avatar-ul">
            <ul>
              <li>
                <a>
                  <i class="iconfont iconsetting-fill" />
                  个人设置
                </a>
              </li>
              <li>
                <a @click="logout">
                  <i class="iconfont iconlogout" />
                  退出登录</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div class="will-main" :class="{ 'will-main-scroll': mainScroll }" @scroll="handleMainScroll">
        <transition name="router-fade" mode="out-in">
          <keep-alive>
            <router-view :key="key" />
          </keep-alive>
        </transition>
      </div>
    </div>
    <!-- <aside class="will-ads">…</aside> -->
  </div>
</template>

<script>
import MainNav from './mainNav/index'
import SecondNav from './secondNav/index'

export default {
  name: 'WillIndex',
  components: {
    MainNav,
    SecondNav
  },
  data: () => ({
    mainScroll: true,
    mainScrolling: false
  }),
  computed: {
    key() {
      return this.$route.path
    }
  },
  methods: {
    toggleSecondMenu() {
      this.$store.commit(
        'menu/SET_SHOW_SECOND_MENU',
        !this.$store.state.menu.showSecondMenu
      )
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    handleMainScroll() {
      var $mainScroll = document.getElementsByClassName('will-main-scroll')[0]
      if ($mainScroll.scrollHeight > $mainScroll.clientHeight && $mainScroll.scrollTop > 0) {
        this.mainScrolling = true
      } else {
        this.mainScrolling = false
      }
    }
  }
}
</script>
