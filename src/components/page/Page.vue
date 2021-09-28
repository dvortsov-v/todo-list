<template>
    <div class="page">
        <HeaderComponent class="page__header" />
        <main class="page__main">
            <TaskList class="page__tasks"/>
        </main>
        <nav class="page__navigation"></nav>
    </div>
</template>

<script>
import HeaderComponent from '../header/HeaderComponent'
import TaskList from '../taskList/TaskList'

export default {
  name: 'Page',
  components: {
    HeaderComponent,
    TaskList
  }
}
</script>

<style scoped lang="scss">
 @import 'page';
</style>
