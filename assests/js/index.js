const inputArea = document.querySelector('#inputArea');
const outputArea = document.querySelector('#outputArea');
const cleanBtn = document.querySelector('#clean');
const btnCopy = document.querySelector('#copy');
const btnJson = document.querySelector('#btnJson');
const msgError = document.querySelector('#error');

//RegExp
const lineBreak = /\r?\n|\r/gmi;
const removeDq = /["']/gmi;
const csvSeparator = /[;,]/gmi;

cleanBtn.addEventListener('click',()=>{
  inputArea.value = '';
  outputArea.value = '';
})


function setError(value){

    msgError.innerHTML = value;
    msgError.classList.add('error');
    setTimeout(()=>{
        msgError.innerHTML = '';
        msgError.classList.remove('error');
    },2000);

}

function setAlert(value){

    msgError.innerHTML = value;
    msgError.classList.add('alert');
    setTimeout(()=>{
        msgError.innerHTML = '';
        msgError.classList.remove('alert');
    },2000);

} 