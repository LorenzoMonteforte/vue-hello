const {createApp} = Vue
createApp({
    data(){
        return{
            messaggio : "Benvenuto",
            nome : "",
            cognome : "",
            srcImmagine : "img/immagine.jpg",
            colore : ""
        }
    }
}).mount('#app')