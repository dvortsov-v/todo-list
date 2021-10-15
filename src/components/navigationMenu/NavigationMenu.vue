<template>
    <nav class="navigation-menu">
        <ul
            :class="navMenuListClasses"
            class="navigation-menu__list">
            <template v-if="!selectedMode">
                <li class="navigation-menu__item">
                    <navigationMenuBtn
                        @click.native="toggleSelectedTask"
                        small
                        icon="Ok"
                        class="navigation-menu__btn"
                    />
                </li>
                <li  class="navigation-menu__item">
                    <navigationMenuBtn
                        @click.native="toggleCalendaryMode"
                        :icon="calendaryMode ?'Gamburger':  'Calendary'"
                        class="navigation-menu__btn"
                    />
                </li>
                <li class="navigation-menu__item">
                    <navigationMenuBtn
                        small
                        icon="Adding"
                        class="navigation-menu__btn"/>
                </li>
            </template>

            <template v-else>
                <li class="navigation-menu__item">
                    <navigationMenuBtn
                        @click.native="toggleSelectedTask"
                        icon="Close"
                        class="navigation-menu__btn"
                    />
                </li>
                <li class="navigation-menu__item">
                    <navigationMenuBtn icon="OkAdding" class="navigation-menu__btn"/>
                </li>
            </template>
        </ul>
    </nav>
</template>

<script>
import navigationMenuBtn from '../navigationMenu/NavigationMenuBtn'
import { toggleMode } from '../features/main'
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
      toggleCalendaryMode
    } = toggleMode()

    const navMenuListClasses = computed(() => ({
      'navigation-menu__list--state-of-choice': unref(selectedMode)
    }))

    return {
      selectedMode,
      toggleSelectedTask,
      calendaryMode,
      toggleCalendaryMode,
      navMenuListClasses
    }
  }
}
</script>

<style scoped lang="scss">
@import "styles/navigation-menu";
</style>
