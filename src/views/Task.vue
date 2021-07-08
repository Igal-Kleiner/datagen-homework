<template>
  <v-container>
    <v-toolbar flat dense>
      <v-btn small icon @click='goBack'>
        <v-icon>
          mdi-arrow-left
        </v-icon>
      </v-btn>
    </v-toolbar>
    <v-card v-if='task' flat class='mt-1'>
      <v-row
        no-gutters
        class='justify-center text-h6 font-weight-black mb-3'
      >
        {{task.title}}
      </v-row>
      <v-card-text>
        {{ task.description }}
      </v-card-text>
    </v-card>
    <v-row v-else class='justify-center error--text mt-6'>
      Such task does not exist
    </v-row>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Task',
    data() {
      return {
        task: null
      }
    },
    computed: {
      ...mapGetters({
        getTask: 'GET_TASK_BY_ID'
      })
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    },
    beforeMount() {
      this.task = this.getTask(this.$route.params.id)
    }
  }
</script>

<style scoped>

</style>
