let meowllings = 0;
// Används detta för att visa. Den är formatterade
let meowlingsFormatted = "0";

let robberCat = 0;
let pirateCat = 0;
let performerCat = 0;
let luckyCat = 0;
let ceoCat = 0;

// Rated "Not Appropriate For Serious Audiences"

(function robberEarning(i) {
	setTimeout(function () {
		if (robberCat == 0) {
			return;
		}
		addMeowlling(1);
		if (i) robberEarning(i);
	}, 1000 / robberCat);
})(1);

(function pirateEarning(i) {
	setTimeout(function () {
		if (pirateCat == 0) {
			return;
		}
		addMeowlling(3);
		if (i) pirateEarning(i);
	}, 1000 / pirateCat);
})(1);

(function performerEarning(i) {
	setTimeout(function () {
		if (performerCat == 0) {
			return;
		}
		addMeowlling(8);
		if (i) performerEarning(i);
	}, 1000 / performerCat);
})(1);

(function luckyEarning(i) {
	setTimeout(function () {
		if (luckyCat == 0) {
			return;
		}
		addMeowlling(21);
		if (i) luckyEarning(i);
	}, 1000 / luckyCat);
})(1);

(function ceoEarning(i) {
	setTimeout(function () {
		if (ceoCat == 0) {
			return;
		}
		addMeowlling(64);
		if (i) ceoEarning(i);
	}, 1000 / ceoCat);
})(1);

function addMeowlling(amount) {
	meowllings += amount;
    meowlingsFormatted = String(meowllings).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    console.log(meowlingsFormatted)
}
