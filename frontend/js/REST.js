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
				user.meowllings = v.meowllings;
				user.username = v.username;
				user.password = v.password;
				users.push(user);              
			}
            let ul = document.getElementById("users");
            for (const v of users) {
                console.log(users)
                let li = document.createElement("li");
                li.textContent = v.username + " has " + v.meowllings + " Meowllings!";
                ul.appendChild(li);
            }
		});
}
