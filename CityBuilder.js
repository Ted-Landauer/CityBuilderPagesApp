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


/*
function runPrints () {
	console.log("JSON Access Tests all data", globalData);
	
	console.log("JSON Access Tests array value", globalData["Businesses"]);
	console.log("JSON Access Tests dot access", globalData.Businesses.thorp);
	
	console.log("JSON Access Tests array value to thorp", globalData["Businesses"]["thorp"]);
	console.log("JSON Access Tests dot access to thorp", globalData.Businesses.thorp);
	
}*/



//console.log("These are the Thorp businesses", globalData.Businesses.cityType);




function selectBusinesses (cityType) {
	console.log("City(2):", cityType);
	
	let businessList = globalData.Businesses.cityType;
	
	console.log("List 1:", globalData);
	console.log("List 2:", globalData.Businesses);
	console.log("List 3:", globalData.Businesses.thorp);
	
	
	console.log("List of Businesses:", businessList);
	
	
	
	
	
}




function populateBusinessList () {
	
}

//sets the type of city that we're going to generate businesses for
function setCitySize (cityValue) {
	
	cityType = cityValue;
	console.log("City Size Value:", cityType);
	
}

function setNumberOfBusinesses (cityType) {
	console.log("City(1):", cityType);
	
	cityRoll = globalData.DieRolls.cityType.amount;
	
	totalBusinessesNeeded = Math.floor(Math.random() * cityRoll);
}
