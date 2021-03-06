//strings
var mainMenu_bar ="";
var resource_bar = "";
var menuString = "";
var gui = "";
var mainMenuString = "";
var teamMenuString = "";
var clubMenuString = "";

//GUI strings
function setDivID(setID) {
	return "<div id=\"" + setID + "\">";
}
var sectionStart = "<div class=\"row\">";
var rowStart = "<div class=\"row\">";
var colStart = "<div class=\"col\">";
var containerStart = "<div class=\"container\">";
var divStart = "<div>";
var divEnd = "</div>";
var br = "<br />";
var sectionEnd = "</div>";
var colEnd = "</div>";
var nextCol = colEnd + colStart;
var nextSection = colEnd + sectionEnd + sectionStart + colStart;
var sectionStartColStart = sectionStart + colStart;
var endSection = colEnd + sectionEnd;
var strong = "<strong>";
var strongEnd = "</strong>";
var buttonEnd = "</button>";


//Card

var cardStart = "<div class=\"card\">";
var cardStart50 = "<div class=\"card w-50\">";
function cardStart50SetID(setID) {
	return "<div class=\"card w-50\" id=\"" + setID + "\">";
}
function cardStart75SetID(setID) {
	return "<div class=\"card w-75\" id=\"" + setID + "\">";
}
function cardStart100SetID(setID) {
	return "<div class=\"card w-100\" id=\"" + setID + "\">";
}
var cardStart75 = "<div class=\"card w-75\">";
var cardHeaderStart = "<div class=\"card-header\">";
var cardBodyStart = "<div class=\"card-body\">";

//List

var listGroupStart = "<ul class=\"list-group\">";
var listGroupItem = "<li class=\"list-group-item\">";
var listGroupFlushStart = "<ul class=\"list-group list-group-flush\">";
var listGroupItemPrimary = "<li class=\"list-group-item ist-group-item-primary\">";
var listGroupItemSecondary = "<li class=\"list-group-item list-group-item-secondary\">";
var listItemEnd = "</li>";
var listGroupEnd = "</ul>";



//Dropdown

var dropdownStart = "<div class=\"dropdown\">";

function setDropdownButton(dropDownID, buttonLabel) {
	return "<button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=" 
			+ dropDownID + " data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" 
			+ buttonLabel + buttonEnd;
}

function setDropdownButtonInactive(dropDownID, buttonLabel) {
	return "<button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=" 
			+ dropDownID + " data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" disabled>" 
			+ buttonLabel + buttonEnd;
}

function setDrowpdownMenu(idString) {
	return "<div class=\"dropdown-menu\" aria-labelledby=" + idString +">";
 }
function setDropdownItemID(dropdownItemValue, dropdownItemLabel, dropDownID) {
	return "<div class=\"dropdown-item\" id=\"" + dropDownID + "\" title=\"" + dropdownItemValue + "\" onmouseup=\"mUp(this)\" >" + dropdownItemLabel + "</div>";
}



//Bootstrap Table

var tableStart = "<table class=\"table \">";
var tableStripedStart = "<table class=\"table table-striped\">";
var tableEnd = "</table>";
var tableHeadStart = "<thead>";
var tableHeadEnd = "</thead>";
var tableRowStart = "<tr>";
var tableRowPrimaryStart = "<tr class=\"table-primary\">";
var tableRowEnd = "</tr>";
var thColStart = "<th scope=\"col\">";
var thRowStart = "<th row=\"col\">";
var thEnd = "</th>";
var tBodyStart = "<tbody>";
var tBodyEnd = "</tbody>";
var tableCellStart = "<td>";
var tableCellStartSpan2 = "<td colspan=\"2\">";
var tableCellEnd = "</td>";



var trainingFocus = [

"Defensive",
"Spielstärke",
"Offensive"
];

var weekDay = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];

var leagueNames = [
	"1. Bundesliga",
	"2. Bundesliga",
	"Dritte Liga",
	"Regionalliga",
	"Oberliga",
	"Verbandsliga",
	"Landesliga",
	"Bezirksliga",
	"Kreisliga A",
	"Kreisliga B"
];
/*
	"1. Bundesliga",
	"2. Bundesliga",
	"Dritte Liga",
	"Regionalliga",
	"Oberliga",
	"Verbandsliga",
	"Verbandsklasse",
	"Landesliga",
	"Landesklasse",
	"Bezirksliga",
	"Bezirksoberliga",
	"Bezirksklasse",
	"Kreisoberliga",
	"Kreisklasse",
	"Kreisliga A",
	"Kreisliga B",
	"Kreisliga C",
	"Kreisliga D"
];
*/


		
var positionNames = [
	"Keeper",
	"Defence",
	"Midfield",
	"Attack",
	"Bench",
	"Not in the squad",
	"Injured"
];

var difficultyStrings = [
	"Easy Peasy",
	"Easy",
	"Medium",
	"Hard"
];	

/*
//none
var CHOOSENEW = -1;
//4 3 3
var F433 = "4-3-3";
//3 4 3
var F343 = "3-4-3";
//4 4 2
var F442 = "4-4-2";
//4 5 1
var F451 = "4-5-1";
//3 5 2
var F352 = "3-5-2";
//3 6 1
var F361 = "3-6-1";
*/

var formations = [
	"keine",
	"4-3-3",
	"3-4-3",
	"4-4-2",
	"4-5-1",
	"3-5-2",
	"3-6-1"
];
	