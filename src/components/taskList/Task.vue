<template>
    <div :class="taskClasses" class="task">
        <Category :categoryId="task.categoryId" class="task__type" />
        <p class="task__description">
            <span class="task__text">{{ task.name }}</span>
        </p>
        <label v-if="selectedMode" class="task__done task-done">
            <input :id="task.id" type="checkbox" class="task-done__checkbox"/>
            <div class="task-done__psevdo">
                <Selected class="task-done__checked" />
            </div>
        </label>
        <div v-else class="task__date task-date">
            <div class="task-date__day">{{ task.date }}</div>
            <div class="task-date__time">{{ task.time }}</div>
        </div>
    </div>
</template>

<script>
import Category from '../category/Category'
import Selected from '../../assets/icons/selected.svg'
import { getCategory } from '../features/getCatygory'
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

    // const { standarteMode } = toggleMode()
    const { category } = getCategory(props.task)

    const taskClasses = computed(() => ({
      [`task--type-${unref(category).name}`]: unref(category).name
    }))

    return {
      selectedMode,
      category,
      taskClasses
    }
  }
}
</script>

<style scoped lang="scss">
    @import 'styles/task';
</style>
