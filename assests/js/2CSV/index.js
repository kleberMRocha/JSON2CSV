btncsv.addEventListener('click',()=>{

(!inputArea.value) && setError('The field cannot be empty!');

try {
    json  = JSON.parse(inputArea.value);
} catch (error) {
    setError('Invalid content!');
    return;
}

if(json.length === undefined){
    json = [JSON.parse(inputArea.value)];
}


let values = json.map(value => (Object.values(value).join(',')));

let csvContent = `${Object.keys(json[0])}\n${values.join(' \n')}`;

outputArea.value = csvContent;

file = 'file.csv';
 
});