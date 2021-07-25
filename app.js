// . Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;
// var shop=[{
//    name: "juice",
//    price: "50",
//    quantity: "3",

// },{
//    name: "cookie",
//    price: "30",
//    quantity: "9",

// },{
//    name: "shirt",
//    price: "880",
//    quantity: "1",

// },{
//    name: "pen",
//    price: "100",
//    quantity: "2",

// }]
// var total=0;
// for(var i=0; i<shop.length; i++){
//    var price=shop[i].price*shop[i].quantity;
//    document.write("<h1>"+"price of "+arr[i].name+":"+price+"</h1> ")
//     total +=price
// }
// document.write("<h1>"+"total price "+total+"</h1>")


// 2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// // Also check firstName and lastName properties in object.
// var obj={
//    name: "Aqeel",
//    email: "maqeel191@gmail.com",
//    password: 242345,
//    age: 21,
//    gender: "male",
//    city: "karachi",
//    country: "pakistan",
// }
// console.log('country' in obj);
// console.log('firstName' in obj);
// console.log('lastName' in obj);




// 3. Create a constructor function with some properties. Now
// // create multiple records using the constructor.
// function Student(name,rollNo,batch,courseName){
//    this.name=name;
//    this.rollNo=rollNo;
//    this.batch=batch;
//    this.courseName=courseName;
// }
// var aqeel= new Student("Aqeel malik",2324,7,"web n app");
// var fahad= new Student("fahad",23424,7,"web n app");
// var hamza = new Student("hamza", 2354,7,"web n app")
// console.log(aqeel);
// console.log(fahad);
// console.log(hamza)


//4. Suppose you want to check population of your area, their
//educations and professions.
//Create a constructor function which holds following
//properties:
function Record2(name, gender, address, education, profession) {
	this.name = name;
	this.gender = gender;
	this.address = address;
	this.education = education;
	this.profession = profession;
};

var arr = [];

function getInputValue() {
	var inputVal1 = document.getElementById("name").value;
	var inputVal2 = document.getElementById("gender").value;
	var inputVal3 = document.getElementById("address").value;
	var inputVal4 = document.getElementById("education").value;
	var inputVal5 = document.getElementById("profession").value;
	
	var record = new Record2(inputVal1, inputVal2, inputVal3, inputVal4, inputVal5);
	arr.push(rec);
	localStorage.setItem("rec1", JSON.stringify(record));
				 
}