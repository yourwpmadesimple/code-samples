var petInfo = [
  {
    "petName": "Pepe",
    "ownerName": "Reggie Tupp",
    "aptNotes": "It's time that this rabbit's post spaying surgery checkup"
  },
  {
    "petName": "Rio",
    "ownerName": "Phillip Ransu",
    "aptNotes": "Rio is up for his next round of vaccinations"
  }
];

var searchFor = "rabbit";
var resultArr = [];

// Traditional way of looping through an array of objects
for(var i=0; i < petInfo.length; i++){
  var item = petInfo[i].aptNotes.match(searchFor);
  if(item){
    resultArr.push(petInfo[i]);
  };
}
console.dir(resultArr);

var searchText ="That";
var dataFilter = item =>
  item.aptNotes.toLowerCase()
  .match(searchText.toLowerCase());

var displayData = petInfo.filter(dataFilter);
console.dir(displayData);