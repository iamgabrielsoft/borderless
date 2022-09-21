import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";




const setup = () => {
    const  app = createApp(App);  
    app.use(router); 
    app.mount("#app"); 

}

setup(); 