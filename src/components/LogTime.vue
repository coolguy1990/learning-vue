<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>Date</label>

        <input type="date" class="form-control" v-model="timeEntry.date" placeholder="Date" />
      </div>
      <div class="col-sm-6">
        <label>Hours</label>
        <input type="number" class="form-control" v-model="timeEntry.totalTime" placeholder="hours" />
      </div>
    </div>

    <div class="form-group">
      <div class="col-sm-12">
        <label>Comment</label>

        <input type="text" class="form-control" v-model="timeEntry.comment" placeholder="comment">
      </div>
    </div>

    <button class="btn btn-primary" @click="save()">Save</button>
    <button v-link="'/time-entries'" class="btn btn-danger">Cancel</button>

    <hr>
  </div>
</template>

<script>
  const md5 = require('blueimp-md5');

  export default {
    data() {
      return {
        timeEntry: {
          user: {
            firstName: 'Kunal',
            lastName: 'Mangaraj',
            email: 'mangaraj.kunal@gmail.com',
            avatar: `https://1.gravatar.com/avatar/${md5('mangaraj.kunal@gmail.com')}?s=250&d=retro&r=g`,
          },
        },
      };
    },

    methods: {
      save() {
        const timeEntry = this.timeEntry;

        this.$dispatch('timeUpdate', timeEntry);
        this.timeEntry = {};
      },
    },
  };
</script>
