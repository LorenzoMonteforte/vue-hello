const {createApp} = Vue
createApp({
    data(){
        return{
            messaggio : "Benvenuto",
            nome : "",
            cognome : "",
            srcImmagine : "img/immagine.jpg",
            colore : "",

            x : "",
            y : "",
            risultato : ""
        }
    },
    methods : {
        calcolaSomma : function(){
            let somma = parseInt(this.x) + parseInt(this.y);
            this.risultato = somma;
        }
    }
}).mount('#app')