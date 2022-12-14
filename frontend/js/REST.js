import User from "./User.js";

// The if will run that said function when you're on said page. Can use this for your page
window.onload = function() {
    if (window.location.href.indexOf('userspage.html') > -1) {
        getAllUsers()
    }
  }

function getAllUsers() {
	let users = [];
	fetch("http://localhost:8080/users")
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			for (let v of data) {
				let user = new User();
				user.id = v.id;
				user.meowllings = String(v.meowllings).replace(/(.)(?=(\d{3})+$)/g, "$1,");
				user.username = v.username;
				user.password = v.password;
                user.catAmount = parseInt(v.robberCat) + parseInt(v.pirateCat) + parseInt(v.performerCat) + parseInt(v.luckyCat)
                 + parseInt(v.ceoCat) + parseInt(v.tomCat) 
				users.push(user);              
			}
            let ul = document.getElementById("users");
            let template = document.getElementsByClassName("userEntry");
            for (const v of users) {
                let duped = template.item(0).cloneNode(true);
                duped.children[0].children[1].innerText = v.username
                duped.children[1].children[0].innerText = "Meowllings: \n" + v.meowllings
                duped.children[1].children[1].innerText = "Total Cats: \n" + v.catAmount
                ul.append(duped)
            }
            ul.removeChild(template[0])
		});
}
