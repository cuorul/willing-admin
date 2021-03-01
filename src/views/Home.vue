<template>
  <div class="home">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    </vs-col>
    </vs-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
