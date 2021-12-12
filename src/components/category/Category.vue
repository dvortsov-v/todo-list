<template>
    <div
        :class="categoryClasses"
        class="category"
    >
        <component
            :is="categoryName"
            class="category__icon"
        />
    </div>
</template>

<script>
import Dumbell from '../../assets/icons/category/dumbell.svg?inline'
import Location from '../../assets/icons/category/location.svg?inline'
import Other from '../../assets/icons/category/other.svg?inline'
import Shopping from '../../assets/icons/category/shopping.svg?inline'
import Sport from '../../assets/icons/category/sport.svg?inline'
import Wineglass from '../../assets/icons/category/wineglass.svg?inline'
import { computed, unref } from '@vue/composition-api'
import { getCategory } from '../features/useGetCatygory'

export default {
  name: 'Category',
  components: {
    Dumbell,
    Location,
    Other,
    Shopping,
    Sport,
    Wineglass
  },
  props: {
    categoryId: {
      type: Number,
      default: 0
    }
  },
  setup (props) {
    const { category } = getCategory(props)
    const categoryName = computed(() => unref(category).name)
    const categoryClasses = computed(() => {
      return {
        [`category--type-${unref(categoryName)}`]: Boolean(unref(categoryName))
      }
    })
    return {
      categoryName,
      categoryClasses
    }
  }
}
</script>

<style scoped lang="scss">
@import 'category';
</style>
