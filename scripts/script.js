console.log("script");

// creating string var
let myName = "samantha";

// creating number var

//creating boolean var
let isProfessor=true
let isStudent=false


// example number 2 
let num1=10;
let num2=20;

let sum = num1 + num2;
let division = num2/num1;
let mult = num1 * num2;

console.log(sum);
console.log(division);
console.log(mult);

// my variable

let myLastname = "Linarez";
let mySize = 34;
let myAge = 26;
let price = 99.75;
let websiteName = "Youtube";
let videoName = "Gerardo's video";
let searchBar = "Search";
let categories = "fitness";
let homeButton = "Home";
let profile = "Gerardo's profile";
let subscribers = 100;
let history = "previous videos";
let url = "www.fitg.com";
let profileImage = "select imgage";
let videoDescription = "select video";
let views = 100;
let likes = 100;
let comments = "drop a comment";
let recommendation = "you may also like";
let notifications = true;


console.log(myLastname);
console.log(mySize);

// template string
document.write("My last name is " + myLastname + ", I am " + myAge + " years old and my size is " + mySize );

document.write(`
<p>Name: ${myLastname}</p>
<p>${mySize}</p>
<p>Age: ${myAge}</p>
<p> Price is ${price}</p>
<p>Name of the video:${videoName}</p>
<p>Find a video:${searchBar}</p>
<p>Different videos: ${categories}</p>
<p>Return button: ${homeButton}</p>
<p>Your account: ${profile}</p>
<p>Whos following you: ${subscribers}</p>
<p>Previous videos: ${history}</p>
<p>Website name: ${url}</p>
<p>Your image: ${profileImage}</p>
<p>What the video is about: ${videoDescription}</p>
<p>Your videos views: ${views}</p>
<p>Who liked your video: ${likes}</p>
<p>Your videos comments: ${comments}</p>
<p>You may also like: ${recommendation}</p>
<p>Your notifications: ${notifications}</p>

`);