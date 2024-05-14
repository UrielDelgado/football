"use strict"

const frijolitosDelFuturo = [
    {name: "Jesús Mimila", age: "19", score: "100", hobbies: ['cooking', 'soccer', 'boxing', 'basketball', 'music', 'reading', 'coloring inside the lines', 'crying lol']},
    {name: "Uriel Dlegado", age: "20", score: "100", hobbies: ['Reading Manga', 'Going to the gym', 'video games', 'waisting my life scrolling through insta']},
    {name: "Rene Banuelos", age: "24", score: "100", hobbies: ["basketball", "boxing", "being outdoors", "watching good sports matches"]}];

    frijolitosDelFuturo.forEach(frijol => {
        let i = frijol.length;
        
        frijol.hobbies.forEach(hobby => {
            
            console.log(hobby)
        });
    
    });
    
    
    
    
    frijolitosDelFuturo.forEach(student => {
        
        console.log(student);    
    });
    
    frijolitosDelFuturo.forEach(person =>{
        person.hobbies.forEach(activity => {
            console.log(activity)
        });
    });