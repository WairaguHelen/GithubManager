<template>
  <div class="container">
     <div class="row">
       <div class="col-md-10">
         <div class="card">
           <div class="card-header">
             <h1>User Details</h1>
           </div>
           <div class="card-body">
             <div class="row">
               <div class="col-md-14">
                 <div class="d-flex flex-row">
                   <p>User Name</p>
                    <p class="ml-4">:</p>
                    <p class="ml-4">{{ userName }}</p>
                 </div>
                 <div class="d-flex flex-row">
                   <p>Email</p>
                    <p class="ml-4">:</p>
                    <p class="ml-4">{{ email }}</p>
                 </div>
                 <div class="d-flex flex-row">
                   <p>Repos</p>
                    <p class="ml-4">:</p>
                    <p class="ml-4">{{ repos }}</p>
                 </div>
                 <div class="d-flex flex-row">
                   <p>Followers</p>
                    <p class="ml-4">:</p>
                    <p class="ml-4">{{ followers }}</p>
                 </div>
                 <div class="d-flex flex-row">
                   <p>Following</p>
                    <p class="ml-4">:</p>
                    <p class="ml-4">{{ following }}</p>
                 </div>
                 <div class="d-flex flex-row">
                   <p>Url</p>
                    <p class="ml-4">:</p>
                    <p class="ml-4"><a v-bind:href="html_url">{{ url }}</a></p>
                 </div>
                 <div class="d-flex flex-row">
                   <p>Type</p>
                    <p class="ml-4">:</p>
                    <p class="ml-4">{{ type }}</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Repos',
  data () {
    return {
     condition: '',
     userName: '',
     email: '',
     repos: '',
     followers: '',
     following: '',
     url: '',
     type: '',
     htm_url: ''
    }
  },
  methods: {
    
  },
  created(){
      this.condition='Loading details...'
      this.$http.get('https://api.github.com/user?access_token=a3cdca0232c2df995058fe24b8bd92dde91a98c5')
      .then(function(response){
        this.condition='';
        this.url=response.body.url;
        this.userName=response.body.login;
        this.email=response.body.email;
        this.repos=response.body.public_repos;
        this.followers=response.body.followers;
        this.following=response.body.following;
        this.type=response.body.type;
        this.html_url=response.body.html_url;
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  text-align: center;
  font-weight: bold;
}
p {
  text-align: center;
  font-weight: bold;
}
</style>