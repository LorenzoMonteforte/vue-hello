const {createApp} = Vue
createApp({
    data(){
        return{
            messaggio : "Benvenuto",
            nome : "Lorenzo",
            cognome : "Monteforte",
            srcImmagine : "img/immagine.jpg"
        }
    }
}).mount('#app')