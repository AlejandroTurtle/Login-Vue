<template>
    <body>
        <div>
         
            <RouterLink  to="/cadastro">Cadastrar</RouterLink>
            <RouterLink to="/">Login</RouterLink>
          
        </div>
         

    <div v-if="$store.state.user">
      <RouterLink to="/Bemvindo">Home</RouterLink>  |
      <RouterLink to="/about">About</RouterLink>
      <button @click="$store.dispatch('logout')">Logout</button>
    </div>
    </body>
  
</template>



<script>
import { onBeforeMount } from 'vue';
import { useStore} from 'vuex'

export default{
 name: "Navbar",
 setup() {
  const store = useStore()

  onBeforeMount(() => {
    store.dispatch('fetchUser')
  })
}
}
</script>

<style scoped>
body{
    background-color: #9dbe87;
    color: white;
}

div {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
}

div a {
  display: inline-block;
  padding: 0 1rem;
  color: blue;
  text-decoration: none;
  border-left: 1px solid var(--color-border);
}

div a:hover{
    color: white;
}
</style>