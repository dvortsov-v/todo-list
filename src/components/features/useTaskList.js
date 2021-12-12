import { computed, unref } from '@vue/composition-api'
import store from '../../store'

export const useTaskList = () => {
  const taskList = computed(() => store.getters.getTaskList)

  const addTask = (task) => {
    store.dispatch('addTask', { ...task, id: unref(taskList).length, isComplete: false })
  }

  const deleteTask = (taskId) => {
    store.dispatch('deleteTask', taskId)
  }
  const toogleCompleteAllTask = () => {
    store.dispatch('toogleCompleteAllTask')
  }

  return {
    taskList,
    addTask,
    deleteTask,
    toogleCompleteAllTask
  }
}
