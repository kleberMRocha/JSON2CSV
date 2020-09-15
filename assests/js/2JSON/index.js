
btnJson.addEventListener('click', ()=>{

(!inputArea.value) && setError('The field cannot be empty!');
file = 'file.json';

let lines = inputArea.value.trim().split('\n');
let jsonKeys = lines[0].replace(/["]/gi,'').split(',');
let jsonValues = [];


lines.shift()

lines.forEach(element => {
    jsonValues.push(element.match(csvSeparator));
});


let finalJason = [];

console.log(jsonValues)

jsonValues.map((value) =>{
    let obj ={};
    value.forEach((value,index) =>{
        (obj[jsonKeys[index]] = value.replace(/"/gm,""))

    });
    finalJason.push(obj);  
});

outputArea.value = (JSON.stringify(finalJason).replace(/[\/\\]/gm," "));


});
    
 
    