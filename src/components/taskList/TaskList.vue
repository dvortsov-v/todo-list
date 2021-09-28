<template>
    <ul class="page__tasks task-list">
        <li v-for="i in 5" :key="i" class="task-list__item">
            <Task/>
        </li>
    </ul>
</template>

<script>
import Task from '../taskList/Task'

export default {
  name: 'TaskList',
  components: {
    Task
  }
}
</script>

<style scoped lang="scss">
@import 'styles/task-list';
</style>
