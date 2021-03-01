<template>
  <div
    class="will-nav second-nav"
    :class="{ 'second-nav-active': showSecondMenu }"
  >
    <vs-sidebar
      v-model="active"
      absolute
      square
      open
    >
      <template #logo>
        <!-- ...img logo -->
        <a href="#/" class="home-link router-link-active">Willing Admin</a>
      </template>
      <!-- menu -->
      <template v-for="(secondMenu, index) in secondMenus">
        <vs-sidebar-group v-if="secondMenu.type === 'arrow'" :key="`secondMenu-${index}`">
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <i :class="secondMenu.icon" />
              </template>
              {{ secondMenu.name }}
            </vs-sidebar-item>
          </template>
          <template>
            <vs-sidebar-item
              v-for="(childMenu, i) in secondMenu.childMenu"
              :id="childMenu.id"
              :key="`childMenu-${i}`"
              :to="childMenu.url"
            >
              <template #icon>
                <i :class="childMenu.icon" />
              </template>
              {{ childMenu.name }}
            </vs-sidebar-item>
          </template>
        </vs-sidebar-group>
        <vs-sidebar-item
          v-else
          :id="secondMenu.id"
          :key="`secondMenu-${index}`"
          :to="secondMenu.url"
        >
          <template #icon>
            <i :class="secondMenu.icon" />
          </template>
          {{ secondMenu.name }}
        </vs-sidebar-item>
      </template>
    </vs-sidebar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SecondNav',
  props: {
    secondNavActive: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    active: 'home',
    hideBackground: true
  }),
  computed: {
    ...mapGetters(['secondMenus', 'showSecondMenu'])
  }
}
</script>

