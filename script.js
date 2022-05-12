var aktivSpill = true; //starter spillet
const sirkel = "O"; //spiller
const kryss = "X"; //spiller
var spilleren = kryss; //spilleren som starter
const spillStart = []; //hvordan spillet starter

var boks = document.querySelectorAll(".spilleboks"); //henter rutene fra html dokumentet
var rad = document.querySelectorAll(".rad"); //henter radene fra html dokumentet

for (let i = 0; i < boks.length; i++) {
	boks[i].addEventListener("click", boksTrykket)
}; //går gjennom alle rutene og legger til click



function boksTrykket(event) { //tar eventet som argument
	var boksverdi = event.target.boksverdi;
	if (aktivSpill == true) { //sjekker om spillet er i gang
		if (boksverdi !== spillStart) { //hvis verdien av ruten ikke er lik spillstart
			spillStart[boksverdi] = spilleren; //spillstart vil få den nye verdien av boksen som vil være det samme som spilleren som spiller(X)
			event.target.innerHTML = spilleren; //putter spilleren inn i boksen
			spilleren = spilleren === sirkel ? kryss : sirkel; //bytter på spillerne
			return true; //returnerer at spillet er i gang
		} else {
			
			bedskjeder.innerHTML += "Denne ruten er tatt!";
			return true;
		}
	}
};
