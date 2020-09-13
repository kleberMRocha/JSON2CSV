
btnJson.addEventListener('click', ()=>{

    if(!inputArea.value){
        setError('The field cannot be empty!');
        return;
    }

    let removeDoubleQuotes = inputArea.value.replace(removeDq,'');
    let separatedbyLinebreak = removeDoubleQuotes.trim().split(/\n/);
    let jsonContent = [];
    let keys = [];
    
    separatedbyLinebreak[0].split(csvSeparator).forEach(key => keys.push(key));
    separatedbyLinebreak.shift();
    
    
    separatedbyLinebreak.map(value =>{
        let obj = {};
    
        value.split(csvSeparator).forEach((value,index)=>{
            
            obj[`${keys[index]}`] = value
         
        })
        
        return jsonContent.push(obj);
       
    
    });
    
    
    if(jsonContent.length === 0){
        setError('Invalid content!');
        return;
    }
    outputArea.value = JSON.stringify(jsonContent);
    
    
    });
    
 
    