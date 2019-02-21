<template>
<div>
        <h1>Take action</h1>
        <h2>{{ newUser }}</h2>
        <h2>{{ userCode }}</h2>
        <h2>{{ userState }}</h2>
        <button class="btn btn-primary" v-on:click="passData">{{ defaultText }}</button>
</div>
</template>

<script>
import Stats from '@/components/Stats.vue';
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {

  ...mapState([
    'userState',
    'userCode'
  ])
  },
  data () {
    return {
      userCode: '',
      defaultText: 'Activate',
      userState: '',
      newLink: ''
    }
  },
  methods: {
    passData(){
      if(this.userCode!=null){
        this.defaultText='Loading....';
        this.$http.post('https://github.com/login/oauth/access_token',{
          client_id: '475e0f2d39645416bd10',
          client_secret: 'b6d3ee325119c94c519d83a3cf27d24ece9f6a67',
          code: '2bf810d33c786e208b75'
        })
        .then(function(response){
          console.log(response);
          this.defaultText='Error';
        });
      }else{
        console.log('Not set');
      }
    },

    ...mapMutations([
      'ADD_LINKS'
    ]),
    addLink(){
      this.ADD_LINKS(this.newLink);
      this.newLink = ''
    },
    ...mapActions([
      'removeLinks'
    ]),
    removeLink(link){
      this.removeLinks(link);
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
button {
  text-align:center;
  font-weight: normal;
}
ul {
    text-align:center;
    list-style-type: none;
    padding: 0;
}
li {
  text-align:center;
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
