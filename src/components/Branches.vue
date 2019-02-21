<template>
  <div class="hello">
    <h1> {{msg}}</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Branches',
  data () {
    return {
      client_id: '',
      client_secret: '',
      msg: 'Branches'
    }
  },
  methods: {
    
  },
  mounted: {
    loadData(){
      this.welcome='loaded';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: heavy;
}
</style>