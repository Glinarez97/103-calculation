let yourName = "Gerardo";

if(confirm("Are you "+ yourName + "?")){
	console.log("Hello " + yourName);
}else{
	console.log("Then what is your name?");
}

let number = 100;
if(number == 99){
	console.log("The number is correct");
}else{
	console.log("The number is not correct");
}

//let password="Test12234";

let userInput=prompt("Enter the password");

if(userInput=="Test1234"){
	console.log("Welcome to the system");
}else{
	console.log("Invalid credentials");
}