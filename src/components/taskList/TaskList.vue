<template>
    <ul class="page__tasks task-list">
        <li v-for="task in taskList" :key="task.id" class="task-list__item">
            <Task :task="task"/>
        </li>
    </ul>
</template>

<script>
import Task from '../taskList/Task'
import { computed, unref } from '@vue/composition-api'
import store from '../../store'

export default {
  name: 'TaskList',
  components: {
    Task
  },
  setup () {
    const taskList = computed(() => store.getters.getTaskList)
    console.log(unref(taskList))
    return {
      taskList
    }
  }
}
</script>

<style scoped lang="scss">
@import 'styles/task-list';
</style>
