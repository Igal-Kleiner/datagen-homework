<template>
  <v-row v-ripple no-gutters class='d-flex task-item' @click='goToTask(task.id)'>
    <GeneralItem>
      <template v-slot:content>
        <div
          class='text-h4 font-weight-black primary--text'
          :class="{'font-italic text--disabled' : task.isComplete}"
        >
          {{ index }}
        </div>
      </template>
    </GeneralItem>
    <div
      class='item-content text-body-2 flex-grow-1 d-flex align-center pl-2'
    >
      <div
        :class="{'text-decoration-line-through font-italic text--disabled' : task.isComplete}"
      >
        {{ task.title }}
      </div>
      <v-spacer />
      <v-btn small icon class='mr-1' @click='setComplete(task.id)'>
        <v-icon>
          mdi-check
        </v-icon>
      </v-btn>
      <v-divider vertical inset />
      <v-btn small icon class='ml-1' @click='deleteItem(task.id)'>
        <v-icon>
          mdi-trash-can
        </v-icon>
      </v-btn>
    </div>
  </v-row>
</template>

<script>
  import GeneralItem from '@/components/UI/GeneralItem'
  import { mapMutations } from 'vuex'

  export default {
    name: 'TaskItem',
    props: {
      task: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    components: {
      GeneralItem
    },
    methods: {
      ...mapMutations({
        markComplete: 'SET_TASK_COMPLETE',
        deleteTask: 'DELETE_TASK'
      }),
      setComplete(id) {
        this.markComplete(id)
      },
      deleteItem(id) {
        this.deleteTask(id)
      },
      goToTask(id) {
        this.$router.push({name: 'Task', params: {id}})
      }
    }
  }
</script>

<style scoped lang='sass'>
  $border-style: 1px solid rgba(0,0,0,0.12)

  .task-item
    border-bottom: $border-style
    &:hover
      cursor: pointer
    .item-content
      border-left: $border-style
</style>
