const devis = [
	'Non importa se si procede lentamente, l\'importante è non fermarsi.',
	'Non ci sono scorciatoie verso qualsiasi posto in cui valga la pena di andare.',
	'Sii il cambiamento che vuoi vedere nel mondo.',
	'Ricordati sempre che la tua risoluzione al successo è più importante di qualsiasi altra.',
	'Il 100% dei tentativi non fatti è perso.',
	'Il più grande pericolo per noi non è che miriamo troppo in alto e non riusciamo a raggiungere il nostro obiettivo ma che miriamo troppo in basso e lo raggiungiamo.',
	'Il miglior momento per piantare un albero era 20 anni fa. Il secondo miglior momento è ora.',
	'Non si può mai attraversare l’oceano se non si ha il coraggio di perdere di vista la riva.',
	'Tutto ciò che la mente dell\'uomo può concepire e credere, può essere realizzato.',
	'La felicità non è qualcosa di pronto all\'uso. Essa deriva dalle nostre azioni.',
	'Il segreto per andare avanti è iniziare.',
	'Le grandi cose non sono fatte d’impulso, ma attraverso una serie di piccole cose messe insieme.',
	'Dovrei. Vorrei. Potrei. Fatto.',
	'Trovate sempre il tempo di dedicarvi alle cose che vi rendono felici e vi fanno sentire vivi.',
	'Tutti hanno bisogno della bellezza così come del pane, di posti per giocare e posti per pregare, dove la natura può curare e dare forza al corpo e all’anima.',
	'Credi in te stesso e in tutto quello che sei. Sappi che c’è qualcosa dentro di te che è più grande di qualsiasi ostacolo.',
	'Se vuoi qualcosa che non hai mai avuto in vita tua, dovrai fare qualcosa che non hai mai fatto.',
	'Sii più forte delle tue scuse.',
	'Se fai qualcosa per dovere, ti esaurirà, ma se fai qualcosa per amore, ti motiverà.',
	'Molti si lasciano sfuggire le opportunità, perché sono vestite da operai e sembrano faticose.',
	'Se non riesci a smettere di pensarci, non smettere lavorarci su.',
	'Ricorda perché hai iniziato a studiare l’italiano.',
	'Abbi fiducia nel processo.',
	'C’est toujours le bon moment.',
	'Fais toujours de ton mieux même si personne ne regarde.',
	'Votre source de motivation est l’ingrédient qui peut faire toute la différence.',
	'Vouloir c’est pouvoir.',
	'Vous n’êtes pas encore arrivés mais vous êtes plus proche qu’hier.',
	'Peu importe la lenteur à laquelle vous allez tant que vous n\'arrêtez pas.',
	'Il n\'y a pas de raccourci pour aller là où ça vaut la peine d\'aller.',
	'Soyez le changement que vous voulez voir dans ce monde.',
	'Gardez toujours à l\'esprit que votre propre décision de réussir est plus importante que n\'importe quoi d\'autre.',
	'100% des choses qu’on ne tente pas échouent.',
	'Le plus grand danger pour la plupart d’entre nous n’est pas que notre but soit trop élevé et que nous le manquions, mais qu’il soit trop bas et que nous l’atteignons.',
	'Le meilleur moment pour planter un arbre était il y a 20 ans, le deuxième meilleur moment c\'est maintenant.',
	'Tout ce que l’esprit conçoit et croit, il peut l’obtenir.',
	'Le bonheur n\'est pas quelque chose de prêt à l\'emploi. Il vient de vos propres actions.',
	'Tu ne traverseras jamais l’océan si tu as peur de perdre de vue le rivage.'
];

let quit = document.getElementById('quit');
let photo = document.getElementById('pic');
const buttonDevis = document.getElementById('button-devis');
const urls = []
for (let i = 0; i <= 32; i++) {
	urls.push('Media/Photo/Photo' + (i + 1)+ '.jpg');
}
	console.log(urls)




	buttonDevis.addEventListener("click", function() {
		let index = getRandomIntInclusive(0, 37);
		let run = getRandomIntInclusive (0, 32);
		quit.innerHTML = devis[index]
		photo.src = urls[run]
	});

	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max -min + 1)) + min;
	}
	console.log(photo);



let numberToFind = 60 + 11;
var data = document.getElementById("fun-easy");
let rep = document.getElementById("answer");
let numberOfTries = 1;


document.addEventListener("submit", function(event) {
event.preventDefault();
let userInput = document.getElementById("jeu-play").value
	;



if (userInput == numberToFind) {
		rep.innerHTML = "<p> Bravo, vous avez trouvé en "
		 + numberOfTries + " essais</p>";

} else if (userInput < numberToFind) {
    	writeOnPage ('C\'est plus')
    	numberOfTries++;

} else {
    	writeOnPage ('C\'est moins')
    	numberOfTries++;
};
});

function writeOnPage(string) {
  	rep.innerHTML = "<p>" + string + "</p>"
};	