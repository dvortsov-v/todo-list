<template>
    <div class="page">
        <HeaderComponent class="page__header" />
        <main class="page__main">
            <TaskList class="page__tasks"/>
        </main>
        <NavigationMenu class="page__navigation"/>
    </div>
</template>

<script>
import HeaderComponent from '../header/HeaderComponent'
import TaskList from '../taskList/TaskList'
import NavigationMenu from '../navigationMenu/NavigationMenu'

export default {
  name: 'Page',
  components: {
    HeaderComponent,
    TaskList,
    NavigationMenu
  }
}
</script>

<style scoped lang="scss">
 @import 'page';
</style>
