<template>
    <div id="app" class="app">
        <Page/>
    </div>
</template>

<script>
import Page from './components/page/Page'

export default {
  name: 'App',
  components: {
    Page
  }
}
</script>

<style lang="scss">
  @import './components/scss/reset';
  @import './components/scss/app';
  @import './components/scss/fonts';
</style>
