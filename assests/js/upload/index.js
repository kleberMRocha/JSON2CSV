 btnSubFile.addEventListener('click',()=> {
        fileInp.click();
      
})

fileInp.addEventListener('change',(e)=>{

const SupportedTypes = ["csv","json","txt"];
let fileType = (fileInp.value.split('.')[(fileInp.value.split('.').length)-1])

let isSupported = SupportedTypes.some(file => file == fileType);

isSupported ? fileReader(e.target.files[0],inputArea) : setError('wrong file type please select again');

});


function fileReader(myFile,outPut){

    let reader = new FileReader();
    reader.addEventListener('load',(e)=>{
        outPut.value = e.target.result; 

    });

    reader.readAsBinaryString(myFile);


}


