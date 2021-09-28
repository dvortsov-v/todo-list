<template>
    <div class="task">
        <div class="task__type">
            <iconSport class="task__icon"/>
        </div>
        <p class="task__description">
            <span class="task__text"> Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLore LoremLoremLoremLoremLorem Loremm</span>
        </p>
        <div class="task__date task-date">
            <div class="task-date__day">18 Jun</div>
            <div class="task-date__time">19:20</div>
        </div>
    </div>
</template>

<script>
import iconSport from '../../assets/icons/category/sport.svg'

export default {
  name: 'Task',
  components: {
    iconSport
  }
}
</script>

<style scoped lang="scss">
    @import 'styles/task';
</style>
