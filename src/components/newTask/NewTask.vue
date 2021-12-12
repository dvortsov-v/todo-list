<template>
    <div class="new-task">
        <div class="new-task__header">
            <h2 class="new-task__title">New task</h2>
            <button
                @click="toogleNewTaskMode"
                class="new-task-btn-close new-task__close">
                <Close class="new-task-btn-close__icon"/>
            </button>
        </div>
        <form action="" class="new-task__form new-task-form">
            <div class="new-task-form__icons">
                <h4 class="new-task-form__caption">Icon</h4>
                <div class="new-task-form__container">
                    <label v-for="(category, key) in categoryList" :key="key" class="new-task-form__icon new-task-form-icon">
                        <input v-model="dataForm.categoryId" type="radio" :value="category.id" name="category" class="new-task-form-icon__radio">
                        <div class="new-task-form-icon__pseudo">
                            <Category :categoryId="category.id"/>
                        </div>
                    </label>
                </div>
            </div>
            <div class="new-task-form__title">
                <h4 class="new-task-form__caption">Title</h4>
                <input v-model="dataForm.name" type="text" placeholder="Введите заголовок" name='title' class="new-task-form__name"/>
            </div>
            <div class="new-task-form__description">
                <h4 class="new-task-form__caption">Description</h4>
                <textarea v-model="dataForm.description" type="text" placeholder="Введите описание" name='description' class="new-task-form__textarea"/>
            </div>
            <div class="new-task-form__date">
                <h4 class="new-task-form__caption">Date</h4>
                <Datepicker
                    v-model="dataForm.date"
                    :clearable="false"
                    :editable="false"
                    format="DD-MMMM-YYYY"
                    name="date"
                    class="new-task-form__datepicker"
                />
            </div>
            <div class="new-task-form__time">
                <h4 class="new-task-form__caption">Time</h4>
                <Datepicker
                    v-model="dataForm.date"
                    type="time"
                    name="time"
                    format="HH:mm"
                    placeholder="Select time"
                    class="new-task-form__datepicker"
                />
            </div>
            <button
                @click.prevent="addedTaskInTaskList"
                type="submit"
                class="new-task-form__create"
            >
                Add
            </button>

        </form>
    </div>
</template>

<script>
import Close from '../../assets/icons/action-bar/close.svg?inline'
import Category from '../category/Category'
import { categoryList } from '../../api/data'
import Datepicker from 'vue2-datepicker'
import { ref } from '@vue/composition-api'
import { toggleMode } from '../features/main'
import { useTaskList } from '../features/useTaskList'

export default {
  name: 'NewTask',
  components: {
    Category,
    Close,
    Datepicker
  },
  setup () {
    const dataForm = ref({
      categoryId: 6,
      name: '',
      description: '',
      date: new Date()
    })

    const { toogleNewTaskMode } = toggleMode()
    const { addTask } = useTaskList()
    const addedTaskInTaskList = () => {
      addTask(dataForm.value)
      toogleNewTaskMode()
    }
    return {
      categoryList,
      toogleNewTaskMode,
      dataForm,
      addedTaskInTaskList
    }
  }
}
</script>

<style scoped lang="scss">
@import 'new-task';
</style>

<style lang="scss">
@import  '~vue2-datepicker/scss/index.scss';
</style>
