<template>
    <div class="task-container">
        <div @click="toogleShowMdodal" :class="taskClasses" class="task">
            <Category :categoryId="task.categoryId" class="task__type" />
            <p class="task__description">
                <span class="task__text">{{ task.name }}</span>
            </p>
            <div v-if="selectedMode" class="task__action">
                <button @click="delTask" class="task__delete task-delete">
                    <Delete class="task-delete__icon" />
                </button>
                <button @click="editCompleteTask" class="task__done task-done">
                    <Selected v-if="task.isComplete" class="task-done__checkbox" />
                </button>
            </div>
            <div v-else class="task__date task-date">
                <div class="task-date__day">{{ taskDate }}</div>
                <div class="task-date__time">{{ taskTime }}</div>
            </div>
        </div>
        <Modal
            v-if="isShowMdodal"
            :task="task"
            @close="toogleShowMdodal"
        />
    </div>
</template>

<script>
import Category from '../category/Category'
import Selected from '../../assets/icons/selected.svg?inline'
import Delete from '../../assets/icons/action-bar/delete.svg?inline'
import { getCategory } from '../features/useGetCatygory'
import { computed, unref, ref } from '@vue/composition-api'
import store from '../../store'
import { useTaskList } from '../features/useTaskList'
import Modal from '../modal/Modal'

export default {
  name: 'Task',
  components: {
    Category,
    Selected,
    Delete,
    Modal

  },
  props: {
    task: {
      type: Object,
      default: undefined
    }
  },
  setup (props) {
    const isShowMdodal = ref(false)
    const selectedMode = computed(() => store.getters.getSelectedMode)
    const { toogleCompleteTask, deleteTask } = useTaskList()
    const taskDate = computed(() => new Date(props.task.date).toLocaleString('en', { day: '2-digit', month: 'short' }))
    const taskTime = computed(() => new Date(props.task.date).toLocaleString('en', { hour: '2-digit', minute: '2-digit', hour12: false }))
    const toogleShowMdodal = () => {
      isShowMdodal.value = !isShowMdodal.value
    }
    const { category } = getCategory(props.task)

    const taskClasses = computed(() => ({
      [`task--type-${unref(category).name}`]: unref(category).name,
      'task--is-complete': props.task.isComplete
    }))

    const editCompleteTask = () => {
      if (unref(selectedMode)) {
        toogleCompleteTask(props.task.id)
      }
    }

    const delTask = () => {
      if (unref(selectedMode)) {
        deleteTask(props.task.id)
      }
    }

    return {
      selectedMode,
      category,
      taskClasses,
      taskDate,
      taskTime,
      editCompleteTask,
      delTask,
      isShowMdodal,
      toogleShowMdodal
    }
  }
}
</script>

<style scoped lang="scss">
    @import 'styles/task';
</style>
