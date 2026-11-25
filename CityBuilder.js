console.log("Hello, world!");



let cityList = "";
let businessesFinal = "";
let totalBusinessesNeeded = 0;

let cityType = "";
let cityRoll = 0;
let cityMax = 0;
let cityIndex = 0;

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



//build the list of businesses
function selectBusinesses () {
	console.log("City(2):", cityType);
	
	let OLDDELETELATER = globalData.Businesses[cityType];
	
	
	//console.log("List 1:", globalData);
	//console.log("List 2:", globalData.Businesses);
	//console.log("List 3:", globalData.Businesses.thorp);
	
	
	//console.log("List of Businesses:", businessList);
	
	/*
	for (let i = 0; i < cityRoll; i++) {
		randomBusiness = Math.floor(Math.random() * cityMax);
		
	}
	*/
	
	populateBusinessList();
	
	
	
	
}



//build the list of businesses needed for the size of city we're building
function populateBusinessList () {
	
	//get the main business list
	let businessList = globalData.Businesses[cityType];
	console.log("business list initial:", businessList);
	
	let activeIndex = getCityIndex(cityType);
	console.log("active index:", activeIndex);

	for (let k = 0; k < activeIndex; k++) {
		
		tempCityValue = globalData.DieRoll[k].city;
		console.log("temp city value:", tempCityValue);
		
		globalData.Businesses[tempCityValue].forEach((business) => {
			businessList.push(business);
		});
		
	}
	
	console.log("business list:", businessList);
	
}



//gets the array index of the city we're working with
function getCityIndex (selectedCity) {
	
	console.log("city index before:", cityIndex);
	
	console.log("selected city:", selectedCity);
	
	for (let j = 0; j < 8; j++) {
		if (selectedCity === "thorp") {
			console.log("thorp break");
			break;
		} else if (globalData.DieRolls[j].city === selectedCity) {			
			cityIndex = j;
			console.log("everything else break");
			
			break;
		}
	}
	
	console.log("city index after:", cityIndex);
	
	return cityIndex
}

//sets the type of city that we're going to generate businesses for
function setCitySize (cityValue) {
	
	cityType = cityValue;
	console.log("City Size Value:", cityType);
	
}

//gathers info on the number of times to roll on a city
function setNumberOfBusinesses (cityType) {
	console.log("City(1):", cityType);
	
	//get the amount of entries to randomly select
	cityRoll = globalData.DieRolls.cityType.amount;
	
	//get the max number of entries to return
	cityMax = globalData.DieRolls.cityType.max;
	
	
}
