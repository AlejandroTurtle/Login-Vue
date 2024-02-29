import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = ({
    apiKey: "AIzaSyA6RUOtecKrSAkKK-ch6RBuoBz-WQRAfqs",
    authDomain: "login-vue-9011e.firebaseapp.com",
    projectId: "login-vue-9011e",
    storageBucket: "login-vue-9011e.appspot.com",
    messagingSenderId: "985116373650",
    appId: "1:985116373650:web:4ea804fbb9db35b9a82c4b",
  })

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }