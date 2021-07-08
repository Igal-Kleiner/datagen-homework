<template>
  <v-card flat>
    <v-list>
      <v-list-item v-for='(task, index) in tasks' :key='task.id' class='pa-0 mb-2'>
        <TaskItem :task='task' :index='index + 1' />
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex'
  import TaskItem from './TaskItem'

  export default {
    name: 'TaskList',
    components: {
      TaskItem
    },
    computed: {
      ...mapGetters({
        tasks: 'GET_TASKS'
      })
    }
  }
</script>

<style scoped>

</style>
