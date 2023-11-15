const {createApp} = Vue
createApp({
    data(){
        return{
            messaggio : "Benvenuto",
            nome : "Lorenzo",
            cognome : "Monteforte"
        }
    }
}).mount('#app')