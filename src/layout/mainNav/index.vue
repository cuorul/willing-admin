<template>
  <div class="will-nav main-nav">
    <a href="/" class="main-nav-header">
      <img src="@/assets/logo/logo-white.png">
    </a>
    <div class="main-nav-menu">
      <ul class="main-menu-links">
        <li
          v-for="(mainMenu, index) in mainMenus"
          :key="`mainMenu-${index}`"
          :class="{ 'active-main-menu-link': activeIndex === index }"
          @click="switchMainMenu(index)"
        >
          <vs-tooltip color="#343134" not-arrow right>
            <span :class="mainMenu.icon" />
            <template #tooltip>{{ mainMenu.name }}</template>
          </vs-tooltip>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainNav',
  data: () => ({
    currentIndex: 0
  }),
  computed: {
    ...mapGetters(['activeIndex', 'mainMenus'])
  },
  methods: {
    switchMainMenu(index) {
      this.$store.commit('menu/SET_ACTIVE_INDEX', index)
      this.$store.commit('menu/SET_SHOW_SECOND_MENU', true)
    }
  }

}
</script>

<style scoped>
.main-nav {
  width: 60px;
  background-color: #1e2023;
  flex-direction: column;
}
.main-nav-header {
  display: block;
  height: 50px;
  width: 100%;
  padding: 6px 0px;
  text-align: center;
  margin-bottom: 30px;
}
.main-nav-header img {
  height: 100%;
}

.main-nav-menu {
  flex: 1;
}
.main-nav-menu .main-menu-links {
  transition: all 0.15s ease;
}
.main-nav-menu .main-menu-links li {
  height: 53px;
  line-height: 53px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  color: #7e7885;
}
.main-menu-links .iconfont {
  font-size: 20px;
}
.main-menu-links .active-main-menu-link span {
  color: #ffffff;
  /* font-weight: 700; */
}
.main-nav-menu .main-menu-links li:hover span{
  color: #ffffff;
  /* font-weight: 700; */
}

</style>
