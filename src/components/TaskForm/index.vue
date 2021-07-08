<template>
  <v-card class='fill-height d-flex flex-column fill-width relative'>
    <v-row no-gutters class='px-3 mb-2'>
      <v-text-field
        v-model='title'
        placeholder='Title'
        class='elevation-0'
        hide-details
      />
    </v-row>
    <v-divider light />
    <v-row no-gutters class='fill-height'>
      <v-col cols='10' class='pl-3 pb-3'>
        <v-textarea
          v-model='description'
          placeholder='Description'
          hide-details
          no-resize
          height='100%'
        />
      </v-col>
      <v-col cols='2' class='align-center justify-center d-flex'>
        <v-btn
          icon
          fab
          color='primary'
          class='save'
          @click='onSubmit'
        >
          <v-icon color='primary'>
            mdi-send
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-btn
      small
      fab
      icon
      class='close-drawer absolute'
      @click='toggleDrawer'
    >
      <v-icon small>
        mdi-close-circle-outline
      </v-icon>
    </v-btn>
  </v-card>
</template>

<script>
  import EventBus from '@/utils/eventBus'
  import { uniqueId } from 'lodash'
  import { mapMutations } from 'vuex'

  export default {
    name: 'TaskForm',
    data() {
      return {
        title: '',
        description: ''
      }
    },
    methods: {
      ...mapMutations({
        addTask: 'ADD_TASK'
      }),
      onSubmit() {
        const task = {
          id: uniqueId('task_'),
          isComplete: false,
          title: this.title,
          description: this.description
        }
        this.addTask(task)
        this.title = ''
        this.description = ''
        this.toggleDrawer()
      },
      toggleDrawer() {
        EventBus.$emit('toggle-drawer')
      }
    }
  }
</script>

<style scoped lang='sass'>
  .close-drawer
    top: 12px
    right: 12px
</style>
