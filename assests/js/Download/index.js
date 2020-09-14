
download.addEventListener('click',()=> file && downloadFile(file, outputArea.value))

function downloadFile(filename, text){
var element = document.createElement('a');
element.setAttribute('href', 'data:text/csv; charset=utf-8,' + encodeURIComponent(text));
element.setAttribute('download', filename);

element.style.display = 'none';

document.body.appendChild(element);
element.click();
document.body.removeChild(element);
file = '';
   
}
