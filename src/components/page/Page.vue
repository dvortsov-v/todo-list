<template>
    <div class="page">
        <HeaderComponent class="page__header" />
        <main class="page__main">
            <TaskList class="page__tasks"/>
        </main>
        <NavigationMenu class="page__navigation"/>
        <div v-if="newTaskMode" class="page__superimposition">
            <NewTask class="page__new"/>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '../header/HeaderComponent'
import TaskList from '../taskList/TaskList'
import NavigationMenu from '../navigationMenu/NavigationMenu'
import NewTask from '../newTask/NewTask'
import { toggleMode } from '../features/main'

export default {
  name: 'Page',
  components: {
    HeaderComponent,
    TaskList,
    NavigationMenu,
    NewTask
  },
  setup () {
    const { newTaskMode, toogleNewTaskMode } = toggleMode()
    return {
      newTaskMode,
      toogleNewTaskMode
    }
  }
}
</script>

<style scoped lang="scss">
 @import 'page';
</style>
<style lang="scss">
 @import  '~vue2-datepicker/scss/index.scss';
</style>
