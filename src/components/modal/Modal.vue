<template>
    <div class="modal__mask">
        <div class="modal__container">
            <div class="modal__header modal-header">
                <div class="modal-header__type">
                    <Category :categoryId="task.categoryId"/>
                </div>
                <span class="modal-header__titile">
                    {{ task.name }}
                </span>
                <div class="modal-header__date">
                    <span class="modal-header__day">{{ taskDate }}</span>
                    <span class="modal-header__time">{{ taskTime }}</span>
                </div>
            </div>
            <div class="modal__body modal-body">
                <div class="modal-body__descriprion modal-descriprion">
                    <div class="modal-descriprion__title">
                        Description
                    </div>
                    <span class="modal-descriprion__text">
                        {{ task.description }}
                    </span>
                </div>
                <button @click="$emit('close')" class="modal-body__btn">
                    Done
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Category from '../category/Category'
import { computed } from '@vue/composition-api'

export default {
  name: 'Popup',
  components: {
    Category
  },
  props: {
    task: {
      type: Object,
      default: undefined
    }
  },
  setup (props) {
    const taskDate = computed(() => new Date(props.task.date).toLocaleString('en', { day: '2-digit', month: 'short' }))
    const taskTime = computed(() => new Date(props.task.date).toLocaleString('en', { hour: '2-digit', minute: '2-digit', hour12: false }))

    return {
      taskDate,
      taskTime
    }
  }
}
</script>

<style scoped lang="scss">
@import 'modal';
</style>
