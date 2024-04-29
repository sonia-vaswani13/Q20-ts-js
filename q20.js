//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
//create an array of famous mountains
var mountains = [
    "Mount Everest",
    "K2",
    "Kangchenjunga",
    "Lhotse",
    "Makalu",
    "Cho Oyu",
    "Dhaulagiri",
    "Manaslu",
    "Nanga Parbat",
    "Annapurna"
];
//print the list of mountains
console.log("list of famous mountains:");
mountains.forEach(function (mountains, index) {
    console.log("".concat(index + 1, ". ").concat(mountains));
});
