console.log("Hello, world!");



let cityList = "";
let businesses = "";
let totalBusinessesNeeded = 0;

let cityType = "thorp";
let cityRoll = 0;

let globalData = {};

Promise.all([
	fetch('./CityData.json').then(r => r.json())
])
.then(([CityData]) => {
	globalData = CityData;
	console.log("All data loaded!", globalData);
})
.catch(error => console.error(`error loading JSON: ${error}`));

//console.log("These are the available businesses", globalData{"Businesses"});



console.log("JSON Access Tests all data", globalData);
console.log("JSON Access Tests array index", globalData[0]);
console.log("JSON Access Tests array value", globalData["Businesses"]);
console.log("JSON Access Tests dot access string", globalData."Businesses");
console.log("JSON Access Tests dot access", globalData.Businesses);
console.log("JSON Access Tests object value", globalData{"Businesses"});



//console.log("These are the Thorp businesses", globalData.Businesses.cityType);




function selectBusinesses (cityType) {
	console.log("City(2):", cityType);
	
	let businessList = globalData.cityType;
	
	
	
}




function populateBusinessList () {
	
}

//sets the type of city that we're going to generate businesses for
function setCitySize (cityValue) {
	
	cityType = cityValue;
	
}

function setNumberOfBusinesses (cityType) {
	console.log("City(1):", cityType);
	
	cityRoll = globalData.DieRolls.cityType.amount
	
	totalBusinessesNeeded = Math.floor(Math.random() * cityRoll);
}
