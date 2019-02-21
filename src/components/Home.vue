<template>
  <div class="home">
    <h1>Github Manager
    <div class="container">
      <button type="submit" class="btn btn-primary-outline" id="login" @click="login">Login With Your Github Account</button>
      <a v-bind:href="urlTo"><p class="m-4 p-4" v-text="response"></p></a>
    </div>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      response: '',
      urlTo: '',
    }
  },
  methods: {
    accessGithub(){
      let that=this;
      that.response='generating link to github...'
      that.$http.get('https://github.com/login/oauth/authorize?client_id=475e0f2d39645416bd10&redirect_uri=http://localhost:8080/dashboard&state=1234abcd')
      .then(function(response){
        that.urlTo=response.url;
        that.response= "Click here to login to github";
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{ 
    font-weight: bold;
    color:darkslateblue;
    text-align:center;
    margin-top:10%;
    }
</style>
