<template>
    <div :class="taskClasses" class="task">
        <Category :categoryId="task.categoryId" class="task__type" />
        <p class="task__description">
            <span class="task__text">{{ task.name }}</span>
        </p>
        <label v-if="selectedMode" class="task__done task-done">
            <input :id="task.id" type="checkbox" class="task-done__checkbox"/>
            <div class="task-done__psevdo">
                <Selected v-if="task.isComplete" class="task-done__checked" />
            </div>
        </label>
        <div v-else class="task__date task-date">
            <div class="task-date__day">{{ taskDate }}</div>
            <div class="task-date__time">{{ taskTime }}</div>
        </div>
    </div>
</template>

<script>
import Category from '../category/Category'
import Selected from '../../assets/icons/selected.svg?inline'
import { getCategory } from '../features/useGetCatygory'
import { computed, unref } from '@vue/composition-api'
import store from '../../store'

export default {
  name: 'Task',
  components: {
    Category,
    Selected
  },
  props: {
    task: {
      type: Object,
      default: undefined
    }
  },
  setup (props) {
    const selectedMode = computed(() => store.getters.getSelectedMode)

    const taskDate = computed(() => props.task.date.toLocaleString('en', { day: '2-digit', month: 'short' }))
    const taskTime = computed(() => props.task.date.toLocaleString('en', { hour: '2-digit', minute: '2-digit', hour12: false }))

    const { category } = getCategory(props.task)

    const taskClasses = computed(() => ({
      [`task--type-${unref(category).name}`]: unref(category).name,
      'task--is-complete': props.task.isComplete
    }))

    return {
      selectedMode,
      category,
      taskClasses,
      taskDate,
      taskTime
    }
  }
}
</script>

<style scoped lang="scss">
    @import 'styles/task';
</style>
