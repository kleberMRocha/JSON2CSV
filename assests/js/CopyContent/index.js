btnCopy.addEventListener('click',()=>{
    navigator.clipboard.writeText(outputArea.value);
    setAlert('Text copied to clipboard!')
});

