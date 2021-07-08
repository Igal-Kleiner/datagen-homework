<template>
  <v-container class='pt-16 overflow-hidden'>
    <v-row
      no-gutters
      class='justify-center text-h6 font-weight-black mb-3'
    >
      Tasks List
    </v-row>
    <TaskList />
    <v-row no-gutters>
      <v-btn
        text
        block
        color='primary'
        class='text-capitalize justify-start'
        @click='toggleDrawer'
      >
        <GeneralItem>
          <template v-slot:content>
            <v-icon color='primary'>
              mdi-plus
            </v-icon>
          </template>
        </GeneralItem>
        <div class='d-flex justify-start pl-2'>
          Add Task
        </div>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
  import TaskList from '@/components/TaskList'
  import GeneralItem from '@/components/UI/GeneralItem'
  import EventBus from '@/utils/eventBus'

  export default {
    name: 'Home',
    components: {
      TaskList,
      GeneralItem
    },
    data() {
      return {
      }
    },
    methods: {
      toggleDrawer() {
        EventBus.$emit('toggle-drawer')
      }
    }
  }
</script>
