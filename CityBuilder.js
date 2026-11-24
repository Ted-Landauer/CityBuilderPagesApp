console.log("Hello, world!");



let cityList = "";
let businesses = "";
let totalBusinessesNeeded = "";

let globalData = {};

Promise.all([
	fetch('./CityData.json').then(r => r.json())
])
.then(([CityData]) => {
	globalData = CityData;
	console.log("All data loaded!", globalData);
})
.catch(error => console.error(`error loading JSON: ${error}`));