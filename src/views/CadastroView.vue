<template>
	<body>
		<div id="login">
			<h1>Realize seu cadastro</h1>
				<form @submit.prevent="cadastro">
				<input required type="email" placeholder="Insira seu e-mail" v-model="cadastro_form.email">
				<input required type="password" placeholder="Insira sua senha" v-model="cadastro_form.password">
				<input type="submit" value="Cadastrar" id="cadastroSubmit">
			</form>
		</div>
	</body>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
	setup () {
		const cadastro_form = ref({});
		const store = useStore();

		const cadastro = () => {
			store.dispatch('register', cadastro_form.value);
		}

		return {
			cadastro_form,
			cadastro
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

#cadastroSubmit:hover {
	background-color: #000; 
  color: #fff; 
  border-color: #910f0f; 
}

</style>