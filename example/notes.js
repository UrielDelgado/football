//use strict helps catch any errors in out code
"use strict"

//window.onload means whenever the window loads do this function
//function() = anonymous function serves as a self calling function and a container
//inside function() wer're calling the function dropDownItems so it creates the 
//drop down menu items when the window loads/
window.onload = function (){
    dropDownItems();
}

//creating constant variable options and giving it value of the element tag "select" in our HTML via "id"
//by making it a constant it will not change as it is getting used in th js file
const options = document.getElementById('teamOptions')


//creating a function that when is called will create our drop down items
function dropDownItems(){
//creating constant "object" array named teams
// and "object" array is a list of objects each with thier own "properties"
//Those properties may be "arrays" but dont have to be/  
    const teams = [

//inside of our "object array" we have four "object" each with three "properties": "code", "name", "place".
/* because of the loop each one of these object have been assigned the variable "team*/
        {code:"DAL", 
        name:"Dallas Cowboys", 
        place:"Arlington, TX"
        },
        
/* because of the loop each one of these object have been assigned the variable "team*/
        {code:"DEN", 
        name:"Denver Broncos", 
        place:"Denver, CO"
        },
        
/* because of the loop each one of these object have been assigned the variable "team*/
        {code:"HOU", 
        name:"Houston Texans", 
        place:"Houston, TX"
        },
        
 /* because of the loop each one of these object have been assigned the variable "team*/
       {code:"KAN", 
        name:"Kansas City Chiefs", 
        place:"Kansas City, MO"
        }
    ];
    //creat a "forEach" loop that will run when the function is called
    //go dowm for explaination
    teams.forEach(team => {
        let select = new Option(team.name)
        options.appendChild(select)
    });
}

//teams. = go into the object array "teams"
  //"."This tells the computer to go inside whatever directory is before it
  //EX: "document." = go into the "HTML" document
    //and "decument.getElementById" = look for an element inside the HTML document with this id and return it to the JS file/

//"forEach(team =>" = for each "team" loop this code
   //"team" is a variable we are assigning to the object in our "array" ( go up to the array for clarity)
   //"=>" this called an arrow similar to an "anonymous function" it just says 'run this code'

   //{ let select = new Option(team.name)
    //creatting a new Varriable named "select" and giving it the value of the property "name" inside of the object "team" (or team.name)

    /*New option takes the value 'team.name" and creates an option element inside of the HTML document*/

    //options.appendChild(select)})}; = go into the "option" or "select" element in the HTML (go back for reference) and add the "select" variable
        //adds the option element ( or child) created previuosly to the parent "options" in to the HTML
        //"append" = "add" so "appendChild = addChild"