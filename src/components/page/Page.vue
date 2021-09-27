<template>
    <div class="page">
        <HeaderComponent class="page__header" />
        <main class="page__main"></main>
        <nav class="page__navigation"></nav>
    </div>
</template>

<script>
import HeaderComponent from '../header/HeaderComponent'
export default {
  name: 'Page',
  components: {
    HeaderComponent
  }
}
</script>

<style scoped lang="scss">
 @import 'page';
</style>
