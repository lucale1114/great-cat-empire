let meowllings = 0;
// Use this for showing the value. It is formatted
let meowlingsFormatted = "0";

let robberCat = 0;
let pirateCat = 0;
let performerCat = 10;
let luckyCat = 0;
let ceoCat = 0;

// These functions are used locally. If the user goes to
// the stats screen and comes back their values should be available immediately
function saveAll() {
    localStorage.setItem("meowllings", meowllings.toString())
    localStorage.setItem("robberCat", robberCat)
    localStorage.setItem("pirateCat", pirateCat)
    localStorage.setItem("performerCat", performerCat)
    localStorage.setItem("luckyCat", luckyCat)
    localStorage.setItem("ceoCat", ceoCat)
    console.log("Saved!")

}
function loadAll() {
    meowllings = parseInt(localStorage.getItem("meowllings"));
    robberCat = localStorage.getItem("robberCat")
    pirateCat = localStorage.getItem("pirateCat")
    performerCat = localStorage.getItem("performerCat")
    luckyCat = localStorage.getItem("luckyCat")
    ceoCat = localStorage.getItem("ceoCat")
    console.log("Loaded!")
}

loadAll()

function purchaseCat(type, cost) {
	if (meowllings < cost) {
		return false;
	}
    meowllings -= cost
	switch (type) {
		case 1:
			robberCat += 1;
			break;
		case 2:
			pirateCat += 1;
			break;
		case 3:
			performerCat += 1;
			break;
		case 4:
			luckyCat += 1;
			break;
		case 5:
			ceoCat += 1;
			break;
	}
    saveAll()
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
		addMeowlling(3);
		if (i) pirateEarning(i);
	}, 1000 / pirateCat);
})(1);

(function performerEarning(i) {
	setTimeout(function () {
		if (performerCat == 0) {
			if (i) performerEarning(i);
			return;
		}
		addMeowlling(8);
		if (i) performerEarning(i);
	}, 1000 / performerCat);
})(1);

(function luckyEarning(i) {
	setTimeout(function () {
		if (luckyCat == 0) {
			if (i) luckyEarning(i);
			return;
		}
		addMeowlling(21);
		if (i) luckyEarning(i);
	}, 1000 / luckyCat);
})(1);

(function ceoEarning(i) {
	setTimeout(function () {
		if (ceoCat == 0) {
			if (i) ceoEarning(i);
			return;
		}
		addMeowlling(64);
		if (i) ceoEarning(i);
	}, 1000 / ceoCat);
})(1);

(function autoSave(i) {
	setTimeout(function () {
		saveAll()
		if (i) autoSave(i);
	},5000);
})(1);


function addMeowlling(amount) {
	meowllings += amount;
	meowlingsFormatted = String(meowllings).replace(/(.)(?=(\d{3})+$)/g, "$1,");
	console.log(meowlingsFormatted);
}
