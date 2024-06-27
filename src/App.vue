<template>
  <Header />
  <router-view/>
  <LeftBar />
</template>

<script>
import Header from './components/Layout/Header.vue'
import LeftBar from './components/Layout/LeftBar.vue'

export default {
  name: 'App', 
  components: {
    Header,
    LeftBar,
  }
}
</script>