<template>
  <v-app class='overflow-hidden'>
    <v-main>
      <router-view />
    </v-main>
    <v-bottom-navigation
      :input-value='active'
      height='86vh'
      absolute
      grow
    >
      <TaskForm />
    </v-bottom-navigation>
  </v-app>
</template>

<script>
  import EventBus from './utils/eventBus'
  import TaskForm from './components/TaskForm'

  export default {
    name: 'App',
    components: {
      TaskForm
    },
    data() {
      return {
        active: false
      }
    },
    methods: {
      toggleDrawer() {
        EventBus.$emit('toggle-drawer')
      }
    },
    mounted() {
      EventBus.$on('toggle-drawer', () => {
        this.active = !this.active
      })
    }
  }
</script>
