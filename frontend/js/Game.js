let meowllings = 0;
// Use this for showing the value. It is formatted
let meowllingsFormatted = "0";

// To add a new cat here, add a variable everywhere appropriate (saveall, below here, loadall)
// In purchase cat, add your type and price
// Then copy and paste one of the timeout methods and replace the cat with your own, and change add meowlling to how much you want it to earn

let robberCat = 0;
let pirateCat = 0;
let performerCat = 0;
let luckyCat = 0;
let ceoCat = 0;
let tomCat = 0;
let mafiaCat = 0;

// These functions are used locally. If the user goes to
// the stats screen and comes back their values should be available immediately

// To control that the user is logged in we can save their username to localStorage and save their session that way for all the pages. We'd only need to load the data once anyway.
// Obviously a completely terrible idea if we were to make something real but hey it works here!

function clickedCat() {
	let catclick = new Audio('../resources/catclick.wav')
	catclick.volume = 0.25
	catclick.play()
	addMeowlling(1)
}
function saveAll() {
	localStorage.setItem("meowllings", meowllings);
	localStorage.setItem("robberCat", robberCat);
	localStorage.setItem("pirateCat", pirateCat);
	localStorage.setItem("performerCat", performerCat);
	localStorage.setItem("luckyCat", luckyCat);
	localStorage.setItem("ceoCat", ceoCat);
	localStorage.setItem("tomCat", tomCat);
	localStorage.setItem("mafiaCat", mafiaCat);
	console.log("Saved!");
}
function loadAll() {
	meowllings = parseInt(localStorage.getItem("meowllings"));
	robberCat = parseInt(localStorage.getItem("robberCat"));
	pirateCat = parseInt(localStorage.getItem("pirateCat"));
	performerCat = parseInt(localStorage.getItem("performerCat"));
	luckyCat = parseInt(localStorage.getItem("luckyCat"));
	ceoCat = parseInt(localStorage.getItem("ceoCat"));
	tomCat = parseInt(localStorage.getItem("tomCat"));
	mafiaCat = parseInt(localStorage.getItem("mafiaCat"))

	robberAmount.innerText = "Robber Cat: " + robberCat.toString();
	pirateAmount.innerText = "Pirate Cat: " + pirateCat.toString();
	performerAmount.innerText = "Performer Cat: " + performerCat.toString();
	luckyAmount.innerText = "Lucky Cat: " + luckyCat.toString();
	ceoAmount.innerText = "CEO Cat: " + ceoCat.toString();
	tomAmount.innerText = "Tomcat: " + tomCat.toString();
	mafiaAmount.innerText = "Mafia Cat: "  + mafiaCat.toString();
	totalMeowllings.innerText = meowllings.toString();
	console.log("Loaded!");
}

if (localStorage.getItem("meowllings") !== null) {
	loadAll();
}

function purchaseCat(type, cost) {
	if (meowllings < cost) {
		return false;
	}
	let buySound = new Audio('../resources/catbuy.mp3')
	buySound.play()
	meowllings -= cost;
	switch (type) {
		case 1:
			robberCat += 1;
			robberAmount.innerText = "Robber Cat: " + robberCat.toString();
			break;
		case 2:
			pirateCat += 1;
			pirateAmount.innerText = "Pirate Cat: " + pirateCat.toString();
			break;
		case 3:
			performerCat += 1;
			performerAmount.innerText = "Performer Cat: " + performerCat.toString();
			break;
		case 4:
			luckyCat += 1;
			luckyAmount.innerText = "Lucky Cat: " + luckyCat.toString();
			break;
		case 5:
			ceoCat += 1;
            ceoAmount.innerText = "CEO Cat: " + ceoCat.toString();
			break;
        case 6:
			tomCat += 1;
            tomAmount.innerText = "Tomcat: " + tomCat.toString();
			break;
		case 7:
			mafiaCat += 1;
			mafiaAmount.innerText = "Mafia Cat: " + mafiaCat.toString();
			break;
	}
	saveAll();
	return true;
}

// Rated "Not Appropriate For Serious Audiences"

(function robberEarning(i) {
	setTimeout(function () {
		if (robberCat == 0) {
			if (i) robberEarning(i);
			return;
		}
		addMeowlling(1);
		if (i) robberEarning(i);
	}, 1000 / robberCat);
})(1);

(function pirateEarning(i) {
	setTimeout(function () {
		if (pirateCat == 0) {
			if (i) pirateEarning(i);
			return;
		}
		addMeowlling(6);
		if (i) pirateEarning(i);
	}, 1000 / pirateCat);
})(1);

(function performerEarning(i) {
	setTimeout(function () {
		if (performerCat == 0) {
			if (i) performerEarning(i);
			return;
		}
		addMeowlling(18);
		if (i) performerEarning(i);
	}, 1000 / performerCat);
})(1);

(function luckyEarning(i) {
	setTimeout(function () {
		if (luckyCat == 0) {
			if (i) luckyEarning(i);
			return;
		}
		addMeowlling(77);
		if (i) luckyEarning(i);
	}, 1000 / luckyCat);
})(1);

(function ceoEarning(i) {
	setTimeout(function () {
		if (ceoCat == 0) {
			if (i) ceoEarning(i);
			return;
		}
		addMeowlling(254);
		if (i) ceoEarning(i);
	}, 1000 / ceoCat);
})(1);

(function tomEarning(i) {
	setTimeout(function () {
		if (tomCat == 0) {
			if (i) tomEarning(i);
			return;
		}
		addMeowlling(19980);
		if (i) tomEarning(i);
	}, 1000 / tomCat);
})(1);

(function mafiaEarning(i) {
	setTimeout(function () {
		if (mafiaCat == 0) {
			if (i) mafiaEarning(i);
			return;
		}
		addMeowlling(780);
		if (i) mafiaEarning(i);
	}, 1000 / mafiaCat);
})(1);

(function autoSave(i) {
	setTimeout(function () {
		saveAll();
		if (i) autoSave(i);
	}, 1000);
})(1);

function addMeowlling(amount) {
	meowllings += amount;
	meowlingsFormatted = String(meowllings).replace(/(.)(?=(\d{3})+$)/g, "$1,");
	console.log(meowlingsFormatted);
	console.log("you have " + meowlingsFormatted + " meowllings!")
	document.getElementById("totalMeowllings").innerHTML = meowlingsFormatted;
	meowllingsFormatted = String(meowllings).replace(/(.)(?=(\d{3})+$)/g, "$1,");
	console.log(meowllingsFormatted);
	console.log("you have " + meowllings + " meowllings!")
	document.getElementById("totalMeowllings").innerHTML = meowllingsFormatted;
}
