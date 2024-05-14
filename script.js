"use strict"
let teams = [
 {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
 {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
 {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
 {code:"KAN", name:"Kansas City Chiefs", 
 plays:"Kansas City, MO"},
];

teams.forEach(team  => {
    let theOption = new Option(team.code, team.name, team.plays); 
    // ADDing the elements to the list 
    teamList.appendChild(theOption);
})

function displayTeams(){
    let selectedValue = teamList.code;
    if(selectedValue == "Dal") {
        document.getElementById("message").innerText = "Dallas Cowboys" ;
    }
    else if(selectedValue == "DEN") {
        document.getElementById("message").innerText = "Denver Broncos";
    }
    else if(selectedValue == "HOU") {
        document.getElementById("message").innerText = "Houston Texans";
    }
    else if(selectedValue == "KAN") {
        document.getElementById("message").innerText = "Kansas City Cheifs";
    }
}
