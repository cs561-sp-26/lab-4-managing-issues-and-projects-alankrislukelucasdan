/*************************************************************************
 * File: roundsMode.js
 * This file contains functions that support the "Rounds" mode, 
 * including the "Log Round" modal.
*************************************************************************/

/*************************************************************************
* @function writeRoundToTable
* @desc 
* Given an HTML row elemnt and the index of the round to write, write
* the round to the row element by replacing its innerHTML.
* @param row -- a reference to an HTML table row
* @param rIndex -- an integer index into userData.rounds indicating the
*        round to write to the table.
* @global GlobalUserData: The data for the current user
*************************************************************************/
function writeRoundToTable(row, rIndex) {
row.innerHTML = "<td>" + GlobalUserData.rounds[rIndex].date + "</td><td>" +
GlobalUserData.rounds[rIndex].course + "</td><td>" + 
GlobalUserData.rounds[rIndex].SGS + " (" + GlobalUserData.rounds[rIndex].strokes +
" in " + GlobalUserData.rounds[rIndex].minutes + ":" + 
GlobalUserData.rounds[rIndex].seconds + 
")</td>" +
"<td><button aria-label='View and Edit Round'" + 
"onclick='editRound(" + GlobalUserData.rounds[rIndex].roundNum + ")'><span class='fas fa-eye'>" +
"</span>&nbsp;<span class='fas fa-edit'></span></button></td>" +
"<td><button aria-label='Delete Round'" + 
"onclick='confirmDelete(" + GlobalUserData.rounds[rIndex].roundNum + ")'>" +
"<span class='fas fa-trash'></span></button></td>";
}

/*************************************************************************
* @function addRoundToTable 
* @desc 
* Adds a new round to the "Rounds" table, updating the caption
* @param roundIndex: index in userData.rounds of round to add
* @global GlobalUserData: the current user's data object
* @global GlobalRoundsTableCaption: The table's caption
*************************************************************************/
function addRoundToTable(roundIndex) {
const roundId = GlobalUserData.rounds[roundIndex].roundNum;
if (GlobalRoundsTable.rows[1].innerHTML.includes ("colspan")) {
  //empty table! Remove this row before adding new one
  GlobalRoundsTable.deleteRow(1);
}
//Write new row containing new round to table body
const thisRoundBody = GlobalRoundsTable.querySelector("tbody");
const thisRound = thisRoundBody.insertRow(0); //insert as first table row
thisRound.id = "r-" + roundId; //set unique id of  row so we can access it later
thisRound.classList.add("row-item"); //needed for sorting.
writeRoundToTable(thisRound,roundIndex);
}

/*************************************************************************
* @function updateRoundInTable 
* @desc 
* Updates an existing round in the "Rounds" table with edits made by user.
* After locating the row, calls writeRoundToTable to write data.
* @param rowIndex: index in userData.rounds of round to update
* @global userData: the current user's data object
*************************************************************************/
function updateRoundInTable(rowIndex) {
const thisRound = document.getElementById("r-" + GlobalUserData.rounds[rowIndex].roundNum);
writeRoundToTable(thisRound,rowIndex);
}