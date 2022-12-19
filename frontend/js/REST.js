import User from "./User.js";
import Comment from "./Comment.js";

// The if will run that said function when you're on said page. Can use this for your page
window.onload = function() {
   
    if (window.location.href.indexOf('userspage.html') > -1) {
        getAllUsers()

        searchButton.onclick = function () {
            console.log("CLICKED")
            let users =[];

            fetch("http://localhost:8080/findusers?search=" + searchBy.value)
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
    }
	if (window.location.href.indexOf('comment.html') > -1) {
        getAllComments()
    }
    let song = new Audio('../resources/keyboard.mp3')
    song.play()
  }
window.onload = function () {
	if (window.location.href.indexOf("userspage.html") > -1) {
		getAllUsers();
	}
	if (window.location.href.indexOf("comment.html") > -1) {
		getAllComments();

		postComment.onclick = function () {
			let commentBox = document.getElementById("commentBox");
			let template = document.getElementsByClassName("comment");

			let duped = template.item(0).cloneNode(true);
			duped.children[0].innerText = "userman";
			duped.children[1].innerText = Date.now().toString().split("T")[0];
			duped.children[2].innerText = commentBox.value;
			document.body.append(duped);

			let xhr = new XMLHttpRequest();
			xhr.open("POST", "http://localhost:8080/addComment", true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(
				JSON.stringify({
					poster: "userman",
					content: commentBox.value,
					timePosted: Date.now(),
				})
			);

			commentBox.value = "";
		};
	}
	let song = new Audio("../resources/keyboard.mp3");
	song.loop = true;
	song.play();
};

function getAllUsers() {
	let users = [];
	fetch("http://localhost:8080/users")
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			for (let v of data) {
				let user = new User();
				user.id = v.id;
				user.meowllings = String(v.meowllings).replace(
					/(.)(?=(\d{3})+$)/g,
					"$1,"
				);
				user.username = v.username;
				user.password = v.password;
				user.catAmount =
					parseInt(v.robberCat) +
					parseInt(v.pirateCat) +
					parseInt(v.performerCat) +
					parseInt(v.luckyCat) +
					parseInt(v.ceoCat) +
					parseInt(v.tomCat);
				users.push(user);
			}
			let ul = document.getElementById("users");
			let template = document.getElementsByClassName("userEntry");
			for (const v of users) {
				let duped = template.item(0).cloneNode(true);
				duped.children[0].children[1].innerText = v.username;
				duped.children[1].children[0].innerText =
					"Meowllings: \n" + v.meowllings;
				duped.children[1].children[1].innerText =
					"Total Cats: \n" + v.catAmount;
				ul.append(duped);
			}
			ul.removeChild(template[0]);
		});
}

function getAllComments() {
	let comments = [];
	fetch("http://localhost:8080/comments")
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			for (let v of data) {
				let comment = new Comment();
				comment.id = v.id;
				comment.poster = v.poster;
				comment.content = v.content;
				comment.date = v.timePosted;

				comments.push(comment);
			}
			let template = document.getElementsByClassName("comment");
			for (const v of comments) {
				let duped = template.item(0).cloneNode(true);
				duped.children[0].innerText = v.poster;
				let dateString = v.date.split("T");
				duped.children[1].innerText =
					dateString[0] + " | " + dateString[1].split(".")[0];
				duped.children[2].innerText = v.content;
				document.body.append(duped);
			}
			document.body.removeChild(template[0]);
		});

   

    
}

