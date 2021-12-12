<template>
    <button
        v-on="$listeners"
        :class="NavMenuBtnClasses"
        class="navigation-menu-btn">
        <component :is="btnIcon" class="navigation-menu-btn__icon"></component>
    </button>
</template>

<script>
import Calendary from '../../assets/icons/action-bar/calendary.svg?inline'
import Adding from '../../assets/icons/action-bar/adding.svg?inline'
import OkAdding from '../../assets/icons/action-bar/ok-adding.svg?inline'
import Ok from '../../assets/icons/action-bar/ok.svg?inline'
import Close from '../../assets/icons/action-bar/close.svg?inline'
import Gamburger from '../../assets/icons/action-bar/gamburger.svg?inline'
import { computed } from '@vue/composition-api'

export default {
  name: 'NavigationMenuBtn',
  components: {
    Calendary,
    Adding,
    OkAdding,
    Ok,
    Close,
    Gamburger
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const btnIcon = computed(() => props.icon)
    const NavMenuBtnClasses = computed(() => {
      return {
        [`navigation-menu-btn--${props.icon.toLowerCase()}`]: props.icon,
        'navigation-menu-btn--size-s': props.small
      }
    })
    return {
      btnIcon,
      NavMenuBtnClasses
    }
  }
}
</script>

<style scoped lang="scss">
@import 'styles/navigation-menu-btn';
</style>
