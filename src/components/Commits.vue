<template>
  <div class="hello">
    <h1> {{msg}}</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Commits',
  data () {
    return {
      msg: 'Commits'
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: heavy;
}
</style>
