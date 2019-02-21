<template>
<div>
  <h1>New one</h1>
  <p>There are currently {{ countLinks }} links in thr project</p>
</div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Stats',
  computed: {
   localComputed () {

    },
  ...mapGetters([
    'countLinks'
  ])
  },
  data () {
    return {
      userCode: '',
      defaultText: 'Click to Activate',
      userState: ''
    }
  },
  methods: {
    passData(){
      if(this.userCode!=null){
        this.defaultText='Loading....';
        this.$http.post(' https://github.com/login/oauth/access_token?client_id=35f86cfa4862c6ce1307&client_secret=8e17aab358c5907db71342fc6bcf0cff032cf460&grant_type=code&code='+this.userCode+'&redirect_uri=https://localhost:8080/dashboard&state='+this.userState)
        .then(function(response){
          console.log(response);
          this.defaultText='Error';
        });
      }else{
        console.log('Not set');
      }
    }

  },
  created(){
    this.userCode=this.$route.query.code;
    this.userState=this.$route.query.state;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
