<template>
    <nav class="navigation-menu">
        <ul class="navigation-menu__list">
            <template v-if="true">
                <li class="navigation-menu__item">
                    <navigationMenuBtn small icon="Ok" class="navigation-menu__btn"/>
                </li>
                <li v-if="true" class="navigation-menu__item">
                    <navigationMenuBtn icon="Calendary" class="navigation-menu__btn"/>
                </li>
                <li v-else class="navigation-menu__item">
                    <navigationMenuBtn icon="Gamburger" class="navigation-menu__btn"/>
                </li>
                <li class="navigation-menu__item">
                    <navigationMenuBtn small icon="Adding" class="navigation-menu__btn"/>
                </li>
            </template>

            <template v-else>
                <li class="navigation-menu__item">
                    <navigationMenuBtn icon="Close" class="navigation-menu__btn"/>
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

export default {
  name: 'NavigationMenu',
  components: {
    navigationMenuBtn
  }
}
</script>

<style scoped lang="scss">
@import "styles/navigation-menu";
</style>
