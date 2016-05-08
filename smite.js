// si vuole creare un programma dove 10 giocatori creeranno casualmente 2 squadre da 5 giocatori l'una.
// sceglieranno casualmente un dio a testa tra quelli disponibili
// e si affronteranno in una mappa assault
// 1- tra i giocatori ci sono ovviamente quelli bravi e quelli scarsi, quindi creare
//    una regola che dia un valore 'bravura da 1 a 3' ad ogni giocatore
// 2 - per cominciare crea un oggetto 'crea dio' dove gli passerai il nome,
//    la difficolt� del dio e la forza (10 dei a disposizione per ora)
// 3 - lo scontro verr� vinto dalla prima squadra che totalizzer� 3 punti
// 4 - un punto corrisponde ad ottenere una torre o una fenice o un minotauro
// questa � l'introduzione incasinata almento tanto quanto le mie idee ma cercher�
// di rendere il tutto pi� comprensibile e verosimile con il procedere del progetto.


// per cominciare creo l'oggetto che rappresentar� i 10 giocatori che andranno a sfidarsi nella
// mappa assaul! cominciamo con il giocatore1.

/*

var giocatore = function (){
  
};

var giocatore1 = new giocatore();

*/

// per ogni giocatore voglio che venga definito NOME, BRAVURA e DIO.
// cominciamo con il nome.

/*

var giocatore = function (){
  
    this.name;
};

var giocatore1 = new giocatore();


giocatore1.name = 'Mario';
console.log(giocatore1)
console.log(giocatore1.name);

*/

// ok funziona il primo giocatore si chiama Mario ma noi vorremmo
// che chiunque potesse giocare e quindi lasciamo spazio ai primi 10 che
// si iscrivono, quindi creo una funzione che da un nome a caso tra 20 
// possibile a ogni giocatore.


/*

var giocatore = function (){
  
    this.name = function (){
        var nomiPossibili = ['Mario' , 'Marco' , 'Max' , 'Tony' , 'Luca' ,
                     'Alberto' , 'Silvio' , 'Gennaro' , 'Michele' , 'Adrione' ,
                     'Abelardo' , 'Alvin' , 'Richard' , 'Samuel' , 'Michael' ,
                     'John' , 'Livio' , 'Damiano' , 'Daniele' , 'Umberto'];
        var numeroCasuale = Math.floor(Math.random() * 20);
        return nomiPossibili[numeroCasuale];
        
    };

};

var giocatore1 = new giocatore();

console.log(giocatore1.name());

*/

// ok ora dobbiamo aggiungere la bravura a 'per comodit� Mario'
// 1 = noob, 2 = giocatoreNellaMedia e 3 = pro.
// come tutti sappiamo le probabilit� di avere un NOOB DI M***A in squadra sono molto + elevate rispetto ad quelle di avere un pro
// quindi semplifichiamo dicendo che tirando un numero da 1 a 100, se il risultato � tra 1 e 50 sar� un noob (valore 0), tra 51 e 90 sar�
// un giocatore medio (valore 1) e tra 91 e 100 sar� un pro (valore 2).
// commento la parte fatta e procedo aggiungendo questa nuova caratteristica.


/*

var giocatore = function (){
  
    this.name = function (){
        var nomiPossibili = ['Mario' , 'Marco' , 'Max' , 'Tony' , 'Luca' ,
                     'Alberto' , 'Silvio' , 'Gennaro' , 'Michele' , 'Adrione' ,
                     'Abelardo' , 'Alvin' , 'Richard' , 'Samuel' , 'Michael' ,
                     'John' , 'Livio' , 'Damiano' , 'Daniele' , 'Umberto'];
        var numeroCasuale = Math.floor(Math.random() * 20);
        return nomiPossibili[numeroCasuale];
    };
    
    this.bravura = function (){
        var bravura;
        var numeroCasuale = Math.ceil(Math.random() * 100);
        if (numeroCasuale >= 1 && numeroCasuale <= 50){
            bravura = 0;
        } else if (numeroCasuale >= 51 && numeroCasuale<= 90){
            bravura = 1;
        } else {
            bravura = 2;
        }
        return bravura;
    };

};

var giocatore1 = new giocatore();

console.log(giocatore1.name());
console.log(giocatore1.bravura());

*/



