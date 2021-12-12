import { computed } from '@vue/composition-api'
import store from '../../store'

export const toggleMode = () => {
  const selectedMode = computed(() => store.getters.getSelectedMode)
  const calendaryMode = computed(() => store.getters.getCalendaryMode)
  const newTaskMode = computed(() => store.getters.getNewTaskMode)

  const toggleSelectedTask = () => {
    store.dispatch('toogleSelectedMode')
  }

  const toggleCalendaryMode = () => {
    store.dispatch('toogleCalendaryMode')
  }

  const toogleNewTaskMode = () => {
    store.dispatch('toogleNewTaskMode')
  }

  return {
    selectedMode,
    calendaryMode,
    newTaskMode,
    toggleSelectedTask,
    toggleCalendaryMode,
    toogleNewTaskMode
  }
}
