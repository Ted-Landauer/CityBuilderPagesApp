console.log("Hello, world!");



let cityList = "";
let businessesFinal = [];
let totalBusinessesNeeded = 0;

let cityType = "thorp";
let cityRoll = 0;
let cityMax = 0;
let cityExtra = 0;
let cityIndex = 0;

//JSON data loading code
let globalData = {};

Promise.all([
	fetch('./CityData.json').then(r => r.json())
])
.then(([CityData]) => {
	globalData = CityData;
	console.log("All data loaded!", globalData);
	populateManualTables();
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



//select from the list of businesses
function selectBusinesses () {
	
	//test print statements
	console.log("City(2):", cityType);
	
	let randomBusinessIndex = 0;
	let randomBusiness = "";
	
	let availableBusinesses = [];
	
	if (businessesFinal.length > 0) {
		businessesFinal = [];
	}
	
	if (availableBusinesses.length > 0) {
		availableBusinesses = [];
	}
	
	availableBusinesses = populateBusinessList();
	
	for (let i = 0; i < (cityRoll + cityExtra); i++) {
		randomBusinessIndex = Math.floor(Math.random() * cityMax);
		
		businessesFinal.push(availableBusinesses[randomBusinessIndex]);
	}
	
	
	console.log("final list of businesses:", businessesFinal);
	
	
	
	
	
	
}

function populateManualTables () {
	
	const table = document.getElementById("thorpTable");
	table.innerHTML = "";
	
	globalData.Businesses.thorp.forEach((business, index) => {
		const row = document.createElement("tr");
		row.innerHTML = `
			<td>${index + 1}</td>
			<td>${business}</td>
			`;
		table.appendChild(row);
		
	});
	
	
	
}



//build the list of businesses needed for the size of city we're building
function populateBusinessList () {
	
	//get the main business list
	let businessList = globalData.Businesses[cityType];
	
	//test print statements
	console.log("business list initial:", businessList);
	
	//get the index value of the city type we're working with
	let activeIndex = getCityIndex(cityType);
	
	//test print statements
	console.log("active index:", activeIndex);
	
	setNumberOfBusinesses(cityIndex);

	//loop over all the cities smaller than the one we're working with
	for (let k = 0; k < activeIndex; k++) {
		
		//store a city's name for an iteration
		tempCityValue = globalData.DieRolls[k].city;
		
		//test print statements
		console.log("temp city value:", tempCityValue);
		
		//loop over every business in the json data for the specific city size and add each one to the full business list
		globalData.Businesses[tempCityValue].forEach((business) => {
			businessList.push(business);
		});
		
	}
	
	//test print statements
	console.log("business list:", businessList);
	
	return businessList;
	
}

//gets the array index of the city we're working with for use later
function getCityIndex (selectedCity) {
	
	//test print statements
	console.log("city index before:", cityIndex);
	console.log("selected city:", selectedCity);
	
	//loop over the list of possible city types to find the one we need
	for (let j = 0; j < 8; j++) {
		//if we're looking at a thorp, then the index should always be zero, no need to loop past that
		if (selectedCity === "thorp") {
			console.log("thorp break");
			break;
		//if we're not looking at a thorp, then we want one of the other seven types
		} else if (globalData.DieRolls[j].city === selectedCity) {			
			cityIndex = j;
			console.log("everything else break");
			
			break;
		}
	}
	
	//test print statements
	console.log("city index after:", cityIndex);
	
	return cityIndex
}

//sets the type of city that we're going to generate businesses for
function setCitySize (cityValue) {
	
	cityType = cityValue;
	console.log("City Size Value:", cityType);
	
}

//gathers info on the number of times to roll on a city
function setNumberOfBusinesses (cityIndex) {
	console.log("City(1):", cityIndex);
	console.log("City(1):", cityType);
	
	//get the amount of entries to randomly select
	cityRoll = globalData.DieRolls[cityIndex].amount;
	
	//get the max number of entries to return
	cityMax = globalData.DieRolls[cityIndex].max;
	
	//get the additional number of rolls to be accounted for
	cityExtra = globalData.DieRolls[cityIndex].additional;
	
}
