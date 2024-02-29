<template>
	<body>
		<div id="login">
			<h1>Seja bem-vindo</h1>
			<h2>Faça o login</h2>
			<form @submit.prevent="login">
				<input required type="email" placeholder="Insira seu e-mail" v-model="login_form.email">
				<input required type="password" placeholder="Insira sua senha" v-model="login_form.password">
				<input type="submit" value="Login" id="cadastroSubmit">
			</form>
		</div>
	</body>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
	setup () {
		const login_form = ref({});
		const store = useStore();

		const login = () => {
			store.dispatch('login', login_form.value);
		}

		return {
			login_form,
			login
		}
	}
}
</script>

<style scoped>

body{
	height: 100vh; 
  width: 100vw; 
  background-color: #9dbe87; 
  font-size: 25px;
  
}

#login{
	
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  height: auto;
  margin: 0 auto; 
  padding: 50px;
  border: none;
  border-radius: 10px;
 
}

#login form {
	display: flex;
  flex-direction: column;
  align-items: center;
}

#login input {
	width: 300px;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

#cadastroSubmit {
	width: 300px;
  padding: 15px;
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
}

#login button:hover {
	background-color: #000; 
  color: #fff; 
  border-color: #910f0f; 
}

</style>