"use strict"

window.onload = function (){
    dropDownItems();

    const options = document.getElementById('teamOptions');
    options.onchange = clearText;
}

const options = document.getElementById('teamOptions');

const teams = [
    {code:"DAL", 
    name:"Dallas Cowboys", 
    place:"Arlington, TX",
    url: 'https://m.media-amazon.com/images/I/81mA5abySDL.jpg' },

    {code:"DEN", 
    name:"Denver Broncos", 
    place:"Denver, CO",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkScO8fomBrHMkMquBkcKSLUX794gAcn4HeQ&s" },

    {code:"HOU",
    name:"Houston Texans", 
    place:"Houston, TX",
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5f2uEIdmBomgcKhURg6qFm8KmhjlAEuQBRA&s' },


    {code:"KAN", 
    name:"Kansas City Chiefs", 
    place:"Kansas City, MO",
    url: "https://m.media-amazon.com/images/I/71+URtzKIjL._AC_UF894,1000_QL80_.jpg"}
];

function dropDownItems(){

    teams.forEach(team => {
        let select = new Option(team.name, team.code);
        options.appendChild(select)
    });
}

function displayTeamInfo(){
    let code = options.value;

    let teamInfoElement = document.getElementById('teamInfo');
    let teamImageElement = document.getElementById('teamImage');
    let selectedTeam = teams.find(team => team.code === code);

    if (code == null) {
        teamInfoElement.innerText = 'test';
    } 
    
    // else {
    //     if (selectedTeam) {
    //         let selectedTeam = teams.find(team => team.code === code);
    //         teamInfoElement.innerText = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.place}`;
    //         teamImageElement.innerHTML = `<img src="${selectedTeam.url}" alt="${selectedTeam.name}">`;
    //     }
    // }

    // else if (selectedTeam){
    //     teamImageElement.innerHTML = `<img src="${selectedTeam.url}" alt="${selectedTeam.name}">`
    //     teamInfoElement.innerHTML = ` You selected the Dallas Cowboys (DAL) who play in Arlington, TX`;
    // }
    // return false;

    //Info(selectedTeam) = this is the shortest which takes away all of the else if

    else if(code == "DAL"){
        teamImageElement.innerHTML = `<img src="${selectedTeam.url}" alt="${selectedTeam.name}">`
        
        teamInfoElement.innerHTML = ` You selected the Dallas Cowboys (DAL) who play in Arlington, TX`;
    }
    else if(code == "DEN"){
        teamImageElement.innerHTML = `<img src="${selectedTeam.url}" alt="${selectedTeam.name}">`

        teamInfoElement.innerHTML = 'You selected the Denver Broncos (DEN) who play in Denver, CO';
    }
    else if(code == "HOU"){
        teamImageElement.innerHTML = `<img src="${selectedTeam.url}" alt="${selectedTeam.name}">`

        teamInfoElement.innerHTML = 'You selected the Houston Texans (HOU) who play in Houston, TX ';
    }
    else if(code == "KAN"){
        teamImageElement.innerHTML = `<img src="${selectedTeam.url}" alt="${selectedTeam.name}">`

        teamInfoElement.innerHTML = 'You selected the Kansas City Chiefs (KAN) who play in Kansas City, MO';
    }
    return false;
} 

function clearText(){
let code = options.value;

if(code == ""){
    document.getElementById('teamInfo').innerText = '';
}
}
