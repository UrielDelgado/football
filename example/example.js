
"use strict"

window.onload = function (){
    dropDownItems();
}

const options = document.getElementById('teamOptions')

const teams = [
    {code:"DAL", 
    name:"Dallas Cowboys", 
    place:"Arlington, TX"
    },
    
    {code:"DEN", 
    name:"Denver Broncos", 
    place:"Denver, CO"
    },
    
    {code:"HOU", 
    name:"Houston Texans", 
    place:"Houston, TX"
    },
    
    {code:"KAN", 
    name:"Kansas City Chiefs", 
    place:"Kansas City, MO"
    }
];



function dropDownItems(){
    
    teams.forEach(team => {
        let select = new Option(team.name, team.code)
        options.appendChild(select)
    });
}

function displayTeamInfo(){
    let code = options.value;
    
    if(code == null){
         document.getElementById('teamInfo').innerText = ""
    }
    if(code == "DAL"){
         document.getElementById('teamInfo').innerText = "They are from Texas"
    }
    if(code == "DEN"){
         document.getElementById('teamInfo').innerText = "They are from Denver"
    }
    if(code == "HOU"){
         document.getElementById('teamInfo').innerText = "They are from Houston"
    }
    if(code == "KAN"){
         document.getElementById('teamInfo').innerText = "they are from Kansas"
    }
     
}