// perfetto anche questa � fatta
// ora dovremmo definire con che dio giocar� il personaggio ma per fare questo devo
// creare i 20 dei a disposizione quindi ci fermiamo e passiamo all'argomento dei.

// mmmmm PAUSA PLEASEEEE BYE.

// procedo creando i 10 dei (per ora) che prenderanno parte allo scontro
// per ogni dio definisco complessit� (1-2-3), forza(1-2-3), difesa(1-2-3) e escape(1-2-3); 

// e il nome

var dio = function (){
    this.name;
    this.complessita;
    this.forza;
    this.difesa;
    this.escape;
};

var ymir = new dio();
ymir.name = 'Ymir';
ymir.complessita = 1;
ymir.forza = 2;
ymir.difesa = 3; 
ymir.escape = 1;


var bastet = new dio();
bastet.name = 'Bastet';
bastet.complessita = 1;
bastet.forza = 2;
bastet.difesa = 1; 
bastet.escape = 2;


var nox = new dio();
nox.name = 'Nox';
nox.complessita = 3;
nox.forza = 3;
nox.difesa = 1;
nox.escape = 2; 


var kukulkan = new dio();
kukulkan.name = 'Kukulkan';
kukulkan.complessita = 2;
kukulkan.forza = 3;
kukulkan.difesa = 1;
kukulkan.escape = 1;


var xbalanque = new dio();
xbalanque.name = 'Xbalanque';
xbalanque.complessita = 2;
xbalanque.forza = 3;
xbalanque.difesa = 1;
xbalanque.escape = 2;


var odin = new dio();
odin.name = 'Odin';
odin.complessita = 2;
odin.forza = 2;
odin.difesa = 2;
odin.escape = 2;


var neith = new dio();
neith.name = 'Neith';
neith.complessita = 1;
neith.forza = 3;
neith.difesa = 1;
neith.escape = 2;


var loki = new dio();
loki.name = 'Loki';
loki.complessita = 3;
loki.forza = 3;
loki.difesa = 1;
loki.escape = 3;


var sunWukong = new dio();
sunWukong.name = 'Sun Wukong';
sunWukong.complessita = 2;
sunWukong.forza = 1;
sunWukong.difesa = 2;
sunWukong.escape = 3;


var heBo = new dio();
heBo.name = 'He Bo';
heBo.complessita = 2;
heBo.forza = 3;
heBo.difesa = 1;
heBo.escape = 2;


var dei = [ymir, bastet, nox, kukulkan, xbalanque, odin, neith, loki, sunWukong, heBo];

// console.log(dei);

// OHH YEA ora facciamo prendere casualmente un dio al nostro giocatore.
// abbiamo il nostro array di dei quindi aggiungiamo all'oggeto giocatore la
// caratteristica divinita.


var giocatore = function (){
  
    this.name = function (){
        var nomiPossibili = ['Mario' , 'Marco' , 'Max' , 'Tony' , 'Luca' ,
                     'Alberto' , 'Silvio' , 'Gennaro' , 'Michele' , 'Adrione' ,
                     'Abelardo' , 'Alvin' , 'Richard' , 'Samuel' , 'Michael' ,
                     'John' , 'Livio' , 'Damiano' , 'Daniele' , 'Umberto'];
        var numeroCasuale = Math.floor(Math.random() * 20);
        return nomiPossibili[numeroCasuale];
    };
    
    this.bravura = function (){
        var bravura;
        var numeroCasuale = Math.ceil(Math.random() * 100);
        if (numeroCasuale >= 1 && numeroCasuale <= 50){
            bravura = 0;
        } else if (numeroCasuale >= 51 && numeroCasuale<= 90){
            bravura = 1;
        } else {
            bravura = 2;
        }
        return bravura;
    };

    this.divinita = function (){
        var numeroCasuale = Math.floor(Math.random() * 10);
        return dei[numeroCasuale];
    };
};

var giocatore1 = new giocatore();

//console.log(giocatore1.divinita());



// ottimo ora aggiungo i restanti 9 giocatori


var giocatore2 = new giocatore();
var giocatore3 = new giocatore();
var giocatore4 = new giocatore();
var giocatore5 = new giocatore();
var giocatore6 = new giocatore();
var giocatore7 = new giocatore();
var giocatore8 = new giocatore();
var giocatore9 = new giocatore();
var giocatore10 = new giocatore();


// ora bisogna definire le regole con le quali si svolger� lo scontro

// pasusa mmmm.









































