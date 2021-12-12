<template>
    <nav class="navigation-menu">
        <ul
            :class="navMenuListClasses"
            class="navigation-menu__list">
            <template v-if="!selectedMode">
                <li class="navigation-menu__item">
                    <navigationMenuBtn
                        @click="toggleSelectedTask"
                        small
                        icon="Ok"
                        class="navigation-menu__btn"
                    />
                </li>
                <li  class="navigation-menu__item">
                    <navigationMenuBtn
                        @click="toggleCalendaryMode"
                        :icon="calendaryMode ?'Gamburger':  'Calendary'"
                        class="navigation-menu__btn"
                    />
                </li>
                <li class="navigation-menu__item">
                    <navigationMenuBtn
                        @click="toogleNewTaskMode"
                        small
                        icon="Adding"
                        class="navigation-menu__btn"/>
                </li>
            </template>

            <template v-else>
                <li class="navigation-menu__item">
                    <navigationMenuBtn
                        @click="toggleSelectedTask"
                        icon="Close"
                        class="navigation-menu__btn"
                    />
                </li>
                <li class="navigation-menu__item">
                    <navigationMenuBtn
                        @click="toogleCompleteAllTask"
                        icon="OkAdding" class="navigation-menu__btn"/>
                </li>
            </template>
        </ul>
    </nav>
</template>

<script>
import navigationMenuBtn from '../navigationMenu/NavigationMenuBtn'
import { toggleMode } from '../features/main'
import { useTaskList } from '../features/useTaskList'
import { computed, unref } from '@vue/composition-api'

export default {
  name: 'NavigationMenu',
  components: {
    navigationMenuBtn
  },
  setup () {
    const {
      selectedMode,
      toggleSelectedTask,
      calendaryMode,
      toggleCalendaryMode,
      toogleNewTaskMode
    } = toggleMode()
    const { toogleCompleteAllTask } = useTaskList()

    const navMenuListClasses = computed(() => ({
      'navigation-menu__list--state-of-choice': unref(selectedMode)
    }))

    return {
      selectedMode,
      toggleSelectedTask,
      calendaryMode,
      toggleCalendaryMode,
      navMenuListClasses,
      toogleNewTaskMode,
      toogleCompleteAllTask
    }
  }
}
</script>

<style scoped lang="scss">
@import "styles/navigation-menu";
</style>
