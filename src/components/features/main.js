import { computed } from '@vue/composition-api'
import store from '../../store'

export const toggleMode = () => {
  const selectedMode = computed(() => store.getters.getSelectedMode)
  const calendaryMode = computed(() => store.getters.getCalendaryMode)

  const toggleSelectedTask = () => {
    store.dispatch('toogleSelectedMode')
  }

  const toggleCalendaryMode = () => {
    store.dispatch('toogleCalendaryMode')
  }

  return {
    selectedMode,
    calendaryMode,
    toggleSelectedTask,
    toggleCalendaryMode
  }
}
