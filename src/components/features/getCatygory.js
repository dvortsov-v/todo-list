import { computed } from '@vue/composition-api'
import { categoryList } from '../../api/data'

export const getCategory = (props) => {
  const category = computed(() => categoryList.find((task) => props.categoryId === task.id))
  return {
    category
  }
}
