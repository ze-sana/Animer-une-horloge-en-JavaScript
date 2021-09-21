// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour"); // on appelle les aiguilles
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
/* Enregistre en milliseconde depuis le 1er Janvier 1970 00 :00 :00, 
elles ne seront plus valides un jour
et ce en raison du nombre limité d’octets */ 


const uneHeure = new Date(); //je crée l'objet date


//Stocker l'heure , minute , seconde  dans des varaiables

const heure = uneHeure.getHours(); //je récupère et je stocke  l'heure
const minute = uneHeure.getMinutes(); // les inutes
const seconde = uneHeure.getSeconds(); // les secondes

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

let degresHeure = ((heure / 12) * 360) + ((minute / 60) * 30); /* je divise par 12 car un tour de cadran  
    c'est 12h et je multiplie par les 360 degrés du cadran. puis je rajoute les minutes pour que la position 
    de l'aiguille s'adapte aux minutes  et 30 correpond au nombre de degrés de décallage à chaque heure 360/12=30*/
let degresMinute = ((minute / 60) * 360) + ((seconde / 60) * 6); /* je divise par 60 car 1min = 60s et
    je multiplie par les 360 degrés de l'horloge puis je rajoute les secondes pour que que l'aiguille
    s'adapte aux secondes et 30 correpond au nombre de degrés de décallage à chaque minute 360/60=6 */
let degresSeconde = ((seconde / 60) * 360); // je divise par 60 car 1h= 60min


// Déplacer les aiguilles 

function demarrerLaMontre(){
    AIGUILLEHR.style.transform = `rotate(${degresHeure += (360/12/60/60)}deg)`; // degrés heure actuelle + 0,00833333 degrés par secondes
    // méthode prise de https://www.youtube.com/watch?v=Cfh4pBng5oQ
    AIGUILLEMIN.style.transform = `rotate(${degresMinute += (360/60/60)}deg)`; // degrés minute actuelle + 0,1 degrés par secondes
    AIGUILLESEC.style.transform = `rotate(${degresSeconde += (360/60)}deg)`; // degrés seconde actuelle + 6 degrés par seconde

}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);

