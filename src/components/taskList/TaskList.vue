<template>
    <ul class="page__tasks task-list">
        <li v-for="task in taskList" :key="task.id" class="task-list__item">
            <Task :task="task"/>
        </li>
    </ul>
</template>

<script>
import Task from '../taskList/Task'
import { taskList } from '../../api/data'

export default {
  name: 'TaskList',
  components: {
    Task
  },
  setup () {
    return {
      taskList
    }
  }
}
</script>

<style scoped lang="scss">
@import 'styles/task-list';
</style>